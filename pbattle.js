

function setup(){
    createCanvas(650,650);
}
var hp = 100;
var hp2 = 100;




function draw() {
  background(51, 153, 102);
  ellipse(150, 400, 90, 90);
  fill(1,1,1);
  ellipse(475, 150, 90, 90);
  fill(1,1,1);
  
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
  /*quad(425, 275, 525, 275, 525, 350, 425, 350);
  quad(100, 525, 200, 525, 200, 600, 100, 600);
  line(425, 312.5, 525, 312.5);
  line(475, 275, 475, 350);
  line(100, 562.5, 200, 562.5);
  line(150, 525, 150, 600); */   
}

function mouseClicked() {
  if (mouseX< 230 && mouseY< 575 && mouseX > 150 && mouseY > 525 && hp2 > 0) {
    hp2 = hp2-10;
  } else {
    value = 0;
  }
}

