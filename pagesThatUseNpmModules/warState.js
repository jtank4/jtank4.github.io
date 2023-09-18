const WorldState = require("warframe-worldstate-parser");
const webReq = new XMLHttpRequest();
var pageState = {ready:false};
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
webReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
webReq.setRequestHeader('Access-Control-Allow-Origin', '*');
webReq.send();
fetch("https://content.warframe.com/dynamic/worldState.php", {method: "get", headers: {"X-Requested-With": "XMLHttpRequest", "Access-Control-Allow-Origin": "*"}, mode:"cors"}).then(data => console.log(data));