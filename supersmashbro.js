var prompt = require('prompt-sync')();
var mashArray = ["Numbani", "vulskyer industries", "oasis"]
var firstQuestion = [5,10];
var secondQuestion = ["tracer", "roadhog"]

for (var i = 0; i<2; i++){
    firstQuestion.push(prompt("who do you want to use your ult on?"));
    secondQuestion.push(prompt("how many headshots"));
} 

console.log("you used your ult on" + firstQuestion + "and you got" + mashArray[Math.floor(Math.random()*1)]) + firstQuestion[2] + "headshots"
);