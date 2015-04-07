(function(){
	var toggle = document.getElementsByClassName("toggle")[0];
	var clock = document.getElementsByClassName("clock")[0];
	var menu = document.getElementsByClassName("menu")[0];

	toggle.addEventListener("click", function(){
		switch(toggle.classList.contains("open"))
		{
			case true:
				toggle.classList.remove("open");
				menu.classList.remove("open");
				clock.classList.remove("open");

			break;
			case false:
				toggle.classList.add("open");
				menu.classList.add("open");
				clock.classList.add("open");							
			break;
		}
	});
})();