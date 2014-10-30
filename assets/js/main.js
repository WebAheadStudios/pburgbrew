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
ga('require', 'displayfeatures');
ga('send', 'pageview');

/**
 * Helping function to execute code only once even after page refresh
 */
function executeOnce () {
  var argc = arguments.length, bImplGlob = typeof arguments[argc - 1] === "string";
  if (bImplGlob) { argc++; }
  if (argc < 3) { throw new TypeError("executeOnce - not enough arguments"); }
  var fExec = arguments[0], sKey = arguments[argc - 2];
  if (typeof fExec !== "function") { throw new TypeError("executeOnce - first argument must be a function"); }
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { throw new TypeError("executeOnce - invalid identifier"); }
  if (unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) === "1") { return false; }
  fExec.apply(argc > 3 ? arguments[1] : null, argc > 4 ? Array.prototype.slice.call(arguments, 2, argc - 2) : []);
  document.cookie = escape(sKey) + "=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + ((bImplGlob ? false : arguments[argc - 1]) ? location.pathname : "/");
  return true;
}

/**
 * Show Modal with Age Verify
 *
 * @param {object} element
 */
function showAgeVerify (element) {
    element.modal({
        backdrop: 'static'
    });
}

$(document).ready(function(){
  "use strict";
  // Trigger the Age Verify Modal
  executeOnce(showAgeVerify, null, $('#age-verify'), 'age-verify', true);

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
    updateHash: true,

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

  // show modal
  $('#age-verify').modal({
      backdrop: 'static'
  });

});
