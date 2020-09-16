var fixed , moving ;

function setup() {
  createCanvas(1600,800);
  fixed = createSprite(200,300,50,25);
  moving = createSprite(400,374,46,94);

  fixed.shapeColor = "yellow" ;
  moving.shapeColor = "yellow" ;

  fixed.debug = true ;
  moving.debug = true ;

}

function draw() {
  background("black");  

  moving.y = World.mouseY ;
  moving.x = World.mouseX ;

  if (moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < moving.width/2 + fixed.width/2 && moving.y - fixed.y < moving.height/2 + fixed.height/2 && fixed.y - moving.y < moving.height/2 + fixed.height/2)
  {
    fixed.shapeColor = "white" ;
    moving.shapeColor = "white" ;

  }

  else {
    fixed.shapeColor = "yellow" ;
    moving.shapeColor = "yellow" ;
  }

  drawSprites();
}