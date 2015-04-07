var Clock = (function(){
	/*
	** @param dimensions
	*/
	var w = 320;
	var h = 270;
	var r = h/2;

	var red = "#990000";
	var black = "#000000";
	var gray = "#999999"
	var white = "#FFFFFF";


	/*
	** @param canvas
	*/
	var canvas = document.getElementById("clock");
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.translate(w/2, h/2);
	var rect = canvas.getBoundingClientRect();

	/*
	** @param debug
	*/
	var debug = false;

	/*
	** @params hours, minutes, seconds
	*/
	var date;
	var hours;
	var minutes;
	var seconds;
	var deg;

	/*
	** @method draw
	*/
	function draw()
	{
		context.globalAlpha=0;
		context.clearRect(-w/2,-h/2,w,h);
		context.fillStyle = white;
        context.fillRect(-w/2,-h/2,w,h);
        context.globalAlpha=1;

        face();
		time();
		clock();
	}

	function face()
	{
		context.beginPath();
		context.arc(0, 0, r-10, 0, 2 * Math.PI, false);
		context.fillStyle = white;
		context.fill();
		context.lineWidth = 10;
		context.strokeStyle = black;
		context.stroke();		
	}

	function time()
	{
		date = new Date();
		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();
	}

	function clock()
	{
		
		seconds = (seconds*Math.PI/30);
		hand(seconds, r*0.8, 10, red);	
		
		minutes = (minutes*Math.PI/30)+(seconds*Math.PI/(30*60));
		hand(minutes, r*0.6, 16, black);	

		hours %= 12;
		hours = (hours*Math.PI/6)+(minutes*Math.PI/(6*60))+(seconds*Math.PI/(360*60));
		hand(hours, r*0.4, 16, black);
	}

	function hand(deg, length, stroke, color)
	{
	    context.beginPath();
	    context.lineWidth = stroke;
	    context.lineCap = "round";
	    context.moveTo(0,0);
	    context.rotate(deg);
	    context.lineTo(0, -length);
	    context.strokeStyle = color;
	    context.stroke();
	    context.rotate(-deg);
	}

	return {
		draw:function(){draw();}
	}
})();

function draw()
{
	Clock.draw();
	setInterval(function(){Clock.draw();},1000);
}


document.addEventListener('DOMContentLoaded', draw, false);