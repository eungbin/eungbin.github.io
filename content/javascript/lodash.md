---
emoji: 🔍
title: 컴포넌트 성능 향상(Javascript Lodash)
date: '2022-05-14 16:00:00'
author: 펀코딩
tags: tech-interview react javascript Lodash
categories: tech-interview javascript react
---

## Lodash란?

함수형 프로그래밍 패러다임을 사용하여 일반적인 프로그래밍 작업을 위한 유틸리티 기능을 제공하는 Javascript 라이브러리(Wikipedia)

## debounce와 throttle

debounce와 throttle은 이벤트가 연속적으로 발생할 때, 콜백함수의 불필요한 실행을 줄여주는 기능을 제공한다. 서버로의 불필요한 요청(Request)을 줄일 수 있고, 불필요한 렌더링을 방지할 수 있어 컴포넌트 성능 개선에 도움이 된다. 또한, 외부 API를 호출해야 하는 경우, 과도한 서버 요청을 막아줄 수 있는 면에서 아주 중요한 기능을 한다고 생각한다.

debounce는 이벤트가 종료된 뒤, 일정 시간 뒤에 콜백함수가 실행된다. throttle은 콜백 함수를 일정 주기마다 한 번 실행한다.

```javascript
_.debounce(func, [wait=0], [options={}])
```

```javascipt
_.throttle(func, [wait=0], [options={}])
```

<br /><br />

### debounce 적용 예시

![beforeDebounce](https://user-images.githubusercontent.com/50731733/168414844-c97ae2dd-9c31-4a94-821f-9f8150173930.gif)

![afterDebounce](https://user-images.githubusercontent.com/50731733/168414968-8ce3c1a9-2115-4d82-b4fa-f345fef6f303.gif)

<br /><br /><br />