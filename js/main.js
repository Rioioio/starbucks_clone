const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  // logic... 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

// Scroll 함수 !! gsap 사용
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY)
  if (window.scrollY > 500) {
  //  gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    // 버튼 보이기! 
    gsap.to('toTopEl', .2, {
      x : 0
    });
  } else {
    // 배지 보이기! 
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display: 'block'
    });
    // 버튼 숨기기! 
    gsap.to('toTopEl', .2, {
      x : 100,
    });
  }
}, 300));
// _.throttle(함수, 시간 )

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo : 0,
  });
});


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1)  * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper',{
 direction : 'vertical',
 autoplay : true,
 loop : true,
});

new Swiper('.promotion .swiper', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드
  spaceBetween : 10, // 슬라이드 사이 여백 =
  centeredSlides : true, // 1번 슬라이드가 정 가운데 나옴
  loop : true,
  // autoplay : {
  //   delay : 3000
  // }
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true, // 페이지 번호 요소 선택자 
  },

  navigation : {
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next',
  },
});
new Swiper('.awards .swiper',{
  // direction : 'horizantal',
  autoplay : true,
  loop : true,
  spaceBetween : 30, 
  slidesPerView : 5,
});







// PROMOTION 

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    // 숨김 처리! 
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리! 
    promotionEl.classList.remove('hide');
  }
});

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  // new + 함수 : 생성자 함수! 
  new ScrollMagic 
  .Scene({
    triggerElement : spyEl, 
    triggerHook: .8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

// 날짜 계산 

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  