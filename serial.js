var Serial = (function(){
	
	var ports = [];
	var ports_full = [];
	var port;

	var baudrates = [115200, 57600, 38400, 28800, 19200, 14400, 9600, 4800, 2400, 1200, 600, 300];
	var baudrate;

	var list;
	var port_list = document.getElementsByClassName("ports")[0];
	var baudrate_list = document.getElementsByClassName("baudrates")[0];	

	function get()
	{
		if(chrome.serial)
		{
			chrome.serial.getDevices(function(ps){
				for(var n = 0; n < ps.length; n++)
				{
					var p = ps[n].path.toString();
					ports_full.push(
						{
							id:n,
							long:p,
							short:p.slice(p.lastIndexOf("/")+1, p.length),
							selected:false
						}
					);
					ports.push(p.slice(p.lastIndexOf("/")+1, p.length));
				}
			})
		}
		else
		{
			ports.push("no ports");
		}

		setTimeout(function(){list();}, 1000);
	}

	function list()
	{
		list = '<li>' + ports.join('</li><li>') + '</li>';
		port_list.innerHTML += list;

		list = '<li>' + baudrates.join('</li><li>') + '</li>';
		baudrate_list.innerHTML += list;
	}

	get();
})();