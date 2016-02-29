$(function(){
      $(".introduction__typewriter").typed({
        strings: ["> ^1500 I am a UI/UX designer and frontend developer living and working in Bellevue, Washington.",
        "> ^500 I have a passion for elegant design, beautiful interfaces, and using technology to make the world a better place."],
        typeSpeed: 0,
        backDelay: 1250,
        contentType: 'text',
      });

      $(".homeAnimation1").delay(100).animate({ opacity: 1 }, 500);​
      $(".homeAnimation2").delay(250).animate({ opacity: 1 }, 1000);​
      $(".homeAnimation3").delay(400).animate({ opacity: 1 }, 1200);​
      $(".homeAnimation4").delay(600).animate({ opacity: 1 }, 1200);​
      $(".fancy-hr").delay(600).animate({ opacity: 1 }, 1200);​
      $(".homeAnimation5").delay(700).animate({ opacity: 1 }, 1200);​
      $(".typed-cursor").delay(700).css({ "display" : "inline" });​
 });

// http://unheap.com

$(function() {
  $('.browsehappy').click(function() {
    $(this).slideUp();
  });
});

$(function() {
 $('.magnific').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

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
