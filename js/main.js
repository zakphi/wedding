function initialize() {
  var myLatlng = new google.maps.LatLng(41.2204219,-73.723563);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - $("nav").outerHeight(true);
        // var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 1000);
        return false;
      }
    }
  });
});
