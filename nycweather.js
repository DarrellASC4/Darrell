$("button").click(function(){
    $.ajax({"http://samples.openweathermap.org/data/2.5/weather?q=New%20York,us&appid=b1b15e88fa797225412429c1c50c122a1": "demo_test.txt", 
    
    success: function(result){
        //$("#div1").html(result);
    }});
});

/*var ID = "cf7e352b";
var mykey ="d9a382795971768c3c9c0834039661ec";
var myurl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId="+ID+"&appKey="+mykey

$.ajax({    
    url:myurl,
    success: function(data){
        console.log(data);
    }
})*/