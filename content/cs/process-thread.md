---
emoji: 🔍
title: Process와 Thread
date: '2021-12-02 19:00:00'
author: Covy
tags: tech-interview CS process thread
categories: tech-interview cs
---

## 프로세스(Process) 란?

운영체제로부터 자원을 할당받은 작업의 단위  
프로그램이 메모리에 적재된 상태  

## 스레드(Thread) 란?

프로세스가 할당받은 자원을 이용하는 실행의 흐름 단위

### 프로그램 > 프로세스 > 스레드

## 프로세스와 스레드의 차이

프로세스는 프로그램을 실행하는 순간 해당 파일이 컴퓨터 메모리에 적재되고, 이 동적인 상태의 프로그램을 프로세스라고 함.  

스레드는 프로세스를 구성하는 더 작은 실행 단위의 개념  

프로세스는 메모리에 적재될 때 운영체제로부터 독자적인 시스템 자원을 할당받는 반면, 스레드는 프로세스 내부에서 다른 메모리 영역을 같은 프로세스 내 다른 스레드와 공유한다.  

<br /><br /><br />