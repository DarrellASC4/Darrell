function setuo(){
    creatCanvas(300,300);
    background(225)
}

var clock;
function rand(){
var clock = Math.floor(Math.random()*256);
return clock;
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

