#pragma strict
var min : int;
var max : int;
var velocidade : float;
private var index : int;
private var posMouse: int;

function Start () {
	index = min;
	posMouse = Input.mousePosition.x;
}

function Update () {
	if(index < max)
		Debug.Log(index++);
	else
		index = min;
		
	this.transform.Translate(Input.GetAxis("Horizontal") * velocidade * Time.deltaTime, 0, Input.GetAxis("Vertical") * velocidade * Time.deltaTime);	
	this.transform.Rotate(Input.GetAxis("Mouse Y") * 10 * velocidade * Time.deltaTime, -Input.GetAxis("Mouse X") * 10 *velocidade * Time.deltaTime, 0);
}