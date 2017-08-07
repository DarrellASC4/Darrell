function setup(){
    createCanvas(650,650);
    
}
var hp = 100;
var hp2 = 100;


function draw() {
  background(51, 153, 102);

  fill(255, 255, 0);
  ellipse(150, 400, 120, 120);
  
  fill(1,1,1)
  ellipse(130, 380, 25, 25)
  ellipse(170, 380, 25, 25)
  //triangle(36, 75, 58, 90, 80, 75);
  triangle(160, 400, 150, 410, 140, 400);
  arc(150, 430, 50, 40, 150, PI+QUARTER_PI, CHORD);
  line(140, 420, 150, 430);

  fill(242, 242, 242)
  ellipse(135, 375, 11, 11)
  ellipse(165, 375, 11, 11)

  fill(255, 51, 0)
  ellipse(110, 410, 25, 25)
  ellipse(190, 410, 25, 25)
  fill(255, 153, 102)
  arc(150, 438, 25, 25, 150, PI+QUARTER_PI, CHORD);

  fill(1,1,1)
   line(150, 420, 150, 450);
  
  fill(255, 255, 0);
  ellipse(475, 150, 120, 120);
  rect(100,500, 100, 15);
  fill(0,0,0);
  rect(425,250, 100, 15);
   fill(0,0,0);
  
  if (hp>= 70){
    fill(0, 204, 0);
  }
  else if (hp>=30 && hp<70){
  fill(255, 255, 0);
}
  else {
    fill(255, 51, 0);
  }
  rect(100,500, hp, 15);

  
    if (hp2>= 70){
    fill(0, 204, 0);
  }
  else if (hp2>=30 && hp2<70){
  fill(255, 255, 0);
}
  else {
    fill(255, 51, 0);
  }
rect(425,250, hp2, 15);

  text("HP:"+hp+"/100",100, 490)
  text("HP:"+hp2+"/100", 425, 235)
    
fill(179, 179, 179);
    rect(150,525, 80, 50);
    rect(70,525, 80, 50);
    rect(150,575, 80, 50);
    rect(70,575, 80, 50);
  
  rect(395,275, 80, 50);
  rect(475,275, 80, 50);
  rect(395,325, 80, 50);
  rect(475,325, 80, 50);

fill(1,1,1)
  text("fly", 80,550)
  text("roar", 160,600)
  text("flame", 160,550)
  text("ember", 80,600)
fill(1,1,1);
  text("fly", 415,295)
  text("roar", 485,295)
  text("flame", 415,345) 
  text("ember", 485,345)
fill(1,1,1);
  /*rect(150,525, 80, 50);
    rect(70,525, 80, 50);
    rect(150,575, 80, 50);
    rect(70,575, 80, 50);
   */   
}

function mouseClicked() {
  if (mouseX< 230 && mouseY< 575 && mouseX > 150 && mouseY > 525 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }

if (mouseX< 230 && mouseY< 625 && mouseX > 150 && mouseY > 576 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }

  if (mouseX< 150 && mouseY< 575 && mouseX > 70 && mouseY > 525 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }

  if (mouseX< 150 && mouseY< 625 && mouseX > 70 && mouseY > 576 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }
}

