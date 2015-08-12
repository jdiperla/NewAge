//This file has all the data needed to load up a room.

//Initiates the canvas and resolution size of the background. 
var GameRoom = {
    RoomName: "",
    RoomDesc : "",
    id       : 0,
    XRes     : 320,
    YRes     : 240,
    SetRoomSize : function(){
           document.getElementById("StartRoomLoad").innerHTML += "<canvas id='RoomBackground' width='" + XRes + "' height='" + YRes + "'></canvas>";      
                            },
    LoadRoomBackground : function(){
          var canvas = document.getElementById('RoomBackground');
        var context = canvas.getContext('2d');

        // load image from data url
        var imageObj = new Image();
        imageObj.onload = function() {
          context.drawImage(this, 0, 0);
        };

        imageObj.src = RmImg;
      }
    };                            
      
 




