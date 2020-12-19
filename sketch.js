var arjun,arjunImg;
var  background1 , backgroundImg;
var bagron1;
function preload(){
arjunImg = loadImage("arjun.png");
backgroundImg =loadImage("background1.jpeg");
}

function setup() {
  createCanvas(800,400);
   arjun = createSprite(400, 200, 50, 50);
   arjun.addImage("arjun",arjunImg);
  arjun.scale = 0.1;
  
  background1 = createSprite(0,0,800,400);
  background1.addImage("background", backgroundImg);
  background1.x = background.width/2;
  background1.velocityX=-3;
  background1.scale = 6.4;
 //console.log(background1.depth);
  //console.log(arjun.depth);
  background1.depth = arjun.depth;
  arjun.depth=arjun.depth+1;
  bagron1 = new Bagrons();
}

function draw() {
  background(255);
  arjun.x = World.mouseX;
  arjun.y= World.mouseY;
  if(background1.x<0){

    background1.x = background1.width/2;
  }
  
  bagron1.spawnBagrons();
  bagron1.spawnrevolver();
  drawSprites();

}