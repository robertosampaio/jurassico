#pragma strict

var velocidade : int;
var andaEsquerda : boolean;
var cuboPonto1 : GameObject;
var cuboPonto2 : GameObject;
private var distancia : float;
var target : GameObject;
function Start () {
	target = cuboPonto1;
}

function Update () {

	
	
		distancia = Vector3.Distance(this.transform.position, target.transform.position);
		
		if(distancia < 2) {
			if(target == cuboPonto1)
				target = cuboPonto2;
			else if(target == cuboPonto2)
			   	target = cuboPonto1;
		}
		
	 	this.transform.LookAt(target.transform.position);
	 	
		this.transform.Translate(Vector3.forward * velocidade * Time.deltaTime);
	

}