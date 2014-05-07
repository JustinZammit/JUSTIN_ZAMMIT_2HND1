#pragma strict

var isQuit = false;


//change text color to cyan on mouse roll over
function OnMouseEnter(){
	guiText.material.color= Color.cyan;
}

//change text color to white
function OnMouseExit(){
	guiText.material.color= Color.white;
}


function OnMouseUp(){
	if (isQuit==true){
		Application.Quit(); //quit the game
	}
	
	else {
		Application.LoadLevel("Level1"); // load level 1
	}
}

function Start (){
}

// quit game if escape button is pressed
function Update () {
	if(Input.GetKey(KeyCode.Escape)){
		Application.Quit(); //quit the game
	}
}