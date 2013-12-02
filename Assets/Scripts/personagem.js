#pragma strict
var velocidade : float;
var alturaDoPulo : float;

var GUIPontos : GameObject;
var GUIDistancia : GameObject;

private var distancia : int;
private var pontos : int;
private var paused : boolean = false;
var mainCamera : GameObject;

var indItemScript : indicadorItem;

var pauseButtonTexture : Texture;


function Start () {
	distancia = 0;
	pontos = 0;
	GUIDistancia.guiText.text = distancia + "";
	GUIPontos.guiText.text = pontos + "";
	
}

function Update () {
	this.transform.Translate(0, 0, Time.deltaTime * velocidade);
	this.animation.Play("run");
	
	if(!paused) {
		distancia += velocidade;
		
		pontos++;
	}
	
    GUIDistancia.guiText.text = distancia + "";
	GUIPontos.guiText.text = pontos + "";
}

function OnCollisionEnter (theObject : Collision) {
	Debug.Log("Colidiu!!");
	Debug.Log(theObject.gameObject.tag);
}