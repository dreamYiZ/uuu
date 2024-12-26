// event_click.js

function setupClickEvent(callback, limit) {
    let timer = null;

    return function (event) {
        if (timer) {
            return;
        }

        callback(event);

        timer = setTimeout(() => {
            timer = null;
        }, limit);
    };
}

// // 示例使用
// const button = document.getElementById('yourButtonId'); // 将 'yourButtonId' 替换为实际按钮的ID
// const handleClick = (event) => {
//     console.log('Button clicked:', event);
// };

// button.addEventListener('click', setupClickEvent(handleClick, 1000)); // 设置 1000 毫秒的限制


export { setupClickEvent }