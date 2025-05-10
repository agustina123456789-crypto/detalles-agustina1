var audio = document.querySelector("audio");  
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Did I drive you away?", time: 4 },
  { text: "I know what you'll say", time: 10 },
  { text: "You say, 'Oh, sing one you know'", time: 13 },
  { text: "But I promise you this", time: 23 },
  { text: "I'll always look out for you", time: 30 },
  { text: "That's what I'll do", time: 39 },
  { text: "I say, oh", time: 45 },
  { text: "I say, oh", time: 60 },

];

let currentLineIndex = -1;

function updateLyrics() {
  var time = audio.currentTime;

  // Buscar la última línea cuyo tiempo ya pasó
  let nextIndex = lyricsData.findIndex((line, i) => time < line.time);

  let indexToShow = nextIndex === -1 ? lyricsData.length - 1 : nextIndex - 1;

  if (indexToShow !== currentLineIndex && indexToShow >= 0) {
    lyrics.innerHTML = lyricsData[indexToShow].text;
    lyrics.style.opacity = 1;
    currentLineIndex = indexToShow;
  }
}

setInterval(updateLyrics, 100);
