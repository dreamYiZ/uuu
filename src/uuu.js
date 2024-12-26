import { serverUrl } from "./server_url";
import { sendJSON } from "./send";
import { limit } from "./limit";
import domDocument from "./document";

if (!domDocument || Object.keys(domDocument).length === 0) {
    console.error('document not found');
} else {
    console.log('uuu load');
    const uuu = {
        config: {},
        init: function (payload = { serverUrl, limit }) {
            this.config = { ...this.config, ...payload };
            console.log('uuu init');
        },
    };

    window['uuu'] = uuu;
}
