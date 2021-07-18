var cloudImg;
var cloud1;
var sum=0
var edges;
var ground,groundImage;
var ground2
var trex ,trex_running;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");

  cloudImg=loadImage("cloud.png");

}

function setup(){ 
  createCanvas(600,200);
  
  //create a trex sprite

 trex=createSprite(50,180,10,20);
 trex.addAnimation("running",trex_running);
 trex.scale= 0.5;

 ground=createSprite(300,180,600,10);
 ground.addImage("ground",groundImage);

 ground2=createSprite(300,190,600,10);
 ground2.visible=false;
 
 edges=createEdgeSprites();


}



function draw(){  

  background("white");
  ground.velocityX=-2

//console.log(trex.y);
//console.log(ground.x);

if(ground.x<0){
  ground.x=ground.width/2;

}  

  if(keyDown("space") && trex.y>=140  ){
    trex.velocityY=-15;


  }

trex.velocityY=trex.velocityY+0.8
trex.collide(ground2);  

//console.log(frameCount);
    
spawnClouds();

drawSprites();

}

function spawnClouds()
{

  if(frameCount%60==0){
    cloud1=createSprite(600,100,60,30);
    cloud1.velocityX=-3;
    cloud1.y=Math.round(random(10,60));
    cloud1.addImage("cloud",cloudImg);
    cloud1.scale=0.5
    cloud1.depth=trex.depth;
    trex.depth=trex.depth+1;
    console.log(cloud1.depth,trex.depth);
  }

  

}