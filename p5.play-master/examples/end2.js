//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
//var ghost, asterisk;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
var x1=124
var y1=532
var r1=200

var x2=526
var y2=530
var r2=200

var x3=1373
var y3=530
var r3=200

var x4=1776
var y4=533
var r4=200
var ts=255;
//vidElement = createVideo("sample_video.mp4"); 
//var skp=false;
var g1=255;
function preload() {
  fontRegular = loadFont('0425stage/FuturaBold.otf');
  
  roll=loadAnimation('0425stage/end2/01.png', '0425stage/end2/63.png');
  roll.frameDelay=6;
  
}

function setup() {
  pic1=loadImage('0425stage/end2/127.png');
  createCanvas(1920, 1080);


 
}

function draw() {
  background(0);
if (ts>=0){
  ts-=1;
}else{ts=0;}
fill(255)
  textSize(30);
  textFont(fontRegular);

 if( dist(mouseX,mouseY,1650,980)<100){
  g1=0;
  if(mouseIsPressed==true){
   
    window.location.href="index6.html";
  }
}
else{g1=255;}
//fill(0,ts);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  //curt.scale=1.5;

  animation(roll, 1920/2, 1080/2);
  //roll.frameDelay = 10;
  fill(0,150)
  ellipse(1920/2, 1080/2,  2500, 2500)
 
  image(pic1, -50,0, 1920, 1080);
  fill(g1);
  textSize(30);
  text("Play again",1650,980,600,200);
  fill(0,ts);
  ellipse(1920/2,1080/2,2500,2500);

}
