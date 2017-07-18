var prompt = require('prompt-sync')();
var balance = 1000;
var store = ["sword", "food"];
var prices = [500,100];
var inventory []

while (wallet>0){
    var purchaseChoice = prompt("What do you want to buy?");
    if (purchaseChoice == sword && wallet >= prices[0]){
        balance = balance - prices[0];
        inventory.push("sword") 
}
    else if (purchaseChoice == store[1]){
    balance = balance - prices[1];
        inventory.push("food");
    }
    else if (purchaseChoice == "quit"){
      wallet = 0;  
    }
    else console.log("Not enough money bozo");
// 
// get input from the user. 
// 
//var n = prompt('Whatdo you want to buy?')