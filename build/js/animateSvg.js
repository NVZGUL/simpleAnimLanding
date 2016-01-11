
	var canvas = Snap("#Anim");
	var paper = canvas.g(), box;
	function animateSvg(){
		var element = paper.select("svg");
		var dashed_orbit1 = element.select("#_x31__dashed_orbit").transform("r90");
		var bbox = dashed_orbit1.getBBox();
		dashed_orbit1.animate({transform:"r180," + bbox.cx + ',' + bbox.cy},2000)
	}
	animateSvg();