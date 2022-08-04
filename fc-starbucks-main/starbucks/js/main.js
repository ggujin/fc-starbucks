const searchEl = document.querySelector('.search'); // class가 search인 요소를 검색 // document= html자체다.
const searchInputEl = searchEl.querySelector('input'); // document가 아니라 searchEl에서 요소를 찾음. 더 효율적으로 검색

searchEl.addEventListener('click', function () { // 익명함수 = 핸들러
  searchInputEl.focus(); // js를 통해 포커스가 가능한 input요소들한테 focus강제 적용 
});

// 클래스 넣기
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); // 특정 요소에 class정보를 가지고 있는 객체에서 어떤 클래스 내용을 add 하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색'); // 지정, html속성(Attribute)을 지정한다. // input 속성, 문자데이터 추가
                            //1인수 : 속성이름, 2인수: 속성에들어갈 실제 값.
});

//포커스 해제, 클래스 빼기
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

//window.. 화면 자체 에 scroll 이벤트를 추가하여 스크롤 되면 익명함수를 실행하겠다.
// window.addEventListener('scroll', function () { // 핸들러 익명함수 
//   console.log('scroll!');
// });
// 스크롤 할 때, 0.3초 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지 
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); // 지금 화면이 몇픽셀 정도에 있는지
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간(s단위), 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0, // 시각적으로만 없애줌 
      display: 'none'
    });
  } else {
    // 배지 보여주기 (이하일 때)
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(사용하고자하는 함수, 시간추가ms단위로)


// 순차적 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(s단위), 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// 수직 슬라이드 Swiper
 // 실행.. new-> 생성자, 클래스 // new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', { // 인수,,와 옵션을 {} 객체데이터 형식으로
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 기본값 이므로 따로 명시할 필요 없음
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  sapceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 얘 안넣어주면 처음 부분과 마지막부분 비어있음
  autoplay: {
    delay: 5000 // 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 버튼
    nextEl: '.promotion .swiper-next'  // 다음 버튼
  }
});
// 다중 요소 슬라이드
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// 요소 슬라이드 - 슬라이드 영역 토글 toggle-promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // ture로 재할당 가능 // 안숨겨져있다. 보이고있다. 
promotionToggleBtn.addEventListener('click', function () { 
  // 토글버튼을 클릭하면 보여주거나 숨겨주는 로직, 지속적으로 반대값으로 반환하는 로직
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // ture 숨김 처리!
    promotionEl.classList.add('hide'); // 프로모션 슬라이드 만든 부분에 요소를 안보이게 hide처리
  } else {
    // 아니면, 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 유튜브 영상배경 - 반복애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간(초단위), 옵션);
  // gsap.to(selector, 1, {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간(초)
    { // 옵션
      y: size,
      repeat: -1, // 무한반복, javascript라이브러리에서 지원하는.. -1
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, 1.5)//초
    }
  );
}
floatingObject('.floating1', 1, 15); // (애니메이션처리할 요소, 딜레이(초단위), 위아래움직이는범위(px))
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// FIND THE STORE
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) { // 감시하려는 요소들에 
  new ScrollMagic
    .Scene({ // 감시하는 라이브러리의 옵션을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할, section.scroll-spy붙어있는 요소들 중 하나를 할당.
      triggerHook: .8 // 뷰포트 0~1, 0.8쯤에 보여짐 여부 감시할 요소가 걸리면 트리거 실행
    })
    .setClassToggle(spyEl, 'show') // 넣었다뺏다제어(클래스를 토글할 요소지정, 토글할 클래스 이름)
    .addTo(new ScrollMagic.Controller()) // 컨트롤러개념 추가 위한.
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022