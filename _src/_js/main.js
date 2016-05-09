// http://unheap.com

$(function() {
  $('.browsehappy').click(function() {
    $(this).slideUp();
  });
});

var nav = responsiveNav(".siteNav");
  
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

  var pathname;

  $(".contact").on('click', function(){
    $("body").toggleClass("contact__open");
    var btn = $('.contact');
    var left = btn[0].offsetLeft + btn.width()/2;
    var top = btn[0].offsetTop + btn.height()/2;
    $(".contact__animation").css('margin-left', left);
    $(".contact__animation").css('margin-top', top);
    autosize($('#contact__message'));
    pathname = window.location.pathname;
    window.history.replaceState({}, '', '/contact/');
  });

  $(".contact__close").on("click", function() {
      $("body").toggleClass("contact__open");
      if (pathname == null) {
        window.history.replaceState({}, '', '/');
      } else {
        window.history.replaceState({}, '', pathname);
      }
  });

  $('.contact__field').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });