/*This is a class file that creates a Character Player or NPC.*/

function character(){
    this.name = '';
    this.alias = '':
    this.id = '';
    this.sex = '';  //male or female
    this.gender = ''; //He or She
    this.article = ''; //His or hers.
    this.visible = '';
    this.roomStart = '';
    this.playerCharacter = '';
    this.playableCharacter= '';
    this.description = '';
    this.synonyms = [];
    this.inventory = [];
    this.conversationEnabled = '';
    
}

character.prototype.rename = function(name){
//static
    this.name = name;
}

character.prototype.redescribe = function(description){
    //static
    this.description = description;
   }
   
   /*The next few prototypes need to be created at engine compilation
   
character.prototype.look = function(object){
   }

character.prototype.talk = function(object){
   }    
   */
