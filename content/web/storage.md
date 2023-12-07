---
emoji: 🔍
title: LocalStorage, SessionStorage, Cookie
date: '2021-12-22 18:00:00'
author: Covy
tags: tech-interview web localstorage sessionstorage cookie
categories: tech-interview web
---

## Web Storage

HTML5에는 웹의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 Web Storage 스펙이 포함되어 있다. <br /><br />
Web Storage의 개념은 key/value 쌍으로 데이터를 저장하고 key를 기반으로 데이터를 조회하는 패턴이다. <br /><br />
영구저장소(LocalStorage)와 임시저장소(SessionStorage)를 따로 두어 데이터의 지속성을 구분할 수 있어 환경에 맞게 선택이 가능하다. <br /><br />

Web Storage는 기존 Cookie와 매우 유사한 개념이다. <br /><br />
몇 가지 쿠키의 단점을 보완하기 위해 도입되었다. <br /><br />

### Web Storage와 Cookie의 차이점

- 쿠키는 매번 서버로 전송된다.
웹사이트에서 쿠키를 설정하면 이후 모든 웹 요청은 쿠키정보를 포함하여 서버로 전송된다.

- 단순 문자열을 넘어 객체정보를 저장할 수 있다.
문자열 기반 데이터이 외에 구조화된 객체를 저장할 수 있다.

- 제한 용량이 쿠키에 비해 자유롭다.
쿠키는 개수와 용량에 제한이 있다. 하나의 사이트에서 저장할 수 있는 최대 쿠키 수는 20개, 크기는 4KB이다.  
이에 반해 Web Storage는 브라우저에 따라 다를 수 있지만 보통 5MB 이상이다.

- 영구 데이터 저장이 가능하다.
쿠키는 만료일자를 지정하게 되어 있어 언젠가 제거된다. 만료일자를 지정하지 않으면 세션 쿠키가 된다. 영구 쿠키를 원한다면 만료일자를 굉장히 멀게 설정하여 해결할 수 있다.  
Web Storage는 만료 기간의 설정이 없다. 즉, 한번 저장한 데이터는 영구적으로 존재한다.

<br />

### LocalStorage와 SessionStorage

Web Storage는 데이터의 지속성과 관련하여 두 가지 용도의 저장소를 제공한다.  <br />
기본적으로 Web Storage는 쿠키와 마찬가지로 사이트의 도메인 단위로 접근이 제한된다.  
예를 들어 A도메인에서 저장한 데이터는 B 도메인에서 조회할 수 없다. (보안적인 측면)  

#### LocalStorage

저장한 데이터를 명시적으로 지우지 않는 이상 영구적으로 보관이 가능하다. 앞서 말한대로 도메인마다 별도로 로컬 스토리지가 생성된다. Windows 전역 객체의 LocalStorage라는 컬렉션을 통해 저장과 조회가 이루어진다.  

#### SessionStorage

SessionStorage는 데이터의 지속성과 액세스 범위에 특수한 제한이 존재한다. SessionStorage는 windows 전역 객체의 sessionStorage라는 컬렉션을 통해 저장과 조회가 이루어진다.

Refference: https://velog.io/@ejchaid/localstorage-sessionstorage-cookie%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90

<br /><br /><br />