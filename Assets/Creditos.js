#pragma strict

var iconYusim : Texture2D;
var iconRoberto : Texture2D;
var iconMatheus : Texture2D;
var iconFelipe : Texture2D;

function Start () {

}

function OnGUI () {
	GUI.Box (Rect (0, 0, 400, 200), GUIContent("Yusim", iconYusim));
	GUI.Box (Rect (Screen.width - 400,0, 400, 200), GUIContent("Matheus", iconMatheus));
	GUI.Box (Rect (0,Screen.height - 200, 400, 200), GUIContent("Roberto", iconRoberto));
	GUI.Box (Rect (Screen.width - 400,Screen.height - 200, 400, 200), GUIContent("Filipe", iconFelipe));
	
	if (GUI.Button (Rect (780,400,400,40), "Voltar")) {
		Application.LoadLevel (0);
	}
}

function Update () {

}