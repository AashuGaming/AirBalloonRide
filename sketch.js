var building1, building2, building3, building4, building5, building6, building7, building8, building9, building10, building11, building12, building13, building14, building15, building16, building16, building17, building18, building19, building20, building21, building22, building23, building24, building25;
var airBalloon;


function setup() {
  createCanvas(1600,400);
  
  building1 = createSprite(100, 300, 15, 400);
  building1.shapeColor = "yellow";

  building2 = createSprite(150, 300, 15, 500);
  building2.shapeColor = "yellow";

  building3 = createSprite(200, 300, 15, 350);
  building3.shapeColor = "yellow";

  building4 = createSprite(250, 300, 15, 450);
  building4.shapeColor = "yellow";

  building5 = createSprite(300, 300, 15, 300);
  building5.shapeColor = "yellow";

  building6 = createSprite(350, 300, 15, 250);
  building6.shapeColor = "yellow";

  building7 = createSprite(400, 300, 15, 200);
  building7.shapeColor = "yellow";

  building8 = createSprite(450, 300, 15, 390);
  building8.shapeColor = "yellow";

  building9 = createSprite(500, 300, 15, 450);
  building9.shapeColor = "yellow";

  building10 = createSprite(550, 300, 15, 195);
  building10.shapeColor = "yellow";

  building11 = createSprite(600, 300, 15, 295);
  building11.shapeColor = "yellow";

  building12 = createSprite(650, 300, 15, 390);
  building12.shapeColor = "yellow";

  building13 = createSprite(700, 300, 15, 500);
  building13.shapeColor = "yellow";

  building14 = createSprite(750, 300, 15, 420);
  building14.shapeColor = "yellow";

  building15 = createSprite(800, 300, 15, 330);
  building15.shapeColor = "yellow";

  building16 = createSprite(850, 300, 15, 495);
  building16.shapeColor = "yellow";

  building17 = createSprite(900, 300, 15, 395);
  building17.shapeColor = "yellow";

  building18 = createSprite(950, 300, 15, 520);
  building18.shapeColor = "yellow";

  building19 = createSprite(1000, 300, 15, 320);
  building19.shapeColor = "yellow";

  building20 = createSprite(1050, 300, 15, 220);
  building20.shapeColor = "yellow";

  building21 = createSprite(1100, 300, 15, 270);
  building21.shapeColor = "yellow";

  building22 = createSprite(1100, 300, 15, 380);
  building22.shapeColor = "yellow";

  building23 = createSprite(1150, 300, 15, 440);
  building23.shapeColor = "yellow";

  building24 = createSprite(1200, 300, 15, 230);
  building24.shapeColor = "yellow";

  building25 = createSprite(1250, 300, 15, 300);
  building25.shapeColor = "yellow";

  airBalloon = createSprite(10, 300, 110, 15);
  airBalloon.shapeColor = "red";
  airBalloon.velocityX = 4;
}

function draw() {
  background("lightblue");  
  drawSprites();
}