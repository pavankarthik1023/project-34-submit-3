var dog,happyDog,foodS,foodStock
var dogImg,dog1Img;
var database;
function preload()
{
  dogImg=loadImage("images/dog.png");
  dog1Img=loadImage("images/dog1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog= createSprite(200,250,20,20);
  dog.addImage("dog",dogImg);
  dog.scale=0.15;

  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1Img);

}
drawSprites();

fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,150,150);
}

function readStock(data){
  foods=data.val();
}


//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}





