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
                console: false,
            },
            init: function (payload = { serverUrl, limit, enabled, console, userid, }) {
                this.config = { ...this.config, ...payload };

                if (this.config.enabled.includes('click')) {
                    this.removeClickEvent = setupClickEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                }
                if (this.config.enabled.includes('loaded')) {
                    this.removeLoadedEvent = setupLoadedEvent(this.eventCallback.bind(this), this.config.limit); // 确保 this 指向 uuu
                }
                this.consoleLog('uuu init');
            },
            destroy: function () {
                if (this.removeClickEvent) this.removeClickEvent(); // 移除点击事件监听
                if (this.removeLoadedEvent) this.removeLoadedEvent(); // 移除加载事件监听
                this.consoleLog('uuu destroyed');
            },
            eventCallback: function (data) {
                this.consoleLog('eventCallback triggered with data:', data);
                sendJSON({
                    serverUrl: this.config.serverUrl,
                    data: {
                        ...data,
                        userid: this.config.userid,
                    },
                });
            },
            consoleLog: function (msg, ...otherArgs) {
                if (this.config.console) {
                    console.log(msg, ...otherArgs);
                }
            },
        };
        window['uuu'] = uuu;
    }
}

const uuuPlaceHolder = {
    init: function (){
        console.log('uuuPlaceHolder init');
    },
    destroy: function(){
        console.log('uuuPlaceHolder destroy');
    }
}

const uuu = window ? window['uuu'] : uuuPlaceHolder;
export { uuu };
