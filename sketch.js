var sleep,brush,bath,eating,moving,astronaut,gym,bg
function preload() {

  sleep=loadImage("images/sleep.png")
  bg=loadImage("images/iss.png")
  brush=loadImage("images/brush.png")
  gym=loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png")
  eating=loadAnimation("images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png")
  bath=loadAnimation("images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png")
  moving=loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")



}

function setup() {
createCanvas(600, 500);
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping", sleep); 
astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  if (keyDown("Up_ARROW")) {
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("Down_ARROW")) {
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
 
if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eating);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if (keyDown("M")){
  astronaut.addAnimation("moving",moving);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
drawSprites();
}

