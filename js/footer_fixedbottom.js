$(document).ready(function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 500) {
      $('#footer').addClass('navbar-fixed-bottom');
      $('#footer').removeClass('navbar-static-bottom');
    }
    if ($(window).scrollTop() > 1001) {
      $('#footer').removeClass('navbar-fixed-bottom');
      $('#footer').addClass('navbar-static-bottom');
    }
  });
});
