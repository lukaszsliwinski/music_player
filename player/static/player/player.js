// Function that creates list with song objects from django database
// songsObjsString variable is created in <head> section, in templateand
// and contains all data in one string: "[{...},{...},{...}]"
function createObjList() {
  const listWithObjsString = songObjsString;

  // Create list with strings containing objects: ["{...}","{...}","{...}"]
  let objsString = listWithObjsString.substring(listWithObjsString.indexOf("[") + 1, listWithObjsString.indexOf("]"));
  let objsArray = objsString.split("}, ");
  for (i=0; i < objsArray.length - 1; i++) {
    objsArray[i] += "}";
  };

  // Change strings into objects
  let songObjs = [];
  for (i=0; i < objsArray.length; i++) {
    songObjs.push(JSON.parse(objsArray[i].replace(/'/g, '"')))
  };


  console.log(songObjs);

  document.getElementById("songObj").innerHTML = songObjs[1].title;
}


audioPlayer();
function audioPlayer() {
    var currentSong = 0;
    $("#playlist li:eq("+currentSong+")").addClass("current-song");
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#playlist li a").click(function(e) {
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function() {
        currentSong++;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}