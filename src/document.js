// 检查是否在浏览器环境中
if (typeof window !== 'undefined') {
    if (typeof document !== 'undefined') {
        // 导出 document
        module.exports = document;
        
        // 这里可以添加鼠标点击监听，鼠标移动事件监听，键盘事件监听
        // document.addEventListener('click', (event) => {
        //     console.log('Document clicked:', event);
        // });

        // document.addEventListener('mousemove', (event) => {
        //     console.log('Mouse moved:', event);
        // });

        // document.addEventListener('keydown', (event) => {
        //     console.log('Key pressed:', event);
        // });
        
    } else {
        console.error("document is undefined");
    }
} else {
    console.error("window is undefined");
}
