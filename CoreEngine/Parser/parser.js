/*This will parse the command line input received by the user/player and will parse the commands, useless words and objects and Eval
the correct function to perform. myActionArray and myStringArray act as a container for the command words. myIgnoredWods and myUselessWords
act as a container for words to ignore such "With, on, for, etc...". consoleString & cmdSTR would be the complete command entered by the user.
textCMD will the command word that was parsed(EG: Look, Talk, etc...). objectTXT grabs the object that we are performing the action on. */

/*A sample call to this function would be: ParsePlayerInput('look,Talk,Walk,Take', 'the,At,On', 'Look at the Shiny Lamp')"; 
A way to also do a "give" and "use with" or "put on" without ignoring the words needed or to separate the objects. That will 
be on the next edit */
function ParsePlayerInput(myActionArray, myIgnoredWords, delimeterWords, consoleString) {
	
  
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
		
			for (var i = 0; i < myStringArray.length; i++) {
   			//When it picks a particular word up it will save it.
				if(myStringArray[i] === tokens[0])
					{
						textcmd = tokens[0];
					}
									}
//replace the command word and unnecessary other words in the text
				if(textcmd)
						{
							tokens.shift();
							for (var t = 0; t < myUselessWords.length; t++)
								{
					
									var tokenIdx = tokens.indexOf(myUselessWords[t]);
									if(tokenIdx > -1) tokens.splice(tokenIdx,1);
								}
				var objecttxt = tokens.join(' ');
        
        delimetedWords = objecttxt.replace(/\Wand\W/g, delimeterWords);
        delimetedWords = delimetedWords.split(/\Won\W/g);
  
  delimetedWords = delimetedWords.toString();
  
	var FdelimetedWords = new Array();
	FdelimetedWords = delimetedWords.split(",");
        
				objecttxt = objecttxt.replace(/ /g, "_");
        
           
	
     
        
				return objecttxt + "_" + textcmd + "(" + FdelimetedWords + ")";
						}                                                     	     
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
