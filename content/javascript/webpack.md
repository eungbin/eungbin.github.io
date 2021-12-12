---
emoji: 🔍
title: Webpack(웹팩)
date: '2021-12-12 18:00:00'
author: 펀코딩
tags: tech-interview javascript webpack
categories: tech-interview javascript web
---

## Webpack(웹팩) 이란?

현대 Javascript Application의 Static Module Bundler  
필요한 다수의 자바스크립트 파일을 하나의 자바스크립트 파일로 만들어 주는 것을 말한다.  <br /><br />

### Bundle(번들) 이란?

소프트웨어 및 일부 하드웨어와 함께 작동하는 데 필요한 모든 것을 포함하는 Package  <br /><br />

## Webpack을 사용하는 이유

연관되어 있는 자바스크립트 파일들을 하나의 파일로 묶어줘서 관리하기 편하다.  
컴파일할 때, 여러 모듈들의 파일을 읽어오는데 걸리는 시간을 해결하기 위해 여러 파일을 하나의 파일로 번들링 해준다.  
하나의 자바스크립트 파일로 만들어서 웹페이지 성능을 최적화 해준다.  
다른 Module Bundler도 많이 존재하지만, performance가 우수하다.  <br /><br />

### Babel(바벨) 이란?

ES6+ 버전 이상의 자바스크립트나 JSX, 타입스크립트 코드를 하위 버전의 자바스크립트 코드로 변환 시켜 IE나 다른 브라우저 내에서 동작할 수 있도록 하는 트랜스 파일러  <br /><br />

### Babel을 사용하는 이유

최신 브라우저에서 동작하는 기능을 다른 브라우저나 이전 버전의 브라우저에서 구현해야 하는 경우, 기능 자체를 생략하거나 단순화해야 하는 상황이 발생한다. 이런 이슈는 코드의 일관성을 해칠 수 있고, 협업 과정에서 또 다른 문제를 야기할 수 있다. 바벨은 이런 문제점을 해결하고 보완하기 위해 등장했다.  
즉, 크로스 브라우징을 위해 사용한다.  <br /><br />

## 폴더 생성 및 초기화

프로젝트 파일을 생성하고 package.json 파일 초기화

```bash
mkdir cra
cd cra
npm init -y
```

<hr />

```bash
mkdir src dist public
```

<br />

<ul>
    <li>src : react 작업을 위한 폴더</li>
    <li>dist : 번들링 결과물의 폴더</li>
    <li>public : 정적 파일을 위한 폴더</li>
</ul>

<hr />

public 폴더에 `inhex.html` 파일 생성 후, 루트 `<div>`를 만든다.

```bash
cd public
touch index.html
```

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CRA 없이 리액트 개발 환경 구축</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

<hr />

리액트 컴포넌트를 렌더링할 `index.js` 파일 생성  

```bash
cd src
touch index.js
```

<hr />

## 리액트 설치

리액트의 핵심 패키지들을 설치  

<ul>
    <li>react : 리액트 코어</li>
    <li>react-dom : 리액트와 DOM을 연결</li>
</ul>

```bash
npm install react react-dom
```

## 바벨 설치

리액트에서는 ES6와 JSX를 사용한다. 브라우저 호환성을 위해 ES6 => ES5, JSX => js로 트랜스 파일링을 해주는 바벨을 설치  

```bash
npm install @babel/core @babel/preset-react @babel/preset-env -D
```

<ul>
    <li>@babel/core : 바벨의 코어</li>
    <li>@babel/present-react : 리액트 JSX를 트랜스파일링</li>
    <li>@babel/present-env : ES6코드를 ES5로 트랜스파일링</li>
</ul>

### 설정

루트 경로에서 `babel.config.js`파일을 생성하고 프리셋들을 설정

```javascript
module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
};
```

## 웹팩

모듈 번들러인 웹팩의 핵심 패키지들을 설치  

```bash
npm install webpack webpack-cli webpack-dev-server -D
```

<ul>
    <li>webpack : 웹팩의 코어</li>
    <li>webpack-cli : 웹팩을 커맨드라인에서 사용</li>
    <li>webpack-dev-server : 웹팩을 메모리 상에 빌드하여 개발 서버를 구동</li>
</ul>

### 로더

웹팩 번들링에 필요한 로더를 설치한다.

```bash
npm install babel-loader style-loader css-loader file-loader -D
```

<ul>
    <li>babel-loader : JSX 및 ES6+ 문법을 트랜스 파일링</li>
    <li>style-loader : 변환된 CSS 파일을 style 태그로 감싸서 도입 </li>
    <li>css-loader : CSS 파일을 자바스크립트가 이해할 수 있도록 변환</li>
    <li>file-loader : 이미지 및 폰트 등의 파일 로딩</li>
</ul>

### 플러그인

웹팩 번들링 후 적용할 플러그인을 설치  

```bash
npm install html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin -D
```

<ul>
    <li>html-webpack-plugin : HTML 파일에 번들링된 자바스크립트 파일을 삽입해주고 번들링된 결과가 저장되는 폴더에 옮김</li>
    <li>clean-webpack-plugin : 번들링을 할 때마다 이전 번들링 결과물 제거</li>
    <li>mini-css-extract-plugin : css 파일로 변환해주는 플러그인</li>
</ul>

### 웹팩 설정

루트 경로에 `webpack.config.js` 파일 생성  

<ul>
    <li>mode : development(개발용), production(배포용), none 3가지 모드가 존재함</li>
    <li>entry : 웹팩을 실행할 대상 파일</li>
</ul>

```javascript
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

<ul>
    <li>output : 웹팩의 결과물에 대한 정보를 입력하는 속성</li>
</ul>

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), // 결과물 경로
    filename: 'bundle.js', // 결과물 파일명
  },
};
```

<ul>
    <li>resolve : 웹팩이 모듈을 처리하는 방식을 설정하는 속성으로 확장자를 생략해도 인식하게 만든다.</li>
</ul>

```javascript
  resolve: {
    extensions: ['.js', '.jsx'],
  },

```

<ul>
    <li>devtool : source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구</li>
</ul>

```javascript
  devtool: 'eval-cheap-source-map',
```

<ul>
    <li>devServer : webpack-dev-server의 옵션 설정</li>
</ul>

`overlay` : 에러 발생 시 브라우저에 내용을 띄울지 설정  
`hot` : 모듈의 변화만 자동으로 로드하는 HMR(Hot Module Replacement) 기능 활성화 설정  
`writeToDisk` :  메모리 뿐만 아니라 파일도 만들것인지 설정  

```javascript
  devServer: {
    port: 5500,
    overlay: true,
    hot: true,
    writeToDisk: true,
  },
```

<ul>
    <li>modules, rules : 모듈에 적용할 로더들과 그 옵션들을 설정</li>
</ul>

`test` : 어떤 파일에 적용할지 확장자 작성  
`exclude` : 로더에서 제외할 파일 설정  
`loader` : 적용할 로더가 1개라면 `loader`로 설정  
`use` : 적용할 로더가 2개 이상이라면 `use`배열로 설정  

```javascript
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
```

<ul>
    <li>플러그인 적용</li>
</ul>

설치했던 플러그인을 불러와 설정해준다.  
html-webpack=plugin의 `template`은 번들링 파일을 주입하고 번들링 폴더로 복사할 대상 HTML 파일을 명시하는 옵션  

```javascript
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

...

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
  ],
```

<ul>
    <li>package.json script 작성</li>
</ul>

`--progress`옵션은 번들링 진행 상태를 보여준다.  

```javascript
  "scripts": {
    "dev": "webpack-dev-server --progress & open http://localhost:5000/",
    "build": "webpack --pregress"
  },
```

## 리액트 컴포넌트 생성

```bash
cd src
touch App.css App.jsx
```

<ul>
    <li>App.jsx</li>
</ul>

```javascript
import React from 'react';
import './App.css';

const App = () => {
  return <div className='container' />;
};

export default App;
```

<ul>
    <li>App.css</li>
</ul>

```javascript
.container {
  width: 500px;
  height: 200px;
  margin: 0 auto;
  background-image: url(../public/bg.jpg) center no-repeat;
  background-size: cover;
}
```

<ul>
    <li>root의 index.js</li>
</ul>

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App';

ReactDom.render(<App />, document.getElementById('root'));
```

## 실행

package.json에 등록한 scripts 명령어로 실행  

```bash
npm run dev
```

<br /><br /><br />

Refference <br />
<a href="https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80">
Webpack(웹팩) 이란?
</a><br />
<a href="https://velog.io/@ksh4820/CRA-%EC%97%86%EC%9D%B4-React-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0">
Webpack 설정하기
</a>