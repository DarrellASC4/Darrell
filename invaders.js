function setup(){
    createCanvas(630,600);
   
}

var x = 300;
var y = 500;
var Bullets=[]
function enemyShoot(){
  
}

function draw (){
    background(64, 0, 128);
    fill(102, 255, 102)
    ellipse(50, 50, 40, 40);
    ellipse(110, 50, 40, 40);
    ellipse(170, 50, 40, 40);
    ellipse(230, 50, 40, 40);
    ellipse(290, 50, 40, 40);
    ellipse(350, 50, 40, 40);
    ellipse(410, 50, 40, 40);
    ellipse(470, 50, 40, 40);
    ellipse(530, 50, 40, 40);

    ellipse(590, 50, 40, 40);
    fill(255, 51, 0);
    rect(x,y,30,50);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
       if (x < 0){
          x=0 
       } 
    } else if (keyIsDown(RIGHT_ARROW)){
        x+=5;
         if (x>600){
             x=600
         }
    }
    for(var i=0; i <Bullets.length;i++){
        Bullets[i].Y -=10
        rect(Bullets[i].X,Bullets[i].Y,5,5)
    }
}

function Bullet(X,Y){
   this.X = X;
   this.Y = Y;
}

function keyPressed() {
   if (keyCode == 32){
       var bullet1 = new Bullet(x,y);
       Bullets.push (bullet1)

  }

}
