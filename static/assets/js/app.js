$(document).ready(function () {
  // $('.slider').slick({
  //     arrows:false,
  //     dots:true,
  //     appendDots:'.slider-dots',
  //     dotsClass:'dots',
  // });

  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  // Open mobile navigation
  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  // Close mobile navigation
  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  // Close mobile navigation when a list item is clicked
  const listItems = document.querySelectorAll('.mobile-nav ul li a');
  listItems.forEach(function (item) {
    item.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });
});
