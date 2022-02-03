
var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,20, 20);
}

function draw() 
{
  background(30);

if(keyIsDown(RIGHT_ARROW)){
  box.x = box.x + 2;
  box.shapeColor = "Blue";
}

if(keyIsDown(LEFT_ARROW)){
  box.x = box.x - 2;
  box.shapeColor = "Red";
}

if (keyIsDown(DOWN_ARROW)){
  box.y = box.y + 2;
  box.shapeColor = "Green";
}

if (keyIsDown(UP_ARROW)){
  box.y = box.y - 2;
  box.shapeColor = "Purple";
}

drawSprites();
}




