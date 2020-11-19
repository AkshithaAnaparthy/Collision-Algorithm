var fixedRect;
var movingRect;




function setup() {
  createCanvas(500,400);
  
  fixedRect = createSprite(400, 200, 40, 70);
  fixedRect.shapeColor = "Yellow";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 60, 40);
  movingRect .shapeColor = "Yellow";
  movingRect .debug = true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

        fixedRect.shapeColor = "Blue";
        movingRect.shapeColor = "Blue";
  }

  else {

    fixedRect.shapeColor = "Yellow";
    movingRect.shapeColor = "Yellow";
  }
  drawSprites();
}