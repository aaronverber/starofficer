ig.module(
	'game.entities.planet'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityPlanet = ig.Entity.extend({
		size: {x: 400, y: 400},

		animSheet: new ig.AnimationSheet('media/planetmodel.png', 400, 400),

		init: function(x, y, settings){
			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0]);
		},
    
    update: function(){
			this.parent();
		}
	});

});