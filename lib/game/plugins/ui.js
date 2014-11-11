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

			$(".ui").append("<div class = planetInfoText><div class = planetWelcome></div><div class = planetName></div><div class= planetIconRow></div><div class= planetDescription>Test</div></div>");

			var planetPositionListener = planet.addListener("planetPosition", function(position) {
				$(".planetInfoText").css({
					"width": "400px",
					"height": "400px",
					"left": (position.x) + "px",
					"top": (position.y - 22) + "px",
				});
			});
			
			var planetVisitedList = planet.addListener("planetVisited", function(){
				$(".planetIconRow").delay(1000).fadeIn(500).html("<img src=media/treeicon.png height=30 width=30 alt=Earth-like>");
				$(".planetDescription").delay(1500).fadeIn(500).html("<p>Endor was a small forested moon orbiting the gas giant planet of Endor and was the farthest moon away from it. An enchanted world, Endor was notable for being the native home of the Ewoks.</p>");
				planet.visited = true;
			});

			$(".planetName").text("ENDOR");
			$(".planetWelcome").text("WELCOME TO DAMP");
			
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