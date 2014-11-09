ig.module( 
	'game.plugins.ui' 
)
.requires(

)
.defines(function(){
  UI = {
    addEventListeners: function(game){

      var starship = game.getEntityByName ( "player" );
      var starshipPosX = starship.pos.x;
      console.log(ig.system.width/2);
      $(".ui").append("<div id= brakes></div>");
            
      $("#brakes").css({
        "text-align" : "center",
        "position": "relative",
        "width" : starship.size.x*2,
        "color" : "#fffff3",
        "background-color" : "#9f1d1d",
        "left" : (ig.system.width/2 - (starship.size.x/2))+"px",
        "top" : (ig.system.height/2 + (starship.size.y))+"px",
        "font-size" : "10pt"
      }).text("BRAKES");
      
      
      var velocity = starship.addListener("velocity", function(velocity){
        $("#velocity").text((Math.ceil(velocity.x)) + ", " + (Math.ceil(velocity.y)))
      });
      var brakes = starship.addListener("brakes", function(brakes){
        $("#brakes").show();
      });
      var noBrakes = starship.addListener("noBrakes", function(noBrakes){
        $("#brakes").hide();
      });
    }
  };
})