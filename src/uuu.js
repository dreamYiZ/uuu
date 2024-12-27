import { serverUrl } from "./server_url";
import { sendJSON } from "./send";
import { limit } from "./limit";
import { setupClickEvent } from "./event_click";
import { setupLoadedEvent } from "./event_loaded";
import domDocument from "./document";

if (!domDocument || Object.keys(domDocument).length === 0) {
    console.error('document not found');
} else {
    console.log('uuu load');
    if (window['uuu']) {
        // window['uuu'] 已存在，可能已经初始化过
    } else {
        const uuu = {
            config: {},
            init: function (payload = { serverUrl, limit }) {
                this.config = { ...this.config, ...payload };
                setupClickEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                setupLoadedEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                console.log('uuu init');
            },
            eventCallback: function (data) {
                console.log('eventCallback triggered with data:', data);
                sendJSON({
                    serverUrl: this.config.serverUrl,
                    data,
                });
            }
        };
        window['uuu'] = uuu;
    }
}
