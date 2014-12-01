ig.module(
	'game.entities.bullet'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityBullet = ig.Entity.extend({
		size: {x: 10, y: 10},
		thrust: 300,
		animSheet: new ig.AnimationSheet('media/bullet.png', 10, 10),
		lifetime: 200,
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		
		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [0]);
			var player = ig.game.getEntitiesByType(EntityStarship)[0];
			var angle = player.anims.idle.angle;
			var thrust = this.thrust;
			this.maxVel.x = 1000;
      this.maxVel.y = 1000;
			this.vel.x = (Math.cos(angle-(Math.PI/2)) * thrust);
			this.vel.y = (Math.sin(angle-(Math.PI/2)) * thrust);
		},
		
		update: function(){
			this.parent();
			this.lifetime -= 1;
			if(this.lifetime === 0){
				this.kill();
			};
		},
		
		check: function(other){
  		other.receiveDamage(100,this);
  		this.kill();
  		this.parent();
}
		
	});
});