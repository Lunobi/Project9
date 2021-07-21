var box;

function setup(){
  createCanvas(400, 400);
  box = createSprite(200, 200, 20, 20);

 
}

function draw(){
  background("white");

  if (keyDown("left")){
    box.x = box.x-2; 
    background("red");
  }
  if (keyDown("right")){
    box.x = box.x+2;
    background("black")
  }
  if (keyDown("down")){
    box.y = box.y+2; 
    background("blue");
  }
  if (keyDown("up")){
    box.y = box.y-2;
    background("green");
  }
  drawSprites();
}