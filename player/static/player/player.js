let songId = 0;
let isPlaying = false;
let timer;
let songAudio = document.createElement('audio');

const songObjsList = JSON.parse(document.getElementById('songObjsList').textContent);

updateActiveSong(songId)

// Load audio file to 'songAudio' variable
function loadAudio(songId) {
  clearInterval(timer);
  slider.value = 0;
  title.innerHTML = songObjsList[songId].title;	
  author.innerHTML = songObjsList[songId].author;
  cover.src = songObjsList[songId].img;
	songAudio.src = songObjsList[songId].audio;
  songAudio.load();
  timer = setInterval(rangeSlider, 1000);
};


// Start/stop button function
function startPause() {
  if (isPlaying === false) {
    playSong();
  } else {
    pauseSong();
  };
};


// Play song
function playSong() {
  // songAudio.currentTime = 50;
  // console.log(songAudio.currentTime);
  songAudio.play();
  isPlaying = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
};


// Pause song
function pauseSong() {
	songAudio.pause();
	isPlaying = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
};


// Load and play next song
function nextSong() {
	if (songId < songObjsList.length - 1) {
		songId += 1;
		loadAudio(songId);
    updateActiveSong(songId);
    continuePlaying();
	} else {
		songId = 0;
		loadAudio(songId);
    updateActiveSong(songId);
    continuePlaying();
	};
};


// Load and play previous song
function previousSong() {
	if (songId > 0){
		songId -= 1;
		loadAudio(songId);
    updateActiveSong(songId);
    continuePlaying();
	} else {
		songId = songObjsList.length - 1;
		loadAudio(songId);
    updateActiveSong(songId);
    continuePlaying();
	};
};


// Check isPlaying value and don't change playing state
function continuePlaying() {
  if (isPlaying) {
    playSong();
  } else {
    pauseSong();
  };
};


// Load and play song from playlist
function playFromPlaylist(id) {
  songId = parseInt(id);
  loadAudio(songId);
  playSong();
  updateActiveSong(songId);
};


// Add unique class to the currently played song on playlist
function updateActiveSong(songId) {
  for (i=0; i < songObjsList.length; i++) {
    document.getElementById(i).classList.remove("now-playing");
  };
  document.getElementById(songId).classList.add("now-playing");
};


// Change slider position 
function changeDuration(rangeElement) {
  songAudio.currentTime = parseInt(songAudio.duration * rangeElement.value/100);
};


// Update slider position and play another song on the list
function rangeSlider() {
	let position = 0;
	if (!isNaN(songAudio.duration)) {
		position = songAudio.currentTime * (100 / songAudio.duration);
		slider.value = position;
  };
  if (songAudio.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (songId < songObjsList.length - 1) {
		  songId += 1;
		  loadAudio(songId);
		  playSong();
      updateActiveSong(songId);
    } else {
      songId = 0;
      loadAudio(songId);
      updateActiveSong(songId);
      isPlaying = false;
    };
	};
};