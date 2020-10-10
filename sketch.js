function setup() {
  createCanvas(800,400);

  fixedrec = createSprite(200,200,20,20);
  movingrec = createSprite(100,100,20,20);

  bounce1 = createSprite(100,150,20,20);
  bounce2 = createSprite(400,150,20,20);

  bounce1.velocityX = 3;
  bounce2.velocityX = -3;
}

function draw() {
  background(255,255,255);  

  movingrec.x = World.mouseX;
  movingrec.y = World.mouseY;

  bounce1.shapeColor = ("pink");
  bounce2.shapeColor = ("green");

  if(movingrec.x - fixedrec.x < movingrec.width/2 + fixedrec.width/2
    && fixedrec.x - movingrec.x < fixedrec.width/2 + movingrec.width/2
    && movingrec.y - fixedrec.y < movingrec.height/2 + fixedrec.height/2
    && fixedrec.y - movingrec.y < fixedrec.height/2 + movingrec.height/2){
    movingrec.shapeColor = ("green");
    fixedrec.shapeColor = ("green");
  } else {
    movingrec.shapeColor = ("yellow");
    fixedrec.shapeColor = ("red");
  }

  if(bounce1.x - bounce2.x < bounce1.width/2 +bounce2.width/2
    && bounce2.x - bounce1.x < bounce2.width/2 + bounce1.width/2){
    bounce1.velocityX = bounce1.velocityX * -1;
    bounce2.velocityX = bounce2.velocityX * -1;
  }

  if(bounce1.y - bounce2.y < bounce1.height/2 + bounce2.height/2
    && bounce2.y - bounce1.y < bounce2.height/2 + bounce1.height/2){
     bounce1.velocityY = bounce1.velocityY * -1;
     bounce2.velocityY = bounce2.velocityY * -1;
  }

  drawSprites();
}