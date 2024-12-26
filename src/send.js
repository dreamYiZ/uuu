// send.js

async function sendJSON(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST', // 使用 POST 方法
            headers: {
                'Content-Type': 'application/json' // 设置请求头
            },
            body: JSON.stringify(data) // 将 JSON 数据转换为字符串
        });

        // 检查响应状态
        if (response.ok) {
            const responseData = await response.json(); // 解析响应数据为 JSON
            console.log('Request succeeded:', responseData);
        } else {
            console.error('Request failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
}

// 示例调用
// const url = 'https://example.com/api';
// const data = {
//     key1: 'value1',
//     key2: 'value2'
// };

// sendJSON(url, data);
