# Paintr
![Minified Size](https://img.shields.io/bundlephobia/min/paintr?color=purple) ![License: MIT](https://img.shields.io/npm/l/paintr) ![Version](https://img.shields.io/npm/v/paintr)
## Installation
* CDN: https://cdn.jsdelivr.net/npm/paintr
* npm: `npm i paintr`
* Yarn: `yarn add paintr`
## Initialization
```js
let canvas = new Paintr(idOfCanvas);
```
## Usage
### Utility
#### Background
```js
canvas.background(color);
```
#### Color
```js
canvas.color(<hex,rgba,colors>)
```
#### Clear
```js
canvas.clear();
```

### Basic Shapes
#### Line
```js
canvas.line(startX, startY, endX, endY,color);
```
#### Rectangle
```js
canvas.rect(x,y,width,height,color);
```
#### Circle
```js
canvas.circle(x,y,radius,color);
```
