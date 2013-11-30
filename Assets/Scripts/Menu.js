#pragma strict

var fontStyle: FontStyle;

function Start(){
    
}
 
function OnGUI () {
	GUI.Box (Rect (780,350,400,200), "Running Time");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (780,400,400,40), "Iniciar gueeeime")) {
		Application.LoadLevel (1);
	}

	// Make the second button.
	if (GUI.Button (Rect (780,450,400,40), "Creditos")) {
		Application.LoadLevel (2);
	}
}
function Update () {

}