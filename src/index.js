"use strict";
export class Paintr {
  constructor(canvasID) {
    this.canvas = document.getElementById(canvasID);
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext("2d");
    }
    this.color = "#000000";
    this.rAF;
  }
  setColor(color) {
    this.color = color;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  rect(x, y, width, height, color = this.color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }
  startPath(startX, startY) {
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
  }
  line(startX, startY, endX, endY, color = this.color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
  }
  ellipse(x, y, width, height, color = this.color) {
    this.ctx.arc(x, y);
  }
  circle(x, y, radius, color = this.color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
  background(color = this.color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  img(x,y,src){
    let img = new Image();
    img.src = src;
    this.ctx.drawImage(img, x, y);
  }
  loop(loopFunction){
    this.rAF = requestAnimationFrame(loopFunction);
  }
  stop(){
    cancelAnimationFrame(this.rAF);
  }
}
