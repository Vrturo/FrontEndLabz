$(document).ready( function(){
  $('#content')[0].style.backgroundImage = "url('food.jpg')";
  var theWindow = $(window),
  $content = $("#content"),
  aspectRatio = $content.width() / $content.height();

  function resizecontent() {
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $content
          .removeClass()
          .addClass('contentheight');
    } else {
        $content
          .removeClass()
          .addClass('contentwidth');
    }
  }

  theWindow.resize(resizecontent).trigger("resize");
});
