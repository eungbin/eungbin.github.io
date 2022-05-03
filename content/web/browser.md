---
emoji: 🔍
title: Web 브라우저의 동작 순서
date: '2022-05-03 18:00:00'
author: 펀코딩
tags: tech-interview web browser
categories: tech-interview web
---

## 웹 브라우저의 동작 순서

1. 사용자가 브라우저에 도메인 입력(ex. https://www.naver.com)
2. 웹 브라우저는 DNS에 입력된 도메인의 IP 주소를 요청
3. 해당 IP주소에 해당하는 서버로 접근(이때, random sequence 번호를 가지고 접근)
4. 서버에서 브라우저에 번호에 1을 더하여 응답(random sequence + 1)
5. 브라우저에서 다시 서버에 1을 더하여 응답
6. (3, 4, 5 과정을 3 Way-Handshake 라고 한다. 브라우저가 서버에게 자신의 존재를 알리고 -> 서버는 브라우저의 존재를 확인했다는 사실 + 자신의 존재를 알리는 신호를 브라우저에 보냄 -> 브라우저는 서버의 존재를 확인했다는 신호를 서버에 다시 보냄 ===> 위 세 과정을 통해 브라우저와 서버간의 TCP 연결이 성립된다.)

## 브라우저 렌더링 과정

<br /><br /><br />

Refference <br />
<a href="https://www.youtube.com/watch?v=FQHNg9gCWpg">
웹 브라우저의 동작 순서(유튜브)
</a>