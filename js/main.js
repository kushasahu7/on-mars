
//let marsO = new mars;
let core = new Cover()

core.start();
	// I want to run the time update and rendering every second
setInterval(function() {
	core.updateTime();
	core.render();
},1000*30);

setInterval(function() {
	core.updatePhoto()
	core.render();
},1000*60*1);