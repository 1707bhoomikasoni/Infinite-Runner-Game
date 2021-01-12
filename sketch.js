

var monkey , monkey_running,gameState=PLAY
var PLAY=1,END=0
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,bg,bgImage,score=0

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
bgImage=loadImage("jungle.jpg")

switch(score){
    case 10:monkey.scale=0.12
    break;
    case 20:monkey.scale=0.14 
      break
      case 30:monkey.scale=0.16
      break
      case 40:monkey.scale=0.18
    break
    default:break
  }
}
function setup() {
  createCanvas(500,600)
  bg=createSprite(300,200)
  bg.addImage("moving",bgImage)
  bg.scale=0.6
  bg.velocityX=-3
  
  monkey=createSprite(100,200)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.12
  
   ground=createSprite(300,285,600,5)
  ground.shapeColor="yellow"
  ground.visible=false
  
  foodGroup=createGroup()
  obstacleGroup=createGroup()
score=0
}     

function draw() {
background("white")
camera.position.x=250
camera.position.y=monkey.y

 var rocks

  if(keyDown("space")&& monkey.y >= 110) {
  monkey.velocityY = -10;
}
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground) 
  console.log(frameCount)
 
  bananas()
  stones()
  if (bg.x < 250){
      bg.x = ground.width/2;
    }
    
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
    monkey.scale=0.15
    score++
    
  }
 if(monkey.isTouching(obstacleGroup)){
  gameState=END;
   monkey.scale=0.10
   
 }
  
 if(gameState===END) {
   monkey.velocityX=0
   foodGroup.destroyEach()
   obstacleGroup.destroyEach()
   bg.velocityX=0
 }
  
  drawSprites() 

  textSize(24)
fill("black")
  text("survival time: "+ score, 300,50);
  
  }

function bananas(){
if(frameCount%80===0)  {
var fruit=createSprite(600,150)  
fruit.y=Math.round(random(120,200))  
  fruit.velocityX=-7
  fruit.addImage(bananaImage)
  foodGroup.add(fruit)
  fruit.scale=0.1
fruit.lifetime=80

}
  }

function stones(){
 if(frameCount%100===0) {
var rocks=createSprite(600,255)  
 rocks.velocityX=-6;
 
  obstacleGroup.add(rocks)
 rocks.scale=0.5
 rocks.lifetime=80
 rocks.addImage(obstacleImage)
   rocks.scale=0.2
 }
 }










