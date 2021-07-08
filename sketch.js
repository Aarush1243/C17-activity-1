
var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  box1 = new Box(200, 200, 20, 20, 3, 5);
  box2 = new Box(300,100, 30, 30, -4, -6);
}

function draw() {
  background(220);
  box1.display();
  box2.display();
  box1.setVelocity();
  box2.setVelocity();  
  box1.bounce();
  box2.bounce();
}

