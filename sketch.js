var gameState, end, left1_img, left2_img, left3_img, right1_img, right2_img, right3_img;
var player1, edges, p1, p2,p3,p4,p5,p6,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19, pgroup;

function preload(){
 left1_img = loadImage("sprites/bLeft1.png");
 right1_img = loadImage("sprites/bRight1.png");
 left2_img = loadImage("sprites/bLeft2.png");
 right2_img = loadImage("sprites/bRight2.png");
 left3_img = loadImage("sprites/bLeft3.png");
 right3_img = loadImage("sprites/bRight3.png");
 food_img = loadImage("sprites/food.png");
sound1 = loadSound("sprites/kidcheer.mp3")
}


function setup() {
  createCanvas(800,600);  //(w,l)
 // createSprite(400, 200, 50, 50);



  //creating player....
 player1 = createSprite(27,512,10,10);
player1.addImage(right1_img);
player1.scale = 0.08;
//player1.velocityX = 0;
//player1.velocityY = 0;
player1.setCollider("rectangle",0,0,280,380);
player1.debug = true;


p1=createSprite(160, 540, 20, 100);
p1.shapeColor="cyan";
p2=createSprite(40, 400, 50, 10);
p2.shapeColor="cyan";
p3=createSprite(100, 260, 70, 70);
p3.shapeColor="cyan";
p4=createSprite(40,80,20,90);
p5=createSprite(400,30,60,30);
p6=createSprite(670,145,50,50);
p7=createSprite(775,260,15,100);
p8=createSprite(590,300,40,30);
p9=createSprite(350,210,90,10);
p10=createSprite(190,120,40,15);
p11=createSprite(750,570,90,30);
p12=createSprite(360,340,20,50);
p13=createSprite(690,390,90,20);
p14=createSprite(580,470,40,70);
p15=createSprite(510,175,20,50);
p16=createSprite(201,497,70,15);
p17=createSprite(360,550,60,60);
p18=createSprite(490,500,50,10);
p19=createSprite(290,310,40,20);




//paddles (x,y,l,b)  
/*p1 = new Obs(160, 540, 20, 100);
p2 = new Obs(40, 400, 50, 10);
p3 = new Obs(100, 260, 70, 70);
p4 = new Obs(40,80,20,90);
p5 = new Obs(400,30,60,30);
p6 = new Obs(670,145,50,50);//
p7 = new Obs(775,260,15,100);//
p8 = new Obs(590,300,40,30);
p9 = new Obs(350,210,90,10);
p10 = new Obs(190,120,40,15);
p11 = new Obs(750,570,90,30);
p12 = new Obs(360,340,20,50);
p13 = new Obs(690,390,90,20);
p14 = new Obs(580,470,40,70);
p15 = new Obs(510,175,20,50);
p16 = new Obs(201,497,70,15);
p17 = new Obs(360,550,60,60);
p18 = new Obs(490,500,50,10);
p19 = new Obs(290,310,40,20)*/


//creating cake
cake = createSprite(750,50,10,10);
cake.addImage(food_img);
cake.scale = 0.04;
cake.debug = true;

 //group
//pgroup = new Group();

}

function draw() {

  background(0);

 //createEdgeSprites(); 
 edges=createEdgeSprites();
   player1.bounceOff(edges[0]); 
   player1.bounceOff(edges[1]);
  player1.bounceOff(edges[2]);
    player1.bounceOff(edges[3]);
   // player1.bounceOff(edges[4]);



 //providing keyDown functions to player

if(keyDown("left")){
  player1.x -= 4;
  player1.addImage(left1_img);
}

if(keyDown("up")){
  player1.y -= 4;
  player1.addImage(right1_img);
}

if(keyDown("down")){
  player1.y += 4;
  player1.addImage(left1_img);
}

//gamestate cond
if(player1.isTouching(cake)){
  gameState=end;
  sound1.play();
 //playSound("http://soundbible.com/grab.php?id=480&type=mp3",false);
 textSize(32);
 fill ("orrange")
 text("Well Done!!", 300,270);
// text("PRESS 'p' to start next level",300,330);
}

if(keyDown("p")){

  
}

     
 if (player1.isTouching(p1)|| player1.isTouching(p2)|| player1.isTouching(p3) ||
 player1.isTouching(p4)|| player1.isTouching(p5)|| player1.isTouching(p6) ||
 player1.isTouching(p7)|| player1.isTouching(p8)|| player1.isTouching(p9) ||
 player1.isTouching(p10)|| player1.isTouching(p11)|| player1.isTouching(p12) ||
 player1.isTouching(p13)|| player1.isTouching(p14)|| player1.isTouching(p15) ||
 player1.isTouching(p16)|| player1.isTouching(p17)|| player1.isTouching(p18) ||
 player1.isTouching(p19) ){
    player1.bounce(p1);
    player1.bounce(p2);
    player1.bounce(p3);
    player1.bounce(p4);
    player1.bounce(p5);
    player1.bounce(p6);
    player1.bounce(p7);
    player1.bounce(p8);
    player1.bounce(p9);
    player1.bounce(p10);
    player1.bounce(p11);
    player1.bounce(p12);
    player1.bounce(p13);
    player1.bounce(p14);
    player1.bounce(p15);
    player1.bounce(p16);
    player1.bounce(p17);
    player1.bounce(p18);
    player1.bounce(p19);

  }

p1.display();
p2.display();
p3.display();
p4.display();
p5.display();
p6.display();
p7.display();
p8.display();
p9.display();
p10.display();
p11.display();
p12.display();
p13.display();
p14.display();
p15.display();
p16.display();
p17.display();
p18.display();
p19.display();




  if(keyDown("right")){
    player1.x += 4;
    player1.addImage(right1_img);
  }

 

  drawSprites();
}