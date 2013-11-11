#pragma strict
var cameradas: Camera;

function Start () {
	cameradas = GameObject.Find("Main Camera").camera;
	cameradas.transform.position.x = this.transform.position.x;
	cameradas.transform.position.z = this.transform.position.z - 7.5;
}

function Update (){
	this.transform.position.x += 0.1;
	this.animation.Play("run");
    cameradas.transform.position.x = this.transform.position.x;
}