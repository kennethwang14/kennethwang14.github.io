// http://unheap.com

$(function() {
  $('.browsehappy').click(function() {
    $(this).slideUp();
  });
});

$(function() {
 InstantClick.init();
 $('.magnific').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  overflowY: 'scroll',
  closeOnContentClick: true,
  closeOnBgClick: true,
  showCloseBtn: false,
  enableEscapeKey: true,
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  });
});

$(".contact").on('click', function(){
  $("body").toggleClass("contact__open");
  $(".contact__content").toggleClass("contact__animation");
  var btn = $('.contact');
  var left = btn[0].offsetLeft + btn.width()/2;
  var top = btn[0].offsetTop + btn.height()/2;
  $(".contact__animation").css('margin-left', left);
  $(".contact__animation").css('margin-top', top);
  $(".contact__animation").addClass('notransition');
  $(".contact__animation").css('z-index', 3);
  $(".contact__animation").offsetHeight;
  $(".contact__animation").removeClass('notransition'); 
});