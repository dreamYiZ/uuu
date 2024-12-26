import { serverUrl } from "./server_url";
import { sendJSON } from "./send";
import { limit } from "./limit";
import { setupClickEvent } from "./event_click";
import domDocument from "./document";

if (!domDocument || Object.keys(domDocument).length === 0) {
    console.error('document not found');
} else {
    console.log('uuu load');
    const uuu = {
        config: {},
        init: function (payload = { serverUrl, limit }) {
            this.config = { ...this.config, ...payload };


            setupClickEvent(this.eventCallback, this.config.limit)
            console.log('uuu init');
        },
        eventCallback: function (data) {
            sendJSON({
                serverUrl: this.config.serverUrl,
                data,
            })
        }
    };

    window['uuu'] = uuu;
}
