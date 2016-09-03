//Global variables, definitions and functions

//These are for initial game settings
var GameName;
var GameDescription;

//Details for Game porting and use of Phonegap config.xml
var GameID;
var GameVersion;
var GameAuthor;
var GameAuthorEmail;
var iOSGamePkgName;
var WindowsPkgName;
var AndroidPkgName;


//These variables are for the games interactions, GUI and inventory

//var GameActions = new Array("Look","Take","Combine","Speak","Take Off","Put on","Punch","Kick","Lick","Taste","Smell","Push","Pull","Walk to","Talk to","Pick up", "Drop","Call","Fight","Read","Open","Close","What is","Turn on", "Turn off","Switch","Travel");
var GameActions = new Array();
//var SpecialGameActions = new Array("Use","Give");
var SpecialGameActions = new Array();
var CurrentCursorMode = "Look";
var DefaultCursorMode = "Look";
var PreviousCursorMode = "Look";
var SierraCurModeCycle = new Array(); // This is the area used to cycle through the cursor modes when right clicking, like in Sierra games
var SierraCurModeCurrent = 0; //This will define the Current cursor mode if Sierra Style Cursor Mode is chosen.
var SierraCurModeMax = 4; //The max number of cycles to go through to get at zero, starting from zero and counting up

//Defining the objects, characters and other functions.

function GameSprites(id, SpriteArray){
  this.SpriteArray = [SpriteArray];
  this.id = id;
}

  
