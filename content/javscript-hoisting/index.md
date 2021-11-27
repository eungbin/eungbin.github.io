---
emoji: 🔍
title: Javascript Hoisting(호이스팅)
date: '2021-11-27 16:10:00'
author: 펀코딩
tags: tech-interview
categories: tech-interview
---

## Javscript Hoisting(호이스팅) 이란?
함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효범위의 최상단에 선언하는 것  
변수의 경우 var로 선언한 변수만 호이스팅이 적용된다. (let, const 변수는 적용되지 않음)

## 예시

### 적용 전

```javascript
console.log("hello");
var myname = "KIM";
let myname = "KIM222";
```

### 적용 후

```javascript
var myname;
console.log("hello");
myname = "KIM";
let myname = "KIM222";
```

### 또한, 함수에서는 함수 선언문은 호이스팅이 적용되고, 함수 표현식은 적용되지 않는다.

## 예시

### 적용 전

```javascript
foo();
foo2();

function foo() {
    console.log("TEST");
}

var foo2 = function() {
    console.log("TEST2");
}
```

### 적용 후

```javascript
var foo2;
function foo() {
    console.log("TEST");
}

foo();
foo2();     // ERROR!!!

foo2 = function() {
    console.log("TEST2");
}
```

## Hoisting 적용 우선순위

변수 선언문이 함수 선언문보다 위로 끌어올려진다.