ig.module( 'game.levels.main' )
.requires( 'impact.image','game.entities.planet','game.entities.starship' )
.defines(function(){
LevelMain=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlanet",
			"x": 1644,
			"y": 584
		},
		{
			"type": "EntityStarship",
			"x": 1160,
			"y": 732
		}
	],
	"layer": [
		{
			"name": "bg_far_stars",
			"width": 5,
			"height": 5,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/bgfarstaratlas.png",
			"repeat": true,
			"preRender": false,
			"distance": "6",
			"tilesize": 512,
			"foreground": false,
			"data": [
				[2,3,4,5,6],
				[16,15,14,13,2],
				[12,11,10,9,3],
				[8,6,7,5,1],
				[16,6,3,4,9]
			]
		},
		{
			"name": "bg_close_stars",
			"width": 5,
			"height": 5,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/bgstaratlas.png",
			"repeat": true,
			"preRender": false,
			"distance": "3",
			"tilesize": 512,
			"foreground": false,
			"data": [
				[1,2,3,4,5],
				[6,11,16,3,6],
				[5,1,13,9,7],
				[1,3,8,4,7],
				[5,1,6,11,12]
			]
		},
		{
			"name": "collision",
			"width": 20,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 512,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelMainResources=[new ig.Image('media/bgfarstaratlas.png'), new ig.Image('media/bgstaratlas.png')];
});