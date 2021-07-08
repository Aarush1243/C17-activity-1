class Box {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.velocityX = vx;
    this.velocityY = vy;
  }
  display() {
    rect(this.x, this.y, this.width, this.height);
  }

  setVelocity() {
    this.x = this.x + this.velocityX;
    this.y = this.y + this.velocityY;
  }

  bounce() {
    if (this.x >=width||this.x<=0) {
      console.log(this.x)
      this.velocityX = -this.velocityX;
      
    }
    if (this.y >=height||this.y<=0) {
      this.veloctiyY = -this.velocityY;
    }
  }
}


