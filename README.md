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

## nextjs 中使用

```javascript 
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import uuumpkg from "uuumpkg";
import { useEffect } from "react";


export default function Home() {

  useEffect(()=>{

    uuumpkg.init({ serverUrl: "http://localhost:3000/uuu", userid: "0001", console: true });

   return ()=>{

   } 
  })
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image

          data-uuu_loaded="Hello被加载了！"
          data-uuu="按钮1被点击了！"
          className={`${styles.logo} uuu_loaded uuu`}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

```

## example vue project 

https://github.com/dreamYiZ/uuu-vue-test

## example nextjs project 

https://github.com/dreamYiZ/uuu-react-test


## Thank You
