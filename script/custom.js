const fruits = [
  "🤓💡",
  "🤸‍♀️성장하는",
  "디테일한",
  "무한대♾️",
  "계획적인✍"
];
let currentIndex = 0;

function displayFruit() {
  document.getElementById("fruit-text").textContent =
    fruits[currentIndex];
  currentIndex = (currentIndex + 1) % fruits.length;
}

setInterval(displayFruit, 2300);

$(function () {


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
    size: 300,
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


document.addEventListener("DOMContentLoaded", function() {
  const mouseElement = document.getElementById("mouseElement");
  
  // 애니메이션 완료 후 display: none으로 변경
  setTimeout(() => {
    mouseElement.style.display = "none";
  }, 3800); // 1.5초 애니메이션 + 2.5초 대기 = 4초
});





 // 리스트 클릭 이벤트 핸들러
 const links = document.querySelectorAll(".list a");
 links.forEach((link, index) => {
   link.addEventListener("click", (e) => {
     e.preventDefault(); // 기본 링크 동작 막기
     swiper.slideTo(index); // 해당 인덱스의 슬라이드로 이동
   });
 });

 // 슬라이드 변경 이벤트 핸들러
 swiper.on("slideChange", function () {
   // 현재 슬라이드 인덱스 가져오기
   const currentIndex = swiper.activeIndex;

   // 리스트 항목 활성화 상태 변경
   links.forEach((link, index) => {
     if (index === currentIndex) {
       link.classList.add("active");
     } else {
       link.classList.remove("active");
     }
   });
 });