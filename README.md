# uuu

## 说明

记录元素是否加载

## 此项目代码由AI生成代码


## 使用方法

```bash

npm i uuumpkg

```

```javascript

import { createApp } from 'vue'
import App from './App.vue'
import uuumpkg from "uuumpkg";

console.log('uuumpkg', uuumpkg);

uuumpkg.init({ serverUrl: "http://localhost:3000/uuu", userid: "0001", console: true });

createApp(App).mount('#app')


```

```html

<template>
  <img alt="Vue logo" src="./assets/logo.png"  class="uuu" data-uuu="按钮1被点击了！">
  <HelloWorld msg="Welcome to Your Vue.js App" class="uuu_loaded" data-uuu_loaded="Hello被加载了！"/>
</template>


```

