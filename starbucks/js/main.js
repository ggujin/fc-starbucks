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