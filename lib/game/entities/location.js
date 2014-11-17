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
      if(this.distanceTo(player) <= 235 && soundPlayed === false){
				player.vel.x = 0;
				player.vel.y = 0;
				player.friction.x = 100;
				player.friction.y = 100;
				player.maxVel.x = 40;
				player.maxVel.y = 40;
				this.visited = true;
				this.fire("locationVisited");
        soundPlayed = true;
        sound.play();
				console.log("played sound?");
				$(".locationName").toggleClass("locationName-changed");
				$(".locationWelcome").delay(700).fadeIn(500);
      }
      else if(this.distanceTo(player) > 235){
				player.friction.x = 0;
				player.friction.y = 0;
				player.maxVel.x = 200;
				player.maxVel.y = 200;
        soundPlayed = false;
				$(".locationName").removeClass("locationName-changed");
				$(".locationWelcome").fadeOut(500);
      }
      
      this.fire("locationPosition", {x: (this.pos.x - ig.game.screen.x), y: (this.pos.y-ig.game.screen.y)});
      
			this.parent();
		},
    
 
	});

});