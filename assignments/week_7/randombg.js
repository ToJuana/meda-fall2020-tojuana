// Creat a button that changes the background color to a random color from a selection of 16.7 million colors.

Math.random(); // random number between 0 to .9~;



$(document).ready(function () {
  $("#bgchanger").click(function () {
    var redColor = Math.random() * 256; // range should be o to 255.9~
    var redColor = Math.floor(redColor); // removes decimal point.

    var greenColor = Math.random() * 256;
    var greenColor = Math.floor(greenColor);

    var blueColor = Math.random() * 256;
    var blueColor = Math.floor(blueColor);

    var rgbValue = `rgb(${redColor}, ${blueColor}, ${greenColor})`;

    var rgbText = `<p>${rgbValue}</p>`;

    $("body").css("background-color", rgbValue);
    $("body").append(rgbText);
  
   

  });

});