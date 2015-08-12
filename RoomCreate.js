//This file has all the data needed to load up a room.
/* Usage: var GameRoom1 = new GameRoom("Bathroom", "A tiny bathroom", 0, 320, 240);
Then execute the function by calling GameRoom1.SetRoomSize or GameRoom1.LoadRoomBackground, etc..
*/

function GameRoom(RoomName, RoomDesc, id, XRes, YRes, RoomImage) {
    this.RoomName = RoomName;
    this.RoomDesc = RoomDesc;
    this.id = id;
    this.XRes = XRes,
    this.YRes = YRes,
    this.RmImg = RoomImage;
    this.SetRoomSize = function(){
           document.getElementById("StartRoomLoad").innerHTML += "<canvas id='RoomBackground' width='" + XRes + "' height='" + YRes + "'></canvas>";      
                            },
    this.LoadRoomBackground = function(){
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
      
      
 




