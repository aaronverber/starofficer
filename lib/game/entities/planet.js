ig.module(
	'game.entities.planet'
)
.requires(
	'impact.entity'
)
.defines(function(){
  var soundPlayed = false;
  var sound = new ig.Sound('media/bingbong001.ogg');
	EntityPlanet = ig.Entity.extend({
    name: "planet001",
    size: {x: 400, y: 400},
		animSheet: new ig.AnimationSheet('media/planetmodel.png', 400, 400),

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0]);
		},
    
    update: function(game){

      var player = ig.game.getEntityByName("player");
      console.log(this.pos.x - ig.game.screen.x);
      if(this.distanceTo(player) <= 225 && soundPlayed === false){
        soundPlayed = true;
        console.log(soundPlayed);
        sound.play();
      }
      else if(this.distanceTo(player) > 225){
        soundPlayed = false;
      }
      
      this.fire("planetPosition", {x: (this.pos.x - ig.game.screen.x), y: (this.pos.y-ig.game.screen.y)});
      
			this.parent();
		},
    
 
	});

});