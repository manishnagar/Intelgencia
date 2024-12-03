$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,  // Infinite loop
    margin: 5,  // Space between items
    nav: false,  // Disable default navigation buttons
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Trigger carousel previous on left-arrow click
  $('#customPrevBtn').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
  });

  // Trigger carousel next on right-arrow click
  $('#customNextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
  });

  
});


// first section slider

    $(".slider-heading-carousel").owlCarousel({
      items: 1, // Show one heading at a time
      loop: true, // Infinite loop
      autoplay: true, // Automatically change heading
      autoplayTimeout: 3000, // 3 seconds per heading
      dots: true, // Hide dots (optional)
      nav: false, // Hide next/prev buttons (optional)
    });

// quick enquiry toggle
$('.toggle').click(function(){
  $('.sidebar-contact').toggleClass('active')
  $('.toggle').toggleClass('active')
})
