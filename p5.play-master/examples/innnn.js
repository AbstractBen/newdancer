//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
//var ghost, asterisk;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay


var start=false;
var tp=0;
var ts=255;
function preload() {

  fontRegular = loadFont('0425stage/FuturaBold.otf');
  roll=loadAnimation('0425stage/begin/loop/01.png', '0425stage/begin/loop/39.png');
  roll.frameDelay=3;
  inn=loadAnimation('0425stage/begin/in/01.png', '0425stage/begin/in/30.png');
  inn.frameDelay=4;

 
}

function setup() {
  createCanvas(1920, 1080);

}

function draw() {
  background(0);
  textFont(fontRegular);
  animation(roll, 1920/2, 1080/2);
  roll.frameDelay = 10;
  fill(255)
  textSize(50);


  
fill(255,100);
noStroke();
    
    
    if(dist(mouseX,mouseY,1920/2,1080/2)<400){
      
     

      if(mouseIsPressed){
      //image(p3, 0, 0,1920,1080);
      start=true;
      tp+=1;

    }
    }
    //fill(0,150);
    //ellipse(1920/2,1080/2,2500,2500)
    if(start==true&&roll.getFrame() == roll.getLastFrame()){
      roll.looping = false;
      roll.visible=false;
      animation(inn, 1920/2, 1080/2);
      if(inn.getFrame() == inn.getLastFrame()){
        window.location.href="index6.html";
      }
    }
    

    textSize(70);
    textAlign(CENTER, TOP);
    //animation(down,1920/2, 1080/2);
    fill(255,255);
    text("Girls the Troopers of Dance Aesthetization of Politics and Manipulation of Entertatinment",1920/2-400,1080/2-350,800,1000);
    textSize(40);
    fill(255,(sin(2*PI/100*frameCount)+1)*255/2);
    text("Click to Start",1920/2-100,1080/2+250,200,200);
    fill(0,tp);
    ellipse(1920/2,1080/2,2500,2500)

    fill(0,tp);
    ellipse(1920/2,1080/2,2500,2500)
    if (ts>=0){
      ts-=1;
    }else{ts=0;}

    fill(0,ts);
  ellipse(1920/2,1080/2,2500,2500);


}
