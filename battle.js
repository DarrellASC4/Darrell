var circles = [];
var gridSize= 100;


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
        "x-axis":rand(5),
        "y-axis":rand(5)
    }
    console.log("SPOT: " + target); //
}

function draw() {

            for (var i = 0; i <6; i++) {
                for (var j = 0; j <6; j++) {
                    fill (200,200,200);
                    rect(gridSize*i,gridSize*j,gridSize,gridSize);
                }
            }
        }


   // if (mouseIsPressed)
   
  //else if(){

  //}

  //else{

  //}
    

  
  
  //print(mouseIsPressed);
