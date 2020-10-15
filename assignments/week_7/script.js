$(document).ready(function () {

  setTimeout(function () {
      var myBox = $("#box"); //jQuery();
      myBox.css("background-color", "red");
  }, 3000); // 3000 = 3 seconds

  setTimeout(function () {
    var myBox = $("#box"); //jQuery();
    myBox.css("background-color", "green");
  }, 6000); // 6000 milasecond = 6 seconds


var orangeButton = $("#orange-button");

orangeButton.click(function (){
      $("#box").css("background-color", "orange");
     // $("body").empty(); get rid of children of selected DOM object;
  }); 

 var purpleButton = $("#purple-button");

  purpleButton.click(function (){
      $("#box").css("background-color", "purple");

      //If purple button gets clicked, we change box AND button CSS properties
      $("#purple-button").css("color", "white")
  });

   $("#pink-button").click(function (){
       $("#box").css("background-color", "pink");
   });

});