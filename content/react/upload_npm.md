---
emoji: 🔍
title: NPM 배포하기
date: '2024-04-03 16:30:00'
author: Covy
tags: tech-interview react
categories: tech-interview react
---

## NPM 배포하기
cra로 설정한 full-page-scroll 개발 중 문득  내가 개발한 기능을 npm에 배포해보면 어떨까? 하는 재미있는 생각이 들었다. 바로 배포해보자!

### 패키지 이름
먼저, 패키지 이름이 겹치는지 확인해야 한다.
```bash
npm info [package_name]
```
해당 이름의 패키지가 존재하지 않는다면, 배포가 가능하다.<br />

### 프로젝트 구조
내 프로젝트의 구조는 다음과 같다.
```
...
src
ㄴ components
   ㄴ FullPageScroll
      ㄴ index.jsx
      ㄴ css
   ㄴ index.js
...
```
components 폴더 내의 FullPageScroll을 배포할 계획이다.
components 폴더 내의 index.js에 배포할 컴포넌트를 불러온 뒤, export 해준다.
```javascript
import FullPageScroll from './FullPageScroll';

export { FullPageScroll };
```

### babel 설치
```bash
npm install cross-env @babel/cli @babel/preset-env @babel-preset-react --save-dev
```

package.json과 같은 경로에 babel.config.js 작성
```javascript
module.export = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['macros'];

  return {
    presets,
    plugins,
  };
};
```

package.json 작성 (아래는 내 react-fp-scroll 패키지의 package.json 파일이다.)
```json
{
  "name": "react-fp-scroll",
  "version": "0.1.0",
  "license": "MIT",
  "main": "dist/index.js",
  "bugs": {
    "url": "https://github.com/eungbin/react-fp-scroll/issues",
    "email": "programmer97@naver.com"
  },
  "author": "Covy Kim <programmer97@naver.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/eungbin/react-fp-scroll.git"
  },
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "clean": "rimraf dist",
    "compile": "npm run clean && cross-env NODE_ENV=production babel src/components --out-dir dist --copy-files"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/cli": "^7.24.1",
    "@babel/preset-env": "^7.24.3",
    "@babel/preset-react": "^7.24.1",
    "cross-env": "^7.0.3"
  }
}
```

### npm login
package.json 까지 작성해준 뒤, 배포를 하기 전 npm 계정으로 로그인을 해야한다.
```bash
npm login
```
로그인이 정상적으로 되었다면,
```bash
npm publish
```
명령어로 배포하면 완료된다.

<br /><br />

Refference: https://dmdwn3979.tistory.com/25
<br />

`npm` `react` `full-page-scroll` `npm 배포` `npm publish`

<br /><br /><br />