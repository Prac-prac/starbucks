 // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  // 아래 유튜브 제어 자바스크립트 라이브러리가 밑 3번의 함수 찾음
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    //<div id="player">로 지정한 id 속성값 
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8',
      playerVars: {
          autoplay: true, 
          loop: true, 
          playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 id 목록
      },
      events: {
          //영상이 준비되면
          onReady: function(event){
            event.target.mute(); //음소거
          }
      }
    });
  }