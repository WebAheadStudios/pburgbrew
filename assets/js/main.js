// Facebook SDK
(function(d, s, id) {
  "use strict";
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US/all.js#xfbml=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52769509-1', 'auto');
ga('send', 'pageview');

$(document).ready(function(){
  "use strict";
  // Add "loaded" class when a section has been loaded
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop();
    $(".section").each(function() {
      var elementTop = $(this).offset().top - $('#header').outerHeight();
      if(scrollTop >= elementTop) {
        $(this).addClass('loaded');
      }
    });
  });

  // One Page Navigation Setup
  $('#navigation').singlePageNav({
    offset: $('#navbar').outerHeight(),
    filter: ':not(.external)',
    speed: 750,
    currentClass: 'active',

    beforeStart: function() {
    },
    onComplete: function() {
    }
  });

  // Sticky Navbar Affix
  $('#navbar').affix({
    offset: {
      top: $('#topbar').outerHeight(),
    }
  });

  // Smooth Hash Link Scroll
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").click();
    }
  });


  var $container = $('.portfolio-isotope');

  $container.isotope({
    itemSelector : '.portfolio-item',
    resizable: true,
    resizesContainer: true
  });

  // filter items when filter link is clicked
  $('#filters a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

}); 
