// event_click.js
import { uuu_className } from "./constant";
import domDocument from "./document";

function setupClickEvent(callback, limit) {
    let timer = null;

    domDocument.addEventListener('click', function (event) {
        if (event.target.classList.contains(uuu_className)) {
            if (timer) {
                return;
            }

            const data = event.target.getAttribute('data-uuu'); // 获取 data-uuu 属性值

            callback({
                text: data,
                timestamp: +new Date(),
            }); // 传递 data-uuu 值到回调函数

            timer = setTimeout(() => {
                timer = null;
            }, limit);
        }
    });
}

export { setupClickEvent }
