module.exports.Paintr = class Paintr {
  constructor(canvasID) {
  
    this.canvas = document.getElementById(canvasID);
      if (this.canvas.getContext) {
          var ctx = canvas.getContext('2d');
     }
  }
  init(){
  }
}
