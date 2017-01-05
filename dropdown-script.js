$("ul").slideUp(0);

var $box = $(".display-box")

$box.click(function(){
  $("ul").slideDown(1000);
});

$("ul").on("click", "li", function(e) {
  $(".display-box").val(e.target.innerText);
  $("ul").slideUp(500);
});
