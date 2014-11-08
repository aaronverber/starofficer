ig.module(
	'game.entities.starship'
)
.requires(
	'impact.entity',
  'game.starship-movement'
)
.defines(function(){
	EntityStarship = ig.Entity.extend({
    name: "player",
		size: {x: 50, y: 50},
    thrust: 40,
		collides: ig.Entity.COLLIDES.ACTIVE,

		animSheet: new ig.AnimationSheet('media/spaceshipbase.png', 50, 50),

		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [0]);
		},

    update: function(){
      var thrust = this.thrust;
      this.movement(thrust);
      ig.game.fire(this, "velocityX", {x: this.vel.x, y: this.vel.y});
			this.parent();
		}
	});
  
  EntityStarship.inject(StarshipMovement);
  
});