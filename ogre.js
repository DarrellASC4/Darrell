var HP= 100;
var gold=0;
var numberDefeated=0;

function updatedStats(){
    $('#stats').text("Hp:" +HP+ "Gold:" +gold+ "deaths:" +numberDefeated);
}

function spawnOgre(){
    var pics = ["https://vignette2.wikia.nocookie.net/villains/images/c/c5/Ogre.png/revision/latest?cb=20100701182712", "http://pre00.deviantart.net/700f/th/pre/i/2014/294/e/b/character_design__evil_ogre_by_cybercortex-d83nmcq.png", "http://orig04.deviantart.net/a4e0/f/2009/108/b/7/zork__ogre_by_zubby.png","http://3.bp.blogspot.com/-ZayhcomdScU/UubPeHqbjNI/AAAAAAAADkI/n3NTAM_-K6Y/s1600/OgreOriginalColor.png","http://www.algadon.com/images/monsters/ogre.png"];
    var R = Math.floor((Math.random()*5));
    $('#ogres').prepend("<img src= "+pics[R]+">");

}
function attack(){
if (HP > 0){ //player still alive
   if (Math.random()*100>gold){
       gold=gold+10;
      
       $("#ogres").prepend("<p style='color:blue'>that's a dub + 10 gold.</p>");
   }
   else{
       gold--;
       HP--;
        numberDefeated++;
        $("#ogres").prepend("<p style='color:red'>issa L - 10 gold.</p>");
   }
}
else{
    //game over
    $('#ogres').prepend("<h1>Game Over Bih</h1>")
}
updatedStats();
spawnOgre();
}

function setup(){
 $("body").append("<h1>Welcome to the Ogre Fighter!</h1>");

 $("body").append(

    "<div> <h3> Stats </h3><p id ='stats'></p></div>"
);    

$("body").append(

 "<button onClick='attack()'> Attack Bih</button>"
);    

$("body").append(

 "<div id='ogres'></div>"
);    
updatedStats();

}
$(document).ready(setup); 
               
