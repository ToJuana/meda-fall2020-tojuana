$(document).ready(function () {
  $("#textbox").keypress(function (event) {
    
    if (event.which === 97) {
      $("#textbox").val("append");
      event.preventDefault();

    }
  });

  $(document).keypress(function (event) {
    var keyPressed = event.which;
    console.log(keyPressed);

  /* $("body").append(`<p>The ${keyPressed} key was pressed!</p>`);*/
    
    if (event.which === 103) {
       $("body").append("<div style='width: 100px; height: 100px; background-color: green; display: inline-block'></div")
    }

    if (event.which === 98) {
      $("body").append("<div style='width: 100px; height: 100px; background-color: blue; display: inline-block'></div>")
    }

    if (event.which === 114) {
      $("body").append("<div style='width: 100px; height: 100px; background-color: red; display: inline-block'></div>")
    }

  });

});
  