class PlayerArcher{
  constructor(x,y,w,h,angle){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
    this.PlayerArcherImg = loadImage("./assets/playerArcher.png")

  }
  display(){
    if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
      angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -1.9) {
      angle -= 0.01;
      Matter.Body.setAngle(this.body, angle);
    }
    
  }
  shoot(archerAngle){
    var velocity = p5.velocity.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body,{ x: velocity.x, y:velocity.y});

  }
}