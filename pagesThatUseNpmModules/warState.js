const WorldState = require("warframe-worldstate-parser");
const webReq = new XMLHttpRequest();
var pageState = {"ready":false};
var warState;

function readyPage(e){
	console.log(webReq)
	if(webReq.status == 200){
		warState= new WorldState(webReq.responseText);
		console.log(ws.alerts[0].toString());
		pageState.ready = true;
	}
}

webReq.onreadystatechange = readyPage;
const warframeStateUrl = "https://content.warframe.com/dynamic/worldState.php";
webReq.open("GET", warframeStateUrl);
fetch("http://content.warframe.com/dynamic/worldState.php").then(data => console.log(data));