var header = document.querySelector('header');
header.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle("active");
}
var icon = document.getElementById('icon');
var open = false;

header.addEventListener('click', function(){
    if(open){
        icon.className = 'fa fa-angle-down fa-2x';
    }else{
        icon.className = 'fa fa-angle-down open fa-2x';
    }
    open = !open;
});

$(window).scroll(function() {

    if ($(window).scrollTop() >= 50 ) {
    //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
      $('header').addClass('active-scroll');
    //   $('li a').removeClass('active');
    //   $('#nav-about').addClass('active');
    } else {
    // $('header').css('background', 'transparent');
    $('header').removeClass('active-scroll');
    }
    if ($(window).scrollTop() < 700) {
        //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
        //   $('header').addClass('active-scroll');
          $('li a').removeClass('active');
          $('#nav-home').addClass('active');
    }
    else if ($(window).scrollTop() >= 700 && $(window).scrollTop() < 1000) {
        //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
        //   $('header').addClass('active-scroll');
          $('li a').removeClass('active');
          $('#nav-about').addClass('active');
    }
    else if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1550) {
        //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
        //   $('header').addClass('active-scroll');
          $('li a').removeClass('active');
          $('#nav-skills').addClass('active');
    }
    else if ($(window).scrollTop() >= 1550 && $(window).scrollTop() < 2750) {
      //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
      //   $('header').addClass('active-scroll');
        $('li a').removeClass('active');
        $('#nav-project').addClass('active');
    }
    else if ($(window).scrollTop() >= 2750) {
      //   $('header').css('background', 'linear-gradient(261deg, rgba(150,16,108,1) 35%, rgba(198,28,221,1) 100%)');
      //   $('header').addClass('active-scroll');
        $('li a').removeClass('active');
        $('#nav-contact').addClass('active');
    }
    
  });

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });