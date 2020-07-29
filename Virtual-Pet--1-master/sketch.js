//Create variables here
var dog,happyDog;
var dogi,doghi;
var database;
var foodS ,foodStock;
function preload()
{
  //load images here
  dogi=loadImage("images/dogImg.png");
  doghi=loadImage("images/dogImg1.png");

}

function setup() {
  
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  dog = createSprite(250,300,10,10);
  dog.addImage(dogi);
  dog.scale=0.5;
}


function draw() {  
background(98,234,232)
text("Food Left  "+foodS,230,100);
//textSize(35);
fill("white");
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(doghi);
}


  drawSprites();
  //textFill(white);
  //textSize(23);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<0){
    x=20
    dog.addImage(dogi);
  }
  else{
    x=x-1
    
  }
  database.ref("/").update({
      food:x
  })
  
}


