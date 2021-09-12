let songAudio = document.createElement('audio');
let songId = 0;
let isPlaying = false;

const songObjsList = createObjList();

// document.getElementById(0).classList.add("now-playing");


// Function that creates list with song objects from django database
// songsObjsString variable is created in <head> section, in templateand
// and contains all data in one string: "[{...},{...},{...}]"
function createObjList() {
  const listWithObjsString = songObjsString;

  // Create list with strings containing objects: ["{...}","{...}","{...}"]
  let objsString = listWithObjsString.substring(listWithObjsString.indexOf("[") + 1, listWithObjsString.indexOf("]"));
  let objsArray = objsString.split("}, ");
  for (i = 0; i < objsArray.length - 1; i++) {
    objsArray[i] += "}";
  };

  // Change strings into objects
  let songObjs = [];
  for (i = 0; i < objsArray.length; i++) {
    songObjs.push(JSON.parse(objsArray[i].replace(/'/g, '"')))
  };

  return songObjs;
}


// Load audio file to 'songAudio' variable
function loadAudio(songId){
	songAudio.src = songObjsList[songId].audio;
  songAudio.load();

  title.innerHTML = songObjsList[songId].title;	
  artist.innerHTML = songObjsList[songId].author;
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
		playSong();
	} else {
		songId = 0;
		loadAudio(songId);
		playSong();
	};
};


// Load and play previous song
function previousSong() {
	if (songId > 0){
		songId -= 1;
		loadAudio(songId);
		playSong();
	} else {
		songId = songObjsList.length - 1;
		loadAudio(songId);
		playSong();
	};
};


// Load and play song from playlist
function playFromPlaylist(id) {
  songId = id;
  loadAudio(songId);
  playSong();
  // document.getElementsByClassName("now-playing")[0].classList.remove("now-playing");
  // document.getElementById(id).classList.add("now-playing");
}