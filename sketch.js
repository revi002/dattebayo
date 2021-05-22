function preload(){
  groundimg=loadImage("ground.jpg")
boyimg=loadAnimation("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","13.png","14.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png")
bulletImg=loadImage("RASENGAN.png")
}
function setup() {
  createCanvas(700,400);

ground=createSprite(600,380,1200,20)
  ground.addImage(groundimg)
 ground.scale=1.5
 boy=createSprite(50,350,20,20)
 boy.addAnimation("boy",boyimg)
 boy.scale=0.5
}
function draw() {
  background(56,44,44);
  ground.velocityX=-4 
 if(ground.x<0){
   ground.x=ground.width/4

 }
 if(keyWentDown("space")){
   bullet=createSprite(50,350,10,10)
   bullet.velocityX=3
   bullet.addImage(bulletImg)
   bullet.scale=0.1
 }
  drawSprites() 
}