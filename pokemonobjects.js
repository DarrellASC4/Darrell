function printroster(realName,Power,justice,height, health){
this.HP = realName;
this.atk = power;
this.def = justice;
this.legend = height;
this.name = name;
this.type = type;
};

var mew= new printroster(150, 100, physcic, false, mew,physic,)
var pika= new printroster(100, 100, physcic, true, mew,physic,)
var Darrell= new printroster(200, 100, fire, false, mew,physic,)
var nic= new printroster(150, 100, physcic, true, mew,physic,)
var alexis= new printroster(130, 100, physcic, false, mew,physic,)
var alex= new printroster(175, 100, physcic, true, mew,physic,)


function pokemonattacked()
var random = Math.floor(Math.random()*100)
printroster.HP-= random

console.log(mew.HP); 