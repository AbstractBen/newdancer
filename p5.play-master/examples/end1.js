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
//vidElement = createVideo("sample_video.mp4"); 
var skp=false;
function preload() {

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  
  //imagess=[];
  //imagess=['0425stage/curtainend/001.png', '0425stage/curtainend/002.png']
  curt=loadAnimation('0425stage/curtainend/01.png', '0425stage/curtainend/68.png');
  curt.looping = false;

  ball=loadAnimation('0425stage/fives/001.png', '0425stage/fives/024.png');

  cross=loadAnimation('0425stage/fives/ves/old/cross/001.png', '0425stage/fives/ves/old/cross/103.png');

  down=loadAnimation('0425stage/fives/ves/old/down/01.png', '0425stage/fives/ves/old/down/57.png');

  kick=loadAnimation('0425stage/fives/ves/old/kick/01.png', '0425stage/fives/ves/old/kick/54.png');

  step=loadAnimation('0425stage/fives/ves/old/step/01.png', '0425stage/fives/ves/old/step/52.png');
  //curt.scale(2,2);
  //create an animation listing all the images files
  //asterisk = loadAnimation('assets/asterisk.png', 'assets/triangle.png', 'assets/square.png', 'assets/cloud.png', 'assets/star.png', 'assets/mess.png', 'assets/monster.png');
}

function setup() {
  createCanvas(1920, 1080);
  //v1 = createVideo("0425stage/fives/ves/newkick.mp4"); 
  // v2 = createVideo("0425stage/fives/ves/newcross.mp4"); 
  //v2.position(0, 0); 
  //v2.size(1920,1080); 
  //v3 = createVideo("0425stage/fives/ves/newstep.mp4"); 
  //v4 = createVideo("0425stage/fives/ves/newdown.mp4"); 
  //var ghost=createSprite(1920/2,1080/2);
  //ghost.scale=1.5;
  //button = createButton('click me');
  //button.position(0, 0);
  //button.mousePressed(changeBG);
}

function draw() {
  background(0);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  //curt.scale=1.5;
  animation(curt, 1920/2, 1080/2);
  curt.frameDelay = 10;
  fill(255)
  textSize(50);

 if( dist(mouseX,mouseY,1750,900)<100){
   fill(0)
  if(mouseIsPressed==true){
    skp=true;
    
  }
}
  if (skp==true||( curt.getFrame() == curt.getLastFrame())) {
		curt.visible= false;
    //image(v2,0, 0);
fill(255,100);
noStroke();
    if(dist(mouseX,mouseY,x1,y1)<r1){
      
    
      animation(kick,1920/2, 1080/2);
      ellipse(x1,y1,r1,r1);
      kick.frameDelay = 8;
      //if(mouseIsPressed){
      //image(p2, 0, 0,1920,1080);
    
    //}
    }
    if(dist(mouseX,mouseY,x2,y2)<r2){
     
      animation(cross,1920/2, 1080/2);
      ellipse(x2,y2,r2,r2);
      //rect(0, 0, 100, 100);
      cross.frameDelay = 8;
      //if(mouseIsPressed){
      //image(p4, 0, 0,1920,1080);
    //}
    }
    if(dist(mouseX,mouseY,x3,y3)<r3){
      
      animation(step,1920/2, 1080/2);
      ellipse(x3,y3,r3,r3);
      step.frameDelay = 8;

      //if(mouseIsPressed){
      //image(p1, 0, 0,1920,1080);
    //}
    }
    if(dist(mouseX,mouseY,x4,y4)<r4){
      
      animation(down,1920/2, 1080/2);
      ellipse(x4,y4,r4,r4);
      down.frameDelay = 8;
     // if(mouseIsPressed){
      //image(p3, 0, 0,1920,1080);
    //}
    }
    //fill(0,55);
    if(dist(mouseX,mouseY,1920/2,1080/2)<100){
      textSize(50);
      textAlign(CENTER, TOP);
      //animation(down,1920/2, 1080/2);
      fill(255,255);
      text("Click to End",1920/2-100,1080/2-50,200,200);
      //ellipse(x4,y4,r4,r4);
      down.frameDelay = 8;
      if(mouseIsPressed){
      //image(p3, 0, 0,1920,1080);
      window.location.href="index9.html";
    }
    }
    fill(0,150);
    ellipse(1920/2,1080/2,2500,2500)
    animation(ball, 1920/2, 1080/2);
    
  
    //fill(255);
    //text(mouseX+","+mouseY,500,500);

    
	}else{  text("skip",1750,900,100,100);}


  //drawSprites();
  
  //animation(asterisk, 500, 150);
}
