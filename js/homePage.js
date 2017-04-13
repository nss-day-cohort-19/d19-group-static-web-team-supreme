
var indexProduct = document.getElementById("indexProduct");
var indexMission = document.getElementById("indexMission");
var indexTeam = document.getElementById("indexTeam");
var indexContact = document.getElementById("indexContact");

indexProduct.addEventListener("mousedown", moveProduct);
indexMission.addEventListener("mousedown", moveMission);
indexTeam.addEventListener("mousedown", moveTeam);
indexContact.addEventListener("mousedown", moveContact);



function moveProduct() {
	document.location.href='products.html';
}
function moveMission() {
	document.location.href='mission.html';
}
function moveTeam() {
	document.location.href='team.html';
}
function moveContact() {
	document.location.href='contact.html';
}