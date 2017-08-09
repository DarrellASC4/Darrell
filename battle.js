var circles = [];
var gridSize= 100;
var gridcheck = [""];

//creating a random number 
function rand(num) {
    var make = Math.floor(Math.random()*num);
}
rand(5); // checking the function

var target;     //variable will hold the battleship's position

function setup() {
    createCanvas(500,500);
    //Will pick a random x & y coordiante point for the battleship. CODE ISN'T FULLY RUNNING YET. WORK ON THIS AND IMPLEMENTING IT ONTO YOUR GRID.
    target = {
        xaxis:Math.floor((Math.random()*5)),
        yaxis:Math.floor((Math.random()*5)),
    }
    console.log("SPOT: " + target); //
}

function draw() {

            for (var i = 0; i <6; i++) {
                for (var j = 0; j <6; j++) {
                    fill (200,200,200);
                    rect(gridSize*i,gridSize*j,gridSize,gridSize);
                    if (xaxis>gridSize*i && xaxis<gridSize*i+gridSize && yaxis>gridSize*j && yaxis<gridSize*j+gridSize){
                            gridcheck.push(1); 
                    }
                    else {
                        gridcheck.push(0);
                    }
                }
            }
        }

        console.log(gridcheck)

/*function mouseClicked() {
    if 
}



   // if (mouseIsPressed)
   
  //else if(){

  //}

  //else{

  //}
    

  
  
  //print(mouseIsPressed);
