ig.module(
	'game.entities.location'
)
.requires(
	'impact.entity'
)
.defines(function(){
  var soundPlayed = false;
  var sound = new ig.Sound('media/bingbong001.ogg');
	EntityLocation = ig.Entity.extend({
    name: "planet001",
    size: {x: 400, y: 400},
		animSheet: new ig.AnimationSheet('media/planetmodel.png', 400, 400),
		visited: false,

		init: function(x, y, settings){
			this.parent(x, y, settings);
			
			
			
			this.addAnim('idle', 1, [0]);
		},
    
    update: function(game){

      var player = ig.game.getEntityByName("player");
      if(this.distanceTo(player) <= 225 && soundPlayed === false){
				this.visited = true;
				this.fire("locationVisited");
        soundPlayed = true;
        sound.play();
				$(".locationName").toggleClass("locationName-changed");
				$(".locationWelcome").delay(700).fadeIn(500);
      }
      else if(this.distanceTo(player) > 225){
        soundPlayed = false;
				$(".locationName").removeClass("locationName-changed");
				$(".locationWelcome").fadeOut(500);
      }
      
      this.fire("locationPosition", {x: (this.pos.x - ig.game.screen.x), y: (this.pos.y-ig.game.screen.y)});
      
			this.parent();
		},
    
 
	});

});