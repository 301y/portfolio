const fruits = [
  "🤓💡",
  "INTJ-A",
  "🤸‍♀️성장하는",
  "디테일한",
  "계획적인🎮🧸",
  "👨‍💻하는",
];
let currentIndex = 0;

function displayFruit() {
  document.getElementById("fruit-text").textContent =
    fruits[currentIndex];
  currentIndex = (currentIndex + 1) % fruits.length;
}

setInterval(displayFruit, 2500);

$(function () {
  // popup
  $('.bg2 a').click(function () {
    $('.pop1').fadeIn();
  });
  $('.bg3 a').click(function () {
    $('.pop2').fadeIn();
  });

  $('.popup a').click(function () {
    $('.popup').fadeOut();
  });

  // resume
  $(".resume li").click(function(){
		$(this).children("div").slideToggle()
		$(this).siblings().children("div").slideUp();
		$(this).toggleClass("on").siblings().removeClass("on")
	});

  // chart
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 4,
    lineCap: 'butt',
    barColor: '#333',
    trackColor: "#00000013",
    size: 250,
    animate: 1000
  });
});


// portfolio slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  // scroll overflow
  watchOverflow: true,
  on: {
    slideChange: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = false;
        swiper.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    }
  },

  // responsive
  breakpoints: {
    999: {
      slidesPerView: 1.5,  //브라우저가 1024보다 클 때
    }
  }
});


