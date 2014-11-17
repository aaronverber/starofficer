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
		size: {x: 52, y: 44},
    thrust: 40,
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,

		animSheet: new ig.AnimationSheet('media/scout001.png', 52, 44),

		init: function(x, y, settings){
			this.maxVel.x = 200;
      this.maxVel.y = 200;
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [0]);
		},

    update: function(){
			var direction = this.anims.idle.angle;
			if(ig.input.pressed('fire_forward')){
				ig.game.spawnEntity('EntityBullet', this.pos.x, this.pos.y);
			};
      
      var thrust = this.thrust;
      this.movement(thrust);
      this.fire("velocity", {x: this.vel.x, y: this.vel.y});
			this.parent();
		}
	});
  
  EntityStarship.inject(StarshipMovement);
  
});