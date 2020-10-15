$(function () {
    console.log('Jquery has loaded');

     // Changes background dynamically to yellow.
    $('body').css('background-color', 'yellow');
});

// jQuery(); === $()

/*var myLinkCollection = document.getElementsByTagName("a");

for (i = 0; i < myLinkCollection.length; i++) {
  if (myLinkCollection[i].className == "link_class") {
    myLinkCollection[i].onclick = function() {
      this.style.backgroundColor = "#f00";
    }
  }
}

$('a.link_class').css('background-color', '#f00');*/