const WorldState = require("warframe-worldstate-parser");
var pageState = {ready:false};
var warState;
const warStateArea = document.getElementById("dataArea");
const queryInput = document.getElementById("queryBox");
const calcButt = document.getElementById("calcButt");
const logArea = document.getElementById("logArea");

function addLog(str){
	logArea.value += str + " " + (new Date()).toString() + "\n";
}

function readyPage(e){
	if(warStateArea.value != ""){
		warState = new WorldState(warStateArea.value);
		//console.log(warState.archonHunt);
		//console.log(warState.duviriCycle);
		pageState.ready = true;
	}
	else{
		addLog("no text was copied into text field, not setting page as ready for query");
	}
}

function query(e){
	if(pageState.ready){
		console.log(warState[queryInput.value]);
		addLog(warState[queryInput.value]);
	}
	else{
		addLog("Copy text over first!");
	}
}

warStateArea.addEventListener("change", readyPage);
calcButt.addEventListener("click", query);