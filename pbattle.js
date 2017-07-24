function setup(){
    createCanvas(650,650); 
}

var hp = 100;
var hp2 = 100;

function draw() {
  background(51, 204, 51);
  ellipse(150, 400, 90, 90);
  ellipse(475, 150, 90, 90);
  
  rect(100,500, 100, 15);
  rect(425,250, 100, 15);
  rect(100,500, hp, 15);
  rect(425,250, hp2, 15);
   
  text("HP:"+hp+"/100",100, 490)
  text("HP:"+hp2+"/100", 425, 235)
    
  if (mouseIsPressed){
    rect(150,525, 80, 50);
    hp = hp-10;
     if(hp == 0){
       hp = 0;
     }
  }else{
  rect(150,525, 80, 50);
}

 rect(70,525, 80, 50);
  
  rect(150,575, 80, 50);
  rect(70,575, 80, 50);

  rect(395,275, 80, 50);
  rect(475,275, 80, 50);
  rect(395,325, 80, 50);
  rect(475,325, 80, 50);

  text("fly", 80,550)
  text("roar", 160,600)
  text("flame", 160,550)
  text("ember", 80,600)

  text("fly", 415,295)
  text("roar", 485,295)
  text("flame", 415,345) 
  text("ember", 485,345)

  /*quad(425, 275, 525, 275, 525, 350, 425, 350);
  quad(100, 525, 200, 525, 200, 600, 100, 600);
  line(425, 312.5, 525, 312.5);
  line(475, 275, 475, 350);
  line(100, 562.5, 200, 562.5);
  line(150, 525, 150, 600); */   
}