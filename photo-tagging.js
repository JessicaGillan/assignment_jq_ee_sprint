var $photo = $( ".photo" ),
    $box = $(".box"),
    $dropdown = $('<ul>').html(
      '<li class="choice">Bob</li><li class="choice">Frank</li><li class="choice">Waldo</li>'
    ).addClass('push-down').slideUp(0);

$photo.mousemove(function( event ) {
  $box.css("left", (event.pageX - 85) + "px");
  $box.css("top", (event.pageY - 40) + "px");
});

$photo.hover(function( event ) {
  $box.toggleClass("finder");
});

$photo.click(function( event ) {
  newDiv = $('<div>').css("left", (event.pageX - 85) + "px")
                     .css("top", (event.pageY - 40) + "px")
                     .addClass("finder box");
  newDiv.append($dropdown).slideDown(500);

  $photo.append(newDiv);
});
