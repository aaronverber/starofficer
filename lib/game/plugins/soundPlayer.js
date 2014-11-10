ig.module( 
	'game.plugins.soundPlayer' 
)
.requires(

)
.defines(function(){
 SoundPlayer = {
   
   addSoundEventListeners: function(game){
     var starship = getEntityByName( "player" );  
     var brakesSound = new ig.Sound('media/bingbong001.*');
     var playBrakesSound = starship.addListener("brakes", function(brakes){
       brakesSound.play();
     });
   }
 };
})