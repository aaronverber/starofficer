ig.module( 
	'game.plugins.ui' 
)
.requires(

)
.defines(function(){
  UI = {
    addUIEventListeners: function(game){

      var starship = game.getEntityByName ( "player" );
      var planet = game.getEntityByName ( "planet001" );
      var starshipPosX = starship.pos.x;
      console.log(planet);
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
      
      $(".ui").append("<div id = planetName></div>");
      
      var planetPositionListener = planet.addListener("planetPosition", function(position){
        $("#planetName").css({
        "position" : "fixed",
        "color" : "#fffff3",
        "text-align" : "center",
        "left" : (position.x+ 235)+"px",
        "top" : (position.y + 180)+"px",
        "font-size" : "30pt",
        "white-space" : "nowrap",
      });
})
      
      $("#planetName").text("JUPITER");
      
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