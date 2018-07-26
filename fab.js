function fab(){
  var fab_primary = $(".fab_contenedor .fab.primary"),
      dl = $(".fab_contenedor dl"),
      button = $(".fab_contenedor dl dt button"),
      contenedor = $(".fab_contenedor");

  fab_primary.hover(function() {
    dl.css({"visibility": "visible","opacity": "1"});
    button.css('transform', 'scale(1) translateY(0px) translateX(0px)');
    contenedor.hover(function() {}, function() {
      dl.css({"visibility": "hidden","opacity": "0"});
      button.css('transform', 'scale(.4) translateY(40px) translateX(0px)');
    })
  });

  fab_primary.on('click', function() {
    if (dl.css("opacity") == 0) {
      button.css('transform', 'scale(1) translateY(0px) translateX(0px)');
      dl.css({"visibility": "visible","opacity": "1"});
    }else{
      dl.css({"visibility": "hidden","opacity": "0"});
      button.css('transform', 'scale(.4) translateY(40px) translateX(0px)');
    }
  });
}
