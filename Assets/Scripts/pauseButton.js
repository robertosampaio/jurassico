#pragma strict

private var paused : boolean = false;
private var indicadorItem : GameObject;
var indItem : indicadorItem;

function Start () {
//	Script sc = (Script)indicadorItem.GetComponent("indicadorItem");
//	indicadorItem = GameObject.Find("IndicadorItem").GetComponent("indicadorItem");
//	indicadorItem = GameObject.Find("IndicadorItem").GetComponent(indicadorItem);
	Debug.Log(indItem.indiceItem);
}

function Update () {

}

function OnMouseDown() {
	indItem.alteraImagem(3);
	if(paused) {
		paused = false;
		Time.timeScale = 1;
	} else {
		paused = true;
		Time.timeScale = 0;
	}
}