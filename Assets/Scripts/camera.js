#pragma strict
var playerObject : GameObject;

function Start () {
	playerObject = GameObject.Find("Player");
	this.transform.position.x = playerObject.transform.position.x;
	this.transform.position.z = playerObject.transform.position.z - 7.5;
}

function Update (){
    this.transform.position.x = playerObject.transform.position.x;
}