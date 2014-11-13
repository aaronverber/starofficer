ig.module(
	'game.entities.bullet'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityBullet = ig.Entity.extend({
		size: {x: 10, y: 10},
		thrust: 100,
		animSheet: new ig.AnimationSheet('media/bullet.png', 10, 10),
		health: 100,
		
		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idle', 1, [0]);
			this.ready();
		},
		
		ready: function(){
				var player = ig.game.getEntitiesByType(EntityStarship)[0];
				var angle = player.anims.idle.angle;
				var thrust = this.thrust;
				this.vel.x = (Math.cos(angle-(Math.PI/2)) * thrust);
				this.vel.y = (Math.sin(angle-(Math.PI/2)) * thrust);
		},
		
// 		update: function(){
// 			this.health -= 1;
// 		}
		
	});
});