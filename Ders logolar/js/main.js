const owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,
  items: 3,
  margin: 50,
  dotsContainer: ".dots",
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      margin: 300,
      items: 3,
    },
  },
});

// Go to the next item
$(".arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".arrow-left").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});

$(".dot").click(function () {
  owl.trigger("to.owl.carousel", [$(this).index(), 300]);
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const smallNav = document.querySelector(".small-nav");
const smallNavItems = document.querySelectorAll(".small-nav ul li a");

hamburgerMenu.addEventListener("click", function () {
  smallNav.classList.toggle("small-nav--active");
  document.body.classList.toggle("overflow-h");
});

smallNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    smallNav.classList.toggle("small-nav--active");
    document.body.classList.toggle("overflow-h");
  });
});
