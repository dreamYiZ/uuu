// event_loaded.js
import { uuu_loaded_className, uuu_loaded_triggered_className } from "./constant";
import domDocument from "./document";

function setupLoadedEvent(callback, limit) {
    const observer = new MutationObserver((mutations) => {
        console.log('MutationObserver', MutationObserver);
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const elements = domDocument.getElementsByClassName(uuu_loaded_className);
                Array.from(elements).forEach((element) => {
                    // 如果元素已经有触发标记，则跳过
                    if (element.classList.contains(uuu_loaded_triggered_className)) {
                        return;
                    }
                    
                    const data = element.getAttribute('data-uuu_loaded'); // 获取 data-uuu_loaded 属性值
                    
                    // 传递 data-uuu_loaded 值到回调函数
                    callback({
                        text: data,
                        timestamp: +new Date(),
                    });

                    // 设置触发标记
                    element.classList.add(uuu_loaded_triggered_className);
                });
            }
        });
    });

    // 配置 MutationObserver 监听的目标和选项
    observer.observe(domDocument.body, {
        childList: true,
        subtree: true
    });

    // 初始检查
    const initialElements = domDocument.getElementsByClassName(uuu_loaded_className);
    Array.from(initialElements).forEach((element) => {
        // 如果元素已经有触发标记，则跳过
        if (element.classList.contains(uuu_loaded_triggered_className)) {
            return;
        }
        
        const data = element.getAttribute('data-uuu_loaded'); // 获取 data-uuu_loaded 属性值
        
        // 传递 data-uuu_loaded 值到回调函数
        callback({
            text: data,
            timestamp: +new Date(),
        });

        // 设置触发标记
        element.classList.add(uuu_loaded_triggered_className);
    });
}

export { setupLoadedEvent }
