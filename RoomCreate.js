//This file has all the data needed to load up a room.
/* Usage: var GameRoom1 = new GameRoom("Bathroom", "A tiny bathroom", 0, 320, 240, 'http://www.adventuregamestudio.co.uk/images/agsscreens.png');
Then execute the function by calling GameRoom1.Create(); - This will draw the Room with just a simple command.
*/

function GameRoom(RoomName, RoomDesc, id, XRes, YRes, RoomImage) {
    this.RoomName = RoomName;
    this.RoomDesc = RoomDesc;
    this.id = id;
    this.XRes = XRes,
    this.YRes = YRes,
    this.RmImg = RoomImage;
    this.Create = function(){
           document.getElementById("StartRoomLoad").innerHTML += "<canvas id='RoomBackground' width='" + XRes + "' height='" + YRes + "'></canvas>";      
    LoadRoomBackground(this.RmImg);                        
    };
}
    function LoadRoomBackground(RoomImage){
                  // load image from data url
        var canvas = document.getElementById('RoomBackground');
      var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
      };
      imageObj.src = RoomImage;
        };



