/*UI Functions will be added here */
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
