// uuu.js
import { serverUrl } from "./server_url";
import { sendJSON } from "./send";
import { limit } from "./limit";
import { setupClickEvent } from "./event_click";
import { setupLoadedEvent } from "./event_loaded";
import domDocument from "./document";
import { ENABLE_LIST } from "./constant";

if (!domDocument || Object.keys(domDocument).length === 0) {
    console.error('document not found');
} else {
    console.log('uuu load');
    if (window['uuu']) {
        // window['uuu'] 已存在，可能已经初始化过
    } else {
        const uuu = {
            ENABLE_LIST,
            config: {
                enabled: ENABLE_LIST,
            },
            init: function (payload = { serverUrl, limit, enabled }) {
                this.config = { ...this.config, ...payload };

                if (this.config.enabled.includes('click')) {
                    this.removeClickEvent = setupClickEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                }
                if (this.config.enabled.includes('loaded')) {
                    this.removeLoadedEvent = setupLoadedEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                }
                console.log('uuu init');
            },
            destroy: function () {
                if (this.removeClickEvent) this.removeClickEvent(); // 移除点击事件监听
                if (this.removeLoadedEvent) this.removeLoadedEvent(); // 移除加载事件监听
                console.log('uuu destroyed');
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
