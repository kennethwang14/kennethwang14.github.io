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

var btn = $('.contact');
var background = $('.background');


var width = 0;
var height = 0;
var r = 0;
setSize();

function setSize() {
  width = $(window).width();
	height = $(window).height();
  r = Math.sqrt(width * width + height * height);
}
$(window).resize(setSize);

btn.click(function(e) {
  btn.removeClass('current');
  $(this).addClass('current');
  var circle = $("<div unselectable='on' id='circle'></div>");
  background.append(circle);
  circle.css({
    position: 'absolute',
    'background-color': 'rgb(33,150,243)',
    width: 0,
    height: 0,
    "border-radius": "50%",
    left: e.pageX,
    top: e.pageY,
    "z-index": "100",
    'margin-left': 0,
    'margin-top': 0,
    'webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none'
  });
  circle.animate({
    width: (r * 2),
    height: (r * 2),
   	'margin-left': -r,
    'margin-top': -r
  }, {
    duration: 600,
    easing: "easeInOutCubic",
    queue: false,
    complete: function() {
     circle.parent().css('background-color',
                    $(this).css('background-color'));
     //circle.detach();
    }
  });
});
