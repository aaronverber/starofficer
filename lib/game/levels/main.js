ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.planet','game.entities.starship' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlanet",
			"x": 748,
			"y": 192
		},
		{
			"type": "EntityStarship",
			"x": 364,
			"y": 160
		}
	],
	"layer": [
		{
			"name": "bg_far_stars",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/bgfarstaratlas.png",
			"repeat": true,
			"preRender": false,
			"distance": "6",
			"tilesize": 512,
			"foreground": false,
			"data": [
				[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,0,0,0,0],
				[16,15,14,13,2,7,4,8,3,6,10,5,12,11,14,0,0,0,0,0],
				[12,11,10,9,3,11,7,15,13,10,7,4,8,12,16,0,0,0,0,0],
				[8,6,7,5,1,2,3,4,7,10,14,7,15,16,7,0,0,0,0,0],
				[16,6,3,4,9,14,12,8,1,5,2,13,14,8,6,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "bg_close_stars",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/bgstaratlas.png",
			"repeat": true,
			"preRender": false,
			"distance": "3",
			"tilesize": 512,
			"foreground": false,
			"data": [
				[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,7,10,5,3],
				[6,11,16,3,6,14,12,0,12,4,8,3,5,10,15,16,4,12,11,2],
				[5,1,13,9,7,8,4,12,16,14,9,6,10,6,7,8,4,3,2,1],
				[1,3,8,4,7,5,15,5,1,2,3,4,0,0,0,0,0,0,0,0],
				[5,1,6,11,12,14,16,4,3,10,11,8,0,0,0,0,0,0,0,0],
				[16,12,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[15,11,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[14,10,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[13,9,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[9,13,3,1,6,11,16,2,7,12,4,7,10,13,2,3,7,6,11,16]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/bgfarstaratlas.png'), new ig.Image('media/bgstaratlas.png')];
});