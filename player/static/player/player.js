// Function that creates list with song objects from django database
// songsObjsString variable is created in <head> section, in templateand
// and contains all data in one string: "[{...},{...},{...}]"
function createObjList() {
  const listWithObjsString = songsObjsString;

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