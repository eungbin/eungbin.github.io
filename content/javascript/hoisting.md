---
emoji: π
title: Javascript Hoisting(νΈμ΄μ€ν)
date: '2021-11-27 16:10:00'
author: νμ½λ©
tags: tech-interview javascript hoisting
categories: tech-interview javascript
---

## Javscript Hoisting(νΈμ΄μ€ν) μ΄λ?
ν¨μ μμ μλ μ μΈλ€μ λͺ¨λ λμ΄μ¬λ €μ ν΄λΉ ν¨μ μ ν¨λ²μμ μ΅μλ¨μ μ μΈνλ κ²  
λ³μμ κ²½μ° varλ‘ μ μΈν λ³μλ§ νΈμ΄μ€νμ΄ μ μ©λλ€. (let, const λ³μλ μ μ©λμ§ μμ)

## μμ

### μ μ© μ 

```javascript
console.log("hello");
var myname = "KIM";
let myname = "KIM222";
```

### μ μ© ν

```javascript
var myname;
console.log("hello");
myname = "KIM";
let myname = "KIM222";
```

### λν, ν¨μμμλ ν¨μ μ μΈλ¬Έμ νΈμ΄μ€νμ΄ μ μ©λκ³ , ν¨μ ννμμ μ μ©λμ§ μλλ€.

## μμ

### μ μ© μ 

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

### μ μ© ν

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

## Hoisting μ μ© μ°μ μμ

λ³μ μ μΈλ¬Έμ΄ ν¨μ μ μΈλ¬Έλ³΄λ€ μλ‘ λμ΄μ¬λ €μ§λ€.

<br /><br /><br />