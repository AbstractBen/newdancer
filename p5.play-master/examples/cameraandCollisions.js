//虚拟摄像机
//移动鼠标
//Sprite跟随鼠标但居中于画布
//因为摄像机跟随它

var ghost;
var bg;
var frame;
//该场景大小是画布大小的两倍
var rX=570;
var rY = 1080;
var lX =1336;
var lY = 1080;
var SCENE_W = lX*2.3;
var SCENE_H = lY*2.3;
var rlx= lX+100+1920-lX;
var rly= lY+100;
//根据画布和场景大小重新定位一些物体
var obstacles;
var collectibles;
var asterisk;
var transP = 0;
var transPP = 0;
//拖尾设定
var pox =new Array(200);//声明一个x数组存储50个鼠标坐标的x值
var poy=new Array(200);//声明一个x数组存储50个鼠标坐标的y值

var ts=255;
function preload(){
  fontRegular = loadFont('0425stage/FuturaBold.otf');
}

function setup() {
  createCanvas(1920, 1080);
  strokeWeight(3);
  stroke(255, 100);
  rtd=loadImage('0425stage/right/rtd.png')
  rtdd=loadImage('0425stage/right/rtd2.png')
  //create a user controlled sprite
  asterisk = createSprite(lX+rX/2, rY/2,100,100);
  asterisk.addAnimation('normal', '0425stage/1_01.png', '0425stage/1_05.png');
  asterisk.addAnimation('stretch', '0425stage/1_01.png', '0425stage/1_05.png');


  asterisk.scale=0.5;

  //create 2 groups
  obstacles = new Group();
  collectibles = new Group();
  splats = new Group();
  for(var i=0;i<pox.length;i++){
    pox[i]=0;
    poy[i]=0;
  }


  for(var j=0; j<8; j++)
  {
    var dot = createSprite(random(lX, lX+rX), random(0, rY));
    dot.scale=random(0.3,0.8);
    dot.addAnimation('normal', '0425stage/right/01.png', '0425stage/right/08.png');
    dot.setCollider('circle', -2,2, 100);
    dot.setSpeed(random(2, 3), random(0, 360));
    dot.mass = dot.scale;
    collectibles.add(dot);
  }


  //制作sprite并添加三个动画
  ghost = createSprite(-lX, -lY);
coina = createSprite(-lX, -lY);
coinb = createSprite(-lX, -lY);
coinc = createSprite(-lX, -lY);

  ghost.addAnimation('moving', '0425stage/alpha/dancer00.png','0425stage/alpha/dancer23.png')
  coina.addAnimation('moving', '0425stage/a/a00.png','0425stage/a/a21.png')
  coinb.addAnimation('moving', '0425stage/b/b00.png','0425stage/b/b19.png')
  coinc.addAnimation('moving', '0425stage/c/a00.png','0425stage/c/a28.png')
    curtain = createSprite(-lX, -lY);
    curtain.addAnimation('moving', '0425stage/curtain/01.png','0425stage/curtain/30.png')
    //curtain.frameDelay(8);
  bg = loadImage('0425stage/citybg.png')
  dancer =loadImage('0425stage/dancer.png')
  
  lt=loadImage('0425stage/light.png')
  stf=loadImage('0425stage/front1.png')//front
  stb=loadImage('0425stage/front2.png')//back
  stl=loadImage('0425stage/frontlight.png')
  tit=loadImage('0425stage/titlee.png')

  rpic=loadImage('0425stage/0427.jpg')


  frame = loadImage('0425stage/curtain.png');
  //上图为前景
  t1 = loadImage('0425stage/alpha/01.png')
  t2 = loadImage('0425stage/alpha/02.png')
  t3 = loadImage('0425stage/alpha/03.png')
  t4 = loadImage('0425stage/alpha/04.png')
  t5 = loadImage('0425stage/alpha/05.png')
}

function draw() {
  background(255, 255, 255);

  ghost.velocity.x=0;
 
  ghost.velocity.y =0;



  xxx=1336;
  yyy=1080;
  camera.position.x =  (camera.mouseX-xxx)/10;
  camera.position.y =  (camera.mouseY-yyy)/10;
  if((mouseIsPressed)&&(mouseButton==LEFT)){
  camera.zoom = 1;
  //camera.position.x =  (camera.mouseX-xxx)/10-300;
  camera.position.x =  -100;
  camera.position.y =  (camera.mouseY-yyy)/10+500;
}
else{
  camera.zoom = 0.5;
}
  //bg
  //var tt;
  var bgx=(camera.mouseX-xxx)/5;
  var bgy=(camera.mouseY-yyy)/5;
  //Light,more movement than dancer
  var flx=(camera.mouseX-xxx)/8;
  var fly=(camera.mouseY-yyy)/8;
  var stxl=(camera.mouseX-xxx)/9;
  var styl=(camera.mouseY-yyy)/9;
  //Dancer
  var dcx=(camera.mouseX-xxx)/10;
  var dcy=(camera.mouseY-yyy)/10;
  ghost.position.x = dcx-500;
  ghost.position.y = dcy;
  ghost.scale=2;

  coina.position.x = dcx-300;
  coina.position.y = dcy+250;
  coina.scale=1.8;

  coinb.position.x = dcx-300;
  coinb.position.y = dcy+250;
  coinb.scale=1.8;
  coinc.position.x = dcx-300;
  coinc.position.y = dcy+250;
  coinc.scale=1.8;
  //stage，less movement，similar to dancer
  var stxb=(camera.mouseX-xxx)/9.5;
  var styb=(camera.mouseY-yyy)/9.5;
  var stxf=(camera.mouseX-xxx)/11;
  var styf=(camera.mouseY-yyy)/11;
  //curtain,less movement
  var frx=(camera.mouseX-xxx)/20;
  var fry=(camera.mouseY-yyy)/20;
  curtain.position.x = 1920/2;
  curtain.position.y = 1080/2;
  //curtain.scale=2;

  //limit the ghost movements
  if(camera.position.x < -200)
  camera.position.x = -200;
  if(camera.position.y < 0)
  camera.position.y = 0;
  if(camera.position.x > SCENE_W)
  camera.position.x = SCENE_W;
  if(camera.position.y > SCENE_H)
  camera.position.y = SCENE_H;


  //shadow using p5 drawing
  noStroke();
  fill(0, 0, 0, 20);
  //shadow
  //ellipse(ghost.position.x, ghost.position.y+90, 80, 30);
  //character on the top
  image(bg, bgx-rlx, bgy-rly,SCENE_W,SCENE_H);
  
  image(lt, flx-rlx, fly-rly,SCENE_W,SCENE_H);
  image(tit, stxl-rlx, styl-rly+200,SCENE_W,SCENE_H);
  image(stl, stxl-rlx, styl-rly,SCENE_W,SCENE_H);
  image(stb,stxb-rlx,styb-rly,SCENE_W,SCENE_H);
  image(stf,stxf-rlx,styf-rly,SCENE_W,SCENE_H);
  //image(dancer, dcx-rlx, dcy-rly,SCENE_W,SCENE_H);
  //animation(dancerAni, dcx-rlx, dcy-rly);

  drawSprite(ghost);

  if(keyIsDown( 65)){
   drawSprite(coina);
   coina.looping = false;

  }
  if(keyIsDown(66)){
    drawSprite(coinb);
    coinb.looping = false;

   }
   if(keyIsDown( 67)){
    drawSprite(coinc);
    coinc.looping = false;
   }
  //drawSprites(splats);

  image(frame, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  //image(rpic, frx-rlx+100, fry-rly+100,SCENE_W*0.9,SCENE_H*0.9);
  camera.off();
  //image(rpic,lX, 0,1920-lX,lY);
  fill(50);
  //右侧的页面
  rect(lX,0,rX,rY);
  image(rtd, lX, 0,rX,rY);
  //tint(255, transP);
  //image(rtdd, lX, 0,rX,rY);
  //根据transP的值分段显示
  if (transP >=50){
    image(t1, lX, 0,rX,rY);
  }
  if (transP >=100){
    image(t2, lX, 0,rX,rY);
  }
  if (transP >=150){
    image(t3, lX, 0,rX,rY);
  }
  if (transP >=200){
    image(t4, lX, 0,rX,rY);
  }
  if (transP >=250){
    image(t5, lX, 0,rX,rY);
  }
  //tint(255,255);

  
  for(var i=1;i<pox.length-1;i++){
    pox[i]=pox[i+1];
    poy[i]=poy[i+1];
  }

  collectibles.bounce(collectibles);
  //if no arrow input set velocity to 0
  asterisk.velocity.x = (mouseX-asterisk.position.x)/10;
  asterisk.velocity.y = (mouseY-asterisk.position.y)/10;

  //asterisk collides against all the sprites in the group obstacles
  asterisk.collide(obstacles);

  //I can define a function to be called upon collision, overlap, displace or bounce
  //see collect() below
  asterisk.overlap(collectibles, collect);


  
  //最后一个数组位置填充此时的鼠标的值
  pox[pox.length-1]=asterisk.position.x;
  poy[poy.length-1]=asterisk.position.y;
  //根据该50个值绘制图形
  for(var i=0;i<pox.length-1;i++){
    noStroke();//指定没有边框
    ecolor=i*5;
    constrain(ecolor,0,255);//限制范围
    fill(ecolor);
    ellipse(pox[i],poy[i],3,3);

  }

  //边距碰撞
  for(var i=0; i<collectibles.length; i++) {
    var s = collectibles[i];
    if(s.position.x<lX) {
      s.position.x = lX;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
  
    var d = asterisk;
    if(d.position.x<lX+70) {
      d.position.x = lX+70;
      //d.velocity.x = abs(d.velocity.x);
      d.velocity.x = 0;
    }

    if(d.position.x>width) {
      d.position.x = width-1;
      //d.velocity.x = -abs(d.velocity.x);
      d.velocity.x = 0;
    }

    if(d.position.y<0) {
      d.position.y = 1;
      d.velocity.y = abs(d.velocity.y);
    }

    if(d.position.y>height) {
      d.position.y = height-1;
      d.velocity.y = -abs(d.velocity.y);
    }
   drawSprites(collectibles);
  drawSprite(asterisk);
  
  fill(0,transPP);
  rect(lX,0,570,1080);
  let tt=map(curtain.animation.getFrame(),0,curtain.animation.getLastFrame(),-10,255);
  //map(value, start1, stop1, start2, stop2)
fill(0,255-tt);
rect(0,0,1920,1080);
textSize(15)
fill(255,255);
  text("Wait the left to become dark,or click here to skip.",1200,940,100,500);
  drawSprite(curtain);
  if ( curtain.animation.getFrame() == curtain.animation.getLastFrame()) {
    curtain.remove();
	}
  //curtain.life = 40;
  if (ts>=0){
    ts-=2;
  }else{ts=0;}


  if(dist(mouseX,mouseY,1200,940)<100){
    //textSize(50);
    //textAlign(CENTER, TOP);
    //animation(down,1920/2, 1080/2);
    fill(0,255);
    //text("Click to End",1920/2-100,1080/2-50,200,200);
    //ellipse(x4,y4,r4,r4);
    //down.frameDelay = 8;
    if(mouseIsPressed){
    //image(p3, 0, 0,1920,1080);
    window.location.href="index8.html";
  }}
  fill(0,ts);
  ellipse(1920/2,1080/2,2500,2500);



}
function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  collector.changeAnimation('stretch');
  collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered
  //the event
  //collected.remove();
  textFont(fontRegular);
  let s = 'Women walking or wandering aimlessly in the city means a guilty and immoral desire.';
  textSize(55);
  fill(255);
  noStroke();
  text(s, lX+20, 20, 70*6, 80*10); // Text wraps within text box
if (transP<255){
  transP+=0.2;}
  else {
    transP=255;
    transPP+=15;}
  if (transPP>=255){
  transPP=255;
  window.location.href="index8.html";



}

}
//function mousePressed() {
	//create a sprite
//  if(mouseButton==RIGHT){
	//let splat = createSprite(camera.mouseX,camera.mouseY);
	//splat.addAnimation('normal', 'assets/asterisk_explode0001.png', 'assets/asterisk_explode0011.png');
  //splat.addAnimation(
	//	'normal',
	//	'0425stage/coin/1.png',
	//	'0425stage/coin/2.png',
	//	'assets/square.png',
	//	'assets/cloud.png',
	//	'assets/star.png',
	//	'assets/mess.png',
	//	'assets/monster.png'
//	);

	//and set it to a random frame


  //splat.collide(ghost)
	//set a self destruction timer (life)


 // }
//}
