var circles = [];
var gridSize= 100;
var grid= [[0],[0] 0,0];

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
                    
                    if (grid [i][j]){
                    }
                    }
                }
            }
        }

        console.log(gridcheck)

function mouseClicked() {
    if gridcheck
}

//height/gridesize*i

   // if (mouseIsPressed)
   
  //else if(){

  //}

  //else{

  //}
    

  
  
  //print(mouseIsPressed);
