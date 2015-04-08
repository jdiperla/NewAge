//This file has all the data needed to load up a room.

//Initiates the canvas and resolution size of the background. 
function SetRoomSize(XRes, YRes) {
      document.getElementById("StartRoomLoad").innerHTML += "<canvas id='RoomBackground' width='" + XRes + "' height='" + YRes + "'></canvas>";      }
      
      //This next function will load the initial room image. 
function LoadRoomBackground(RmImg) {
var canvas = document.getElementById('RoomBackground');
        var context = canvas.getContext('2d');

        // load image from data url
        var imageObj = new Image();
        imageObj.onload = function() {
          context.drawImage(this, 0, 0);
        };

        imageObj.src = RmImg;
      }

function RmBgWalkPan() {
//This will pan the room for scrolling rooms when the player walks around. This happens at slow intervals using context.drawImage
//Have to figure out how to scroll other properties of the room with the panning such as characters, objects and hotspots, etc...
}
