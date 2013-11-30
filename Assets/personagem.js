#pragma strict
var velocidade : float;
var alturaDoPulo : float;


function Start () {
	velocidade = 5;
}

function Update () {
	this.transform.Translate(0, 0, Time.deltaTime * velocidade);
	this.animation.Play("run");
}