function Start () {

}

function Update () {

}

//change text color to cyan on mouse roll over
function OnMouseEnter(){
	guiText.material.color= Color.cyan;
}

//change text color to white
function OnMouseExit(){
	guiText.material.color= Color.white;

}

function OnMouseUp(){
		Application.LoadLevel("Level3"); // load level 

}