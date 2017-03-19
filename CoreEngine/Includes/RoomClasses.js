
function room(){
    this.name = '';
    this.alias = '':
    this.id = '';
    this.visible = '';
    this.autodescription = '';
    this.synonyms = [];
    this.inventory = [];
    this.image = '';
    this.crawlwalls = '';
    this.crawlceiling = '';
    this.hint = '';
    this.exiteast = '';
    this.exitwest = '';
    this.exitnorth = '';
    this.exitsouth = '';
    this.exitnortheast = '';
    this.exitnorthwest = '';
    this.exitsouthwest = '';
    this.exitsoutheast = '';
    this.exitup = '';
    this.exitdown = '';
    this.lockeast = '';
    this.lockwest = '';
    this.locknorth = '';
    this.locksouth = '';
    this.locknortheast = '';
    this.locknorthwest = '';
    this.locksouthwest = '';
    this.locksoutheast = '';
    this.lockup = '';
    this.lockdown = '';
    this.lockeastmsg = '';
    this.lockwestmsg = '';
    this.locknorthmsg = '';
    this.locksouthmsg = '';
    this.locknortheastmsg = '';
    this.locknorthwestmsg = '';
    this.locksouthwestmsg = '';
    this.locksoutheastmsg = '';
    this.lockupmsg = '';
    this.lockdownmsg = '';
    
    
}

room.prototype.rename = function(name){
//static
    this.name = name;
}

room.prototype.redescribe = function(description){
    //static
    this.description = description;
   }
   
   /*The next few prototypes need to be created at engine compilation
   
room.prototype.look = function(object){
   }
room.prototype.talk = function(object){
   }    
   */
