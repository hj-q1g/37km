// 音楽再生
var players = document.getElementsByClassName("audio_player");
var currentAudio = null;

function updatePlayButtonIcon() {
  for (var i = 0; i < players.length; i++) {
    var playButton = players[i].querySelector(".playbutton");
    var audio = players[i].querySelector("audio");

    if (currentAudio && currentAudio !== audio) {
      playButton.innerHTML = '<i class="ph-duotone ph-music-notes"></i>';
    } else {
      if (audio.paused) {
        playButton.innerHTML = '<i class="ph-duotone ph-music-notes"></i>';
      } else {
        playButton.innerHTML = '<i class="ph-fill ph-music-notes"></i>';
      }
    }
  }
}

for (var i = 0; i < players.length; i++) {
  (function(index) {
    var playButton = players[index].querySelector(".playbutton");
    var stopButton = players[index].querySelector(".stopbutton");
    var loopButton = players[index].querySelector(".loopbutton");
    var audio = players[index].querySelector("audio");

    playButton.addEventListener("click", function() {
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause(); // 他の曲が再生中なら停止する
      }

      if (audio.paused) {
        audio.play();
        currentAudio = audio; // 現在のオーディオを更新
      } else {
        audio.pause();
      }

      updatePlayButtonIcon();
    });

    // ページ読み込み時にボタンアイコンを更新
    updatePlayButtonIcon();
  })(i);
}
