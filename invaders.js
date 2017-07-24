function setup(){
    createCanvas(630,600);
   
}

var x = 300;
var y = 500;
var e = 500;
var z = 300;
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
    rect(z,e,5,5);
    if (keyIsDown(LEFT_ARROW)){
        x-=5;
    } else if (keyIsDown(RIGHT_ARROW)){
        x+=5;
    }
    if (keyIsDown(32)){
        e--

    }

    setTimeout(enemyShoot, 100)

}