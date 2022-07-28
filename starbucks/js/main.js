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
      display: 'none'
    });
  }
}, 300));
// _.throttle(사용하고자하는 함수, 시간추가ms단위로)