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
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,

		animSheet: new ig.AnimationSheet('media/scout001.png', 52, 44),

		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [0]);
			this.firingTimer = new ig.Timer();
			this.firingTimer.set(.25);
		},

    update: function(){
			var bulletOriginRotation = this.anims.idle.angle;
			var bulletOriginCenterX = this.pos.x + (this.size.x/2) - 5;
			var bulletOriginCenterY = this.pos.y + (this.size.y/2) - 5;
			var bulletOriginOffsetY = this.pos.y - (this.size.y/2) + 10;
			var bulletOriginX = bulletOriginCenterX + Math.cos(bulletOriginRotation) * (bulletOriginCenterX - bulletOriginCenterX) - Math.sin(bulletOriginRotation) * (bulletOriginOffsetY - bulletOriginCenterY);
			var bulletOriginY = bulletOriginCenterY + Math.sin(bulletOriginRotation) * (bulletOriginCenterX - bulletOriginCenterX) + Math.cos(bulletOriginRotation) * (bulletOriginOffsetY - bulletOriginCenterY);
			if(ig.input.state('fire_forward')){				
				if(this.firingTimer.delta() > 0){
					ig.game.spawnEntity('EntityBullet', bulletOriginX, bulletOriginY);
					this.firingTimer.set(.25);	
				}				
			};
      console.log(this.anims.idle.angle * Math.PI/180);
      var thrust = this.thrust;
      this.movement(thrust);
      this.fire("velocity", {x: this.vel.x, y: this.vel.y});
			this.parent();
		}
	});
  
  EntityStarship.inject(StarshipMovement);
  
});