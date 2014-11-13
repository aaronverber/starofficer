ig.module(
	'game.entities.enemyStarship'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityEnemyStarship = ig.Entity.extend({
		size: {x: 225, y:79},
		animSheet: new ig.AnimationSheet('media/enemystarship.png', 225, 79),
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		
		
		init: function(x,y, settings){
			this.addAnim('idle', 1,[0]);
			this.parent(x,y, settings);
		}
	});
});