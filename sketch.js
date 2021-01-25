var dog,database,foodS=0
,foodStock
var dogimg,dogimg1,happydogimg

function preload()
{
  dogimg=loadImage("images/dogImg.png")
  dogimg1=loadImage("images/dogImg1.png")
  happydogimg=loadImage("images/happydog.png")
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(100,300,50,50)
  dog.addImage(dogimg);
  dog.scale= 0.5
  database=firebase.database()
  foodStock= database.ref("food")
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS+1) 
    dog.addImage(happydogimg)
    dog.scale=0.5
  }

  drawSprites();
  textSize(18)
  fill("BLACK")
  text("Foodstock: "+foodS,250,250)
  //add styles here

}

function readStock(data) {
  foodS=data.val()
  console.log(foodS)
}

function writeStock(x) {
  database.ref("/").update({
    food:x
  })
}



