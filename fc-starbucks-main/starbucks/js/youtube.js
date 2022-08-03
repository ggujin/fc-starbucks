// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', { // id로 지정해놓은 player값을 말함
    videoId: 'on09zv-ujyc', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'on09zv-ujyc' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) { // 객체데이터 내부에 함수데이터 할당 -> 메소드
        event.target.mute() // 음소거
      }
    }
  });
}