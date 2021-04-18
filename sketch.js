var jake;
var jakeAnimations;
var edges;
var path;
var pathAnimations;
function preload()
{
  //pre-load images
  jakeAnimations=loadAnimation("Jake1.png","Jake2.png");
  pathAnimations=loadAnimation("path.png");
  
}

function setup(){
  createCanvas(400,500);
  //Moving background
  path = createSprite(200,200);
  path.addAnimation("pathAni",pathAnimations);
  path.velocityY = 4;
  path.scale = 0.9;
  
  //adding jake
  jake = createSprite(200,300,50,100);
  jake.addAnimation("jakeAni",jakeAnimations);
  wall = createSprite(25,10,50,1000);
  wall.visible = false
  wall1 = createSprite(375,10,50,1000);
  wall1.visible = false
}

function draw() {
  background(0);
  //code to reset the background 
  if(path.y > 400 ){
    path.y = height/2;
  }
  jake.x=mouseX
  jake.collide(wall)
   jake.collide(wall1)
  
drawSprites();
}
