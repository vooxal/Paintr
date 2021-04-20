# Paintr
[![Minified Size](https://img.shields.io/bundlephobia/min/paintr?color=purple)](https://cdn.jsdelivr.net/npm/paintr) ![License: MIT](https://img.shields.io/npm/l/paintr) [![Version](https://img.shields.io/npm/v/paintr)](https://www.npmjs.com/package/paintr)  
A simpler canvas
## Installation
* CDN: https://cdn.jsdelivr.net/npm/paintr
* npm: `npm i paintr`
* Yarn: `yarn add paintr`  
### Initialization
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
canvas.setColor(<hex,rgba,colors>)
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
#### Triangle
```js
canvas.triangle(x1,y1,x2,y2,x3,y3,color);
```
## Demos

[Game Movement Demo](https://vooxal.github.io/Paintr/demos/mvmt.html)
