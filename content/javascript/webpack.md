---
emoji: π
title: Webpack(μΉν©)
date: '2021-12-12 18:00:00'
author: νμ½λ©
tags: tech-interview javascript webpack
categories: tech-interview javascript web
---

## Webpack(μΉν©) μ΄λ?

νλ Javascript Applicationμ Static Module Bundler  
νμν λ€μμ μλ°μ€ν¬λ¦½νΈ νμΌμ νλμ μλ°μ€ν¬λ¦½νΈ νμΌλ‘ λ§λ€μ΄ μ£Όλ κ²μ λ§νλ€.  <br /><br />

### Bundle(λ²λ€) μ΄λ?

μννΈμ¨μ΄ λ° μΌλΆ νλμ¨μ΄μ ν¨κ» μλνλ λ° νμν λͺ¨λ  κ²μ ν¬ν¨νλ Package  <br /><br />

## Webpackμ μ¬μ©νλ μ΄μ 

μ°κ΄λμ΄ μλ μλ°μ€ν¬λ¦½νΈ νμΌλ€μ νλμ νμΌλ‘ λ¬Άμ΄μ€μ κ΄λ¦¬νκΈ° νΈνλ€.  
μ»΄νμΌν  λ, μ¬λ¬ λͺ¨λλ€μ νμΌμ μ½μ΄μ€λλ° κ±Έλ¦¬λ μκ°μ ν΄κ²°νκΈ° μν΄ μ¬λ¬ νμΌμ νλμ νμΌλ‘ λ²λ€λ§ ν΄μ€λ€.  
νλμ μλ°μ€ν¬λ¦½νΈ νμΌλ‘ λ§λ€μ΄μ μΉνμ΄μ§ μ±λ₯μ μ΅μ ν ν΄μ€λ€.  
λ€λ₯Έ Module Bundlerλ λ§μ΄ μ‘΄μ¬νμ§λ§, performanceκ° μ°μνλ€.  <br /><br />

### Babel(λ°λ²¨) μ΄λ?

ES6+ λ²μ  μ΄μμ μλ°μ€ν¬λ¦½νΈλ JSX, νμμ€ν¬λ¦½νΈ μ½λλ₯Ό νμ λ²μ μ μλ°μ€ν¬λ¦½νΈ μ½λλ‘ λ³ν μμΌ IEλ λ€λ₯Έ λΈλΌμ°μ  λ΄μμ λμν  μ μλλ‘ νλ νΈλμ€ νμΌλ¬  <br /><br />

### Babelμ μ¬μ©νλ μ΄μ 

μ΅μ  λΈλΌμ°μ μμ λμνλ κΈ°λ₯μ λ€λ₯Έ λΈλΌμ°μ λ μ΄μ  λ²μ μ λΈλΌμ°μ μμ κ΅¬νν΄μΌ νλ κ²½μ°, κΈ°λ₯ μμ²΄λ₯Ό μλ΅νκ±°λ λ¨μνν΄μΌ νλ μν©μ΄ λ°μνλ€. μ΄λ° μ΄μλ μ½λμ μΌκ΄μ±μ ν΄μΉ  μ μκ³ , νμ κ³Όμ μμ λ λ€λ₯Έ λ¬Έμ λ₯Ό μΌκΈ°ν  μ μλ€. λ°λ²¨μ μ΄λ° λ¬Έμ μ μ ν΄κ²°νκ³  λ³΄μνκΈ° μν΄ λ±μ₯νλ€.  
μ¦, ν¬λ‘μ€ λΈλΌμ°μ§μ μν΄ μ¬μ©νλ€.  <br /><br />

## ν΄λ μμ± λ° μ΄κΈ°ν

νλ‘μ νΈ νμΌμ μμ±νκ³  package.json νμΌ μ΄κΈ°ν

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
    <li>src : react μμμ μν ν΄λ</li>
    <li>dist : λ²λ€λ§ κ²°κ³Όλ¬Όμ ν΄λ</li>
    <li>public : μ μ  νμΌμ μν ν΄λ</li>
</ul>

<hr />

public ν΄λμ `inhex.html` νμΌ μμ± ν, λ£¨νΈ `<div>`λ₯Ό λ§λ λ€.

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
    <title>CRA μμ΄ λ¦¬μ‘νΈ κ°λ° νκ²½ κ΅¬μΆ</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

<hr />

λ¦¬μ‘νΈ μ»΄ν¬λνΈλ₯Ό λ λλ§ν  `index.js` νμΌ μμ±  

```bash
cd src
touch index.js
```

<hr />

## λ¦¬μ‘νΈ μ€μΉ

λ¦¬μ‘νΈμ ν΅μ¬ ν¨ν€μ§λ€μ μ€μΉ  

<ul>
    <li>react : λ¦¬μ‘νΈ μ½μ΄</li>
    <li>react-dom : λ¦¬μ‘νΈμ DOMμ μ°κ²°</li>
</ul>

```bash
npm install react react-dom
```

## λ°λ²¨ μ€μΉ

λ¦¬μ‘νΈμμλ ES6μ JSXλ₯Ό μ¬μ©νλ€. λΈλΌμ°μ  νΈνμ±μ μν΄ ES6 => ES5, JSX => jsλ‘ νΈλμ€ νμΌλ§μ ν΄μ£Όλ λ°λ²¨μ μ€μΉ  

```bash
npm install @babel/core @babel/preset-react @babel/preset-env -D
```

<ul>
    <li>@babel/core : λ°λ²¨μ μ½μ΄</li>
    <li>@babel/present-react : λ¦¬μ‘νΈ JSXλ₯Ό νΈλμ€νμΌλ§</li>
    <li>@babel/present-env : ES6μ½λλ₯Ό ES5λ‘ νΈλμ€νμΌλ§</li>
</ul>

### μ€μ 

λ£¨νΈ κ²½λ‘μμ `babel.config.js`νμΌμ μμ±νκ³  νλ¦¬μλ€μ μ€μ 

```javascript
module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
};
```

## μΉν©

λͺ¨λ λ²λ€λ¬μΈ μΉν©μ ν΅μ¬ ν¨ν€μ§λ€μ μ€μΉ  

```bash
npm install webpack webpack-cli webpack-dev-server -D
```

<ul>
    <li>webpack : μΉν©μ μ½μ΄</li>
    <li>webpack-cli : μΉν©μ μ»€λ§¨λλΌμΈμμ μ¬μ©</li>
    <li>webpack-dev-server : μΉν©μ λ©λͺ¨λ¦¬ μμ λΉλνμ¬ κ°λ° μλ²λ₯Ό κ΅¬λ</li>
</ul>

### λ‘λ

μΉν© λ²λ€λ§μ νμν λ‘λλ₯Ό μ€μΉνλ€.

```bash
npm install babel-loader style-loader css-loader file-loader -D
```

<ul>
    <li>babel-loader : JSX λ° ES6+ λ¬Έλ²μ νΈλμ€ νμΌλ§</li>
    <li>style-loader : λ³νλ CSS νμΌμ style νκ·Έλ‘ κ°μΈμ λμ </li>
    <li>css-loader : CSS νμΌμ μλ°μ€ν¬λ¦½νΈκ° μ΄ν΄ν  μ μλλ‘ λ³ν</li>
    <li>file-loader : μ΄λ―Έμ§ λ° ν°νΈ λ±μ νμΌ λ‘λ©</li>
</ul>

### νλ¬κ·ΈμΈ

μΉν© λ²λ€λ§ ν μ μ©ν  νλ¬κ·ΈμΈμ μ€μΉ  

```bash
npm install html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin -D
```

<ul>
    <li>html-webpack-plugin : HTML νμΌμ λ²λ€λ§λ μλ°μ€ν¬λ¦½νΈ νμΌμ μ½μν΄μ£Όκ³  λ²λ€λ§λ κ²°κ³Όκ° μ μ₯λλ ν΄λμ μ?κΉ</li>
    <li>clean-webpack-plugin : λ²λ€λ§μ ν  λλ§λ€ μ΄μ  λ²λ€λ§ κ²°κ³Όλ¬Ό μ κ±°</li>
    <li>mini-css-extract-plugin : css νμΌλ‘ λ³νν΄μ£Όλ νλ¬κ·ΈμΈ</li>
</ul>

### μΉν© μ€μ 

λ£¨νΈ κ²½λ‘μ `webpack.config.js` νμΌ μμ±  

<ul>
    <li>mode : development(κ°λ°μ©), production(λ°°ν¬μ©), none 3κ°μ§ λͺ¨λκ° μ‘΄μ¬ν¨</li>
    <li>entry : μΉν©μ μ€νν  λμ νμΌ</li>
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
    <li>output : μΉν©μ κ²°κ³Όλ¬Όμ λν μ λ³΄λ₯Ό μλ ₯νλ μμ±</li>
</ul>

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'), // κ²°κ³Όλ¬Ό κ²½λ‘
    filename: 'bundle.js', // κ²°κ³Όλ¬Ό νμΌλͺ
  },
};
```

<ul>
    <li>resolve : μΉν©μ΄ λͺ¨λμ μ²λ¦¬νλ λ°©μμ μ€μ νλ μμ±μΌλ‘ νμ₯μλ₯Ό μλ΅ν΄λ μΈμνκ² λ§λ λ€.</li>
</ul>

```javascript
  resolve: {
    extensions: ['.js', '.jsx'],
  },

```

<ul>
    <li>devtool : source-mapμ μ€μ νλ λΆλΆμΌλ‘ μλ¬κ° λ°μνμ λ λ²λ€λ§λ νμΌμμ μ΄λ λΆλΆμ μλ¬κ° λ¬λμ§λ₯Ό μ½κ² νμΈν  μ μκ² ν΄μ£Όλ λκ΅¬</li>
</ul>

```javascript
  devtool: 'eval-cheap-source-map',
```

<ul>
    <li>devServer : webpack-dev-serverμ μ΅μ μ€μ </li>
</ul>

`overlay` : μλ¬ λ°μ μ λΈλΌμ°μ μ λ΄μ©μ λμΈμ§ μ€μ   
`hot` : λͺ¨λμ λ³νλ§ μλμΌλ‘ λ‘λνλ HMR(Hot Module Replacement) κΈ°λ₯ νμ±ν μ€μ   
`writeToDisk` :  λ©λͺ¨λ¦¬ λΏλ§ μλλΌ νμΌλ λ§λ€κ²μΈμ§ μ€μ   

```javascript
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    port: 5500,
    host: "localhost",
    historyApiFallback: true
  },
```

<ul>
    <li>modules, rules : λͺ¨λμ μ μ©ν  λ‘λλ€κ³Ό κ·Έ μ΅μλ€μ μ€μ </li>
</ul>

`test` : μ΄λ€ νμΌμ μ μ©ν μ§ νμ₯μ μμ±  
`exclude` : λ‘λμμ μ μΈν  νμΌ μ€μ   
`loader` : μ μ©ν  λ‘λκ° 1κ°λΌλ©΄ `loader`λ‘ μ€μ   
`use` : μ μ©ν  λ‘λκ° 2κ° μ΄μμ΄λΌλ©΄ `use`λ°°μ΄λ‘ μ€μ   

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
    <li>νλ¬κ·ΈμΈ μ μ©</li>
</ul>

μ€μΉνλ νλ¬κ·ΈμΈμ λΆλ¬μ μ€μ ν΄μ€λ€.  
html-webpack=pluginμ `template`μ λ²λ€λ§ νμΌμ μ£Όμνκ³  λ²λ€λ§ ν΄λλ‘ λ³΅μ¬ν  λμ HTML νμΌμ λͺμνλ μ΅μ  

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    <li>package.json script μμ±</li>
</ul>

`--progress`μ΅μμ λ²λ€λ§ μ§ν μνλ₯Ό λ³΄μ¬μ€λ€.  

```javascript
  "scripts": {
    "dev": "webpack-dev-server --progress & open http://localhost:5000/",
    "build": "webpack --pregress"
  },
```

## λ¦¬μ‘νΈ μ»΄ν¬λνΈ μμ±

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
  background-size: cover;
}
```

<ul>
    <li>rootμ index.js</li>
</ul>

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
```

## μ€ν

package.jsonμ λ±λ‘ν scripts λͺλ Ήμ΄λ‘ μ€ν  

```bash
npm run dev
```

<br /><hr /><br />

## Typescript μ€μ νκΈ° (21.12.16 μΆκ°)

### νμΌλͺ λ³κ²½νκΈ°

`index.js`μ `App.js`μ νμ₯μλ₯Ό `.tsx`λ‘ λ³κ²½

### νμ ν¨ν€μ§ μ€μΉ 

```bash
npm i -D typescript @babel/preset-typescript ts-loader fork-ts-checker-webpack-plugin
```

### Webpack μ€μ  λ³κ²½νκΈ°

```javascript
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // μΆκ°

entry: './src/index.tsx',       // modify jsx->tsx
resolve: {
  extensions: ['.ts', '.tsx', ".js", ".jsx"],  // add ts, tsx
},

module: {
  rules: [
    test: /\.(ts|tsx)$/,  // modify js->jsx
    use: [
      'babel-loader',
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
    // loader: 'babel-loader',
  ]
}

plugins: [
  new ForkTsCheckerWebpackPlugin(),  // add
],
```

### babel.config.js λ³κ²½

```javascript
module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env', '@babel/typescript'], // add: babel/typescript
};
```

### package.json λ³κ²½

```json
{
  "main": "index.tsx",
}
```

### tsconfig.json νμΌ μμ±

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "removeComments": false,
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "keyofStringsOnly": true,
    "resolveJsonModule": true,  // json νμΌ λΆλ¬μ¬ λ νμ
  },
  "typeRoots": ["node_modules/@types", "src/@type"],
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "./node_modules/**/*"
  ],
  "include": ["./src/**/*", "@type"]
}
```

### App.tsx code

```typescript
import React from 'react';
import './App.css';

interface Props {}

const App = ({  }: Props) => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
```

### index.tsx code

```typescript
import React from 'react';
// import ReactDom from 'react-dom';
import * as ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## μ€ν

package.jsonμ λ±λ‘ν scripts λͺλ Ήμ΄λ‘ μ€ν  

```bash
npm run dev
```

<br /><br /><br />

Refference <br />
<a href="https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80">
Webpack(μΉν©) μ΄λ?
</a><br />
<a href="https://velog.io/@ksh4820/CRA-%EC%97%86%EC%9D%B4-React-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0">
Webpack μ€μ νκΈ°
</a>
<a href="https://velog.io/@do_dadu/Webpack%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-Typescript-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0CRA">
React+Webpack Typescript μ€μ 
</a>