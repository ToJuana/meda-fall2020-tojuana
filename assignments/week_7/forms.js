$(document).ready(function () {
   
  $("#plus").click(function () {
    var firstNumberString = $("#num1").val();
    var secondNumberString = $("#num2").val();

    var firstNumberConvertedString = parseInt(firstNumberString);
    var secondNumberConvertedString = parseInt(secondNumberString);

      "hello" -> NaN
      "100Hello" -. 100;
      "100" -> 100;
      "90tierfoeudk" -> 90;
      true -> NaN // is some other languages you 
    

    //isNaN() checks if the argument is an NaN, if it is , returns true, if it is not, return false.
    if ( isNaN(firstNumberConvertedString) || isNaN(secondNumberConvertedString)) {
      $("#results").html("Error: One of your number is nat a number!");
      $("#results").css("color", "red");
    } else {
      var sum = firstNumberConvertedString + secondNumberConvertedString;
      $("#results").html(sum);
      $("#results").css("color", "black");
    }
  });
  
  
   

});
  
  