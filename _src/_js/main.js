$(function(){
      $(".introduction__typewriter").typed({
        strings: ["$ ^1500 I am a UI/UX designer and frontend developer living and working in Bellevue, Washington.",
        "$ ^500 I have a passion for elegant design, beautiful interfaces, and using technology to make the world a better place."],
        typeSpeed: 0,
        backDelay: 1250,
        contentType: 'text',
      });

      $(".homeAnimation1").delay(100).animate({ opacity: 1 }, 500);​
      $(".homeAnimation1").delay(250).animate({ opacity: 1 }, 500);​
      $(".homeAnimation3").delay(400).animate({ opacity: 1 }, 1200);​
      $(".homeAnimation4").delay(600).animate({ opacity: 1 }, 1200);​
      $(".homeAnimation5").delay(700).animate({ opacity: 1 }, 1200);​
 });