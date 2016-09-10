/*Global functions for the engine to call and use at it's will 
*/

//Replace all instances of a text within the search(STR= string to search, FIND = String to look for, Replace = replacement string

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}   //end function ParsePlayerInput
