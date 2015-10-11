/*This will parse the command line input received by the user/player and will parse the commands, useless words and objects and Eval
the correct function to perform. myActionArray and myStringArray act as a container for the command words. myIgnoredWods and myUselessWords
act as a container for words to ignore such "With, on, for, etc...". consoleString & cmdSTR would be the complete command entered by the user.
textCMD will the command word that was parsed(EG: Look, Talk, etc...). objectTXT grabs the object that we are performing the action on. */

function Parse(var myActionArray[], var myIgnoredWords[], var consoleString) {
		var myStringArray = myActionArray[]; //pick up list of possible actions
		var arrayLength = myStringArray.length;
		
                   for (var i = 0; i < arrayLength; i++) {
                      //When it picks a particular command word at the beginning up it will save it
                      var cmdSTR = consoleString;
                      var textCMD = cmdSTR.split(' ')[0];
                      //replace the command word and unnecessary other words in the text so you can find the object
                             
                             if (textCMD == myStringArray[i]){
                                       var objectTXT = cmdSTR;
                                       objectTXT = cmdSTR.replace(textCMD, "");
                                       var myUselessWords =myIgnoreWords[];
                                       var uselessLength = myUselessWords.length;
                                            
                                            for (var t = 0; t < uselessLength; t++) {
                                                  var uselessCollection = [];
                                                  uselessCollection.push = t;
                                                  objectTXT = objectTXT.replace(myUselessWords[t], "");
                                                  return textCMD + "_" + objectTXT + "()"; 
                                                                                     }
                                                                                     
                                                                 }
                                                                 
                                                      	     }
                                                      	     
}   //end function parse
