#pragma strict

var scriptIndItem : indicadorItem;

function Start () {
	
}

function Update () {
	
}

function OnCollisionEnter (colObject : Collision) {
	if(colObject.gameObject.tag == "Player") {
		scriptIndItem.alteraImagem(3);
		Destroy(gameObject);
	}
}