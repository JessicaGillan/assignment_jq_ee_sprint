var $photo = $( ".photo" )
var $box = $(".box")
$photo.mousemove(function( event ) {
  $box.css("left", (event.pageX - 85) + "px");
  $box.css("top", (event.pageY - 40) + "px");
});

$photo.hover(function( event ) {
  $box.toggleClass("finder");
});
