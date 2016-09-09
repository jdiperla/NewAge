/*This will parse the command line input received by the user/player and will parse the commands, useless words and objects and Eval
the correct function to perform. myActionArray and myStringArray act as a container for the command words. myIgnoredWods and myUselessWords
act as a container for words to ignore such "With, on, for, etc...". consoleString & cmdSTR would be the complete command entered by the user.
textCMD will the command word that was parsed(EG: Look, Talk, etc...). objectTXT grabs the object that we are performing the action on. */

/*A sample call to this function would be: ParsePlayerInput('look,Talk,Walk,Take', 'the,At,On', 'Look at the Shiny Lamp')"; 
A way to also do a "give" and "use with" or "put on" without ignoring the words needed or to separate the objects. That will 
be on the next edit */
function ParsePlayerInput(myActionArray, myIgnoredWords, delimeterWords, consoleString) {

//make all input lowercase so all cases match
	var myStringArray = myActionArray;
		myStringArray = myStringArray.toLowerCase();
		myStringArray = myStringArray.split(",");
		var myUselessWords = myIgnoredWords;
	
		myUselessWords = myUselessWords.toLowerCase();
		myUselessWords = myUselessWords.split(",");
	
		var consoleString = consoleString;
		consoleString = consoleString.toLowerCase();
	
		var tokens = consoleString.trim().split(' ');
		var textcmd = '';

//find the first word of the input, which will be the command word
			for (var i = 0; i < myStringArray.length; i++) {
   			//When it picks a particular word up it will save it.
				if(myStringArray[i] === tokens[0])
					{
						textcmd = tokens[0];
					}
									}
//

if(textcmd)
{
//this removes the command word "textcmd" from the input string
consoleString = consoleString.replace(textcmd, "");

}

//Remove the ignored words now
myIgnoredWords = myIgnoredWords.toLowerCase();
var a = myIgnoredWords.split(","),
    i;

for (i = 0; i < a.length; i++) {
var replacedWord = " " + a[i] + " ";

    consoleString = replaceAll(consoleString, replacedWord, " ");
  
    
}

//This will replace delimeter words such as on/and/with or whatever is described with a comma to make it into an array
delimeterWords = delimeterWords.toLowerCase();
var a = delimeterWords.split(","),
    i;

for (i = 0; i < a.length; i++) {
var replacedWord = " " + a[i] + " ";

    consoleString = replaceAll(consoleString, replacedWord, ",");
  
    
}

//replace white space commands with an underscore after trimming the whitespaces at either end
consoleString = consoleString.trim();
consoleString = replaceAll(consoleString, " ", "_");
      return textcmd + "(" + consoleString + ")";


}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}   //end function ParsePlayerInput


function ParsePlayerDoubleClick() {
	$(document).ready(function() {

    var ObjDblClk = $('objdc');
    ObjDblClk.css({ cursor: 'pointer' });

    ObjDblClk.dblclick(function(e) {
        var range = window.getSelection() || document.getSelection() || document.selection.createRange();
        var word = $.trim(range.toString());
        if(word != '') {
        	if CurUIType == "bclick" {
        		$('#DIV_ShowButtonClick').show();		
        		CurSelectedItem = word;
        	}
            
        }
        range.collapse();
        e.stopPropagation();
    });
    
});
}
}
