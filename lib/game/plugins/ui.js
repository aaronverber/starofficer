ig.module(
		'game.plugins.ui'
	)
.requires(

)
.defines(function() {
	UI = {
		addUIEventListeners: function(game) {

			var starship = game.getEntityByName("player");
			var planet = game.getEntityByName("planet001");
			var starshipPosX = starship.pos.x;
			console.log(planet);

			$(".ui").append("<div class = planetInfoText><div class = planetWelcome></div><div class = planetName></div></div>");

			var planetPositionListener = planet.addListener("planetPosition", function(position) {
				$(".planetInfoText").css({
					"width": "400px",
					"height": "400px",
					"left": (position.x) + "px",
					"top": (position.y - 22) + "px",
				});
			})

			$(".planetName").text("ARRAKIS");
			$(".planetWelcome").text("WELCOME TO SUNNY");

			$("#brakes").css({
				"width": starship.size.x * 2,
				"left": (ig.system.width / 2 - (starship.size.x / 2)) + "px",
				"top": (ig.system.height / 2 + (starship.size.y * 1.5)) + "px",
			});

			var velocity = starship.addListener("velocity", function(velocity) {
				$("#velocity").text((Math.ceil(velocity.x)) + ", " + (Math.ceil(velocity.y)))
			});
			var brakes = starship.addListener("brakes", function(brakes) {
				$("#brakes").show();
			});
			var noBrakes = starship.addListener("noBrakes", function(noBrakes) {
				$("#brakes").hide();
			});
		}
	};
})