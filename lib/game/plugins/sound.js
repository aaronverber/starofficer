ig.module( 
	'game.plugins.sound' 
)
.requires(

)
.defines(function(){
 Sound = {
   
   addSoundEventListeners: function(game){
     var starship = getEntityByName( "player" );  
     var brakesSound = new ig.Sound('media/bingbong001.*');
     var playBrakesSound = starship.addListener("brakes", function(brakes){
       brakesSound.play();
     });
   }
 };
})