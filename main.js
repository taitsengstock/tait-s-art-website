$('document').ready(function(){


var mouseOver = function (){
  $( ".category-image" ).mouseover(function() {
    alert("Hello! I am an alert box!!");
  });
}

var dropDown = function () {
	$('.dropdown-toggle').dropdown('.dropdown-menu')

}

dropDown();
mouseOver();
});
