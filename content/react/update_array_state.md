---
emoji: 🔍
title: React Update Array State
date: '2024-02-27 15:20:00'
author: Covy
tags: tech-interview react
categories: tech-interview react
---

## React에서의 배열 state 관리
배열 state를 업데이트하기 위해서는 배열에 직접적으로 영향이 가지 않는 방법을 이용해야 한다. (state에 저장한 배열은 변경이 불가능한 것으로 취급해야 하기 때문) 객체 state를 업데이트할 때와 마찬가지로, state에 저장된 배열을 업데이트하려면, 새로운 배열을 만들어 사용해야 한다.

### 추천하지 않는 방법 예시
추가: push, unshift
삭제: pop, shift, splice
교체: splice, arr[i] = ...
정렬: reverse, sort

### 추천하는 방법 예시
추가: concat, [...arr] spread syntax
삭제: filter, slice
교체: map
정렬: 배열을 복사한 뒤 처리

### 두 방식 비교 코드 (배열에 값 추가 예시)
``` javascript
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
```

``` javascript
setArtists( // Replace the state
  [ // with a new array
    ...artists, // that contains all the old items
    { id: nextId++, name: name } // and one new item at the end
  ]
);
```

<br /><br />

Refference: https://react-ko.dev/learn/updating-arrays-in-state <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<br /><br /><br />