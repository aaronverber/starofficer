ig.module( 
	'game.plugins.ui' 
)
.requires(

)
.defines(function(){
  UI = {
    addEventListeners: function(game){
      var starship = game.getEntityByName ( "player" );
      
      console.log("Add Event Listeners");
      var velocity = starship.addListener("velocity", function(velocity){
        $("#velocity").text((Math.ceil(velocity.x)) + ", " + (Math.ceil(velocity.y)))
      });
      var brakes = starship.addListener("brakes", function(brakes){
        $("#brakes").text(brakes)
      });
      var noBrakes = starship.addListener("noBrakes", function(noBrakes){
        $("#brakes").text(noBrakes)
      });
    }
  };
})