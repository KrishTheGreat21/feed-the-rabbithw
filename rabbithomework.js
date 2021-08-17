var garden,rabbit;
var gardenImg,rabbitImg;
var apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
apple.addImage("apple.png")


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

if(keyDown("left_arrow")){
rabbit.x=rabbit.x-5
}
if(keyDown("right_arrow")){
  rabbit.x=rabbit.x+5
  }

createapples()

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createapples(){
apple=createSprite(random(50,350),40,10,10)
apple.shapeColor="red"
apple.scale=0.6
apple.velocityY=4
apple.lifetime=200

if(rabbit.isTouching(apple)){
  apple.destroy()
}


}








