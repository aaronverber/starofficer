ig.module(
	'game.entities.spaceship'
)
.requires(
	'impact.entity'
)
.defines(function(){
	console.log("you'recute");
	EntitySpaceship = ig.Entity.extend({
		size: {x: 50, y: 50},
		collides: ig.Entity.COLLIDES.ACTIVE,

		animSheet: new ig.AnimationSheet('media/spaceshipbase.png', 50, 50),

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0]);
		}
	});

});