
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  
  success: function(data) {
    //console.log(data);
     firstName = data.results[0].name.first;
     lastName = data.results[0].name.last;
     pic = data.results[0].picture.medium;
    $(".card-info").append("<h2>"+firstName+" " +lastName+"</h2>");
    $(".useravatar").append("<img src='"+pic+"'>");
  }
});



$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});