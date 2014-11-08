ig.module( 
	'game.plugins.ui' 
)
.requires(

)
.defines(function(){
  UI = {
    addEventListeners: function(game){
      
      var starship = game.getEntityByName ( "player" );
      var VelocityX = ig.game.addListener(starship, "velocityX", function(velocity){
        $("#velocity").text((Math.ceil(velocity.x)) + ", " + (Math.ceil(velocity.y)));

      })
    }
  };
      
})