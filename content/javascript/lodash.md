---
emoji: ๐
title: ์ปดํฌ๋ํธ ์ฑ๋ฅ ํฅ์(Javascript Lodash)
date: '2022-05-14 16:00:00'
author: ํ์ฝ๋ฉ
tags: tech-interview react javascript Lodash
categories: tech-interview javascript react
---

## Lodash๋?

ํจ์ํ ํ๋ก๊ทธ๋๋ฐ ํจ๋ฌ๋ค์์ ์ฌ์ฉํ์ฌ ์ผ๋ฐ์ ์ธ ํ๋ก๊ทธ๋๋ฐ ์์์ ์ํ ์ ํธ๋ฆฌํฐ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ Javascript ๋ผ์ด๋ธ๋ฌ๋ฆฌ(Wikipedia)

## debounce์ throttle

debounce์ throttle์ ์ด๋ฒคํธ๊ฐ ์ฐ์์ ์ผ๋ก ๋ฐ์ํ  ๋, ์ฝ๋ฐฑํจ์์ ๋ถํ์ํ ์คํ์ ์ค์ฌ์ฃผ๋ ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ค. ์๋ฒ๋ก์ ๋ถํ์ํ ์์ฒญ(Request)์ ์ค์ผ ์ ์๊ณ , ๋ถํ์ํ ๋ ๋๋ง์ ๋ฐฉ์งํ  ์ ์์ด ์ปดํฌ๋ํธ ์ฑ๋ฅ ๊ฐ์ ์ ๋์์ด ๋๋ค. ๋ํ, ์ธ๋ถ API๋ฅผ ํธ์ถํด์ผ ํ๋ ๊ฒฝ์ฐ, ๊ณผ๋ํ ์๋ฒ ์์ฒญ์ ๋ง์์ค ์ ์๋ ๋ฉด์์ ์์ฃผ ์ค์ํ ๊ธฐ๋ฅ์ ํ๋ค๊ณ  ์๊ฐํ๋ค.

debounce๋ ์ด๋ฒคํธ๊ฐ ์ข๋ฃ๋ ๋ค, ์ผ์  ์๊ฐ ๋ค์ ์ฝ๋ฐฑํจ์๊ฐ ์คํ๋๋ค. throttle์ ์ฝ๋ฐฑ ํจ์๋ฅผ ์ผ์  ์ฃผ๊ธฐ๋ง๋ค ํ ๋ฒ ์คํํ๋ค.

```javascript
_.debounce(func, [wait=0], [options={}])
```

```javascipt
_.throttle(func, [wait=0], [options={}])
```

<br /><br />

### debounce ์ ์ฉ ์์

![beforeDebounce](https://user-images.githubusercontent.com/50731733/168414844-c97ae2dd-9c31-4a94-821f-9f8150173930.gif)

![afterDebounce](https://user-images.githubusercontent.com/50731733/168414968-8ce3c1a9-2115-4d82-b4fa-f345fef6f303.gif)

<br /><br /><br />