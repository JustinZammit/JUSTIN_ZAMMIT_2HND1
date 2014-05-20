#pragma strict

function Start () {

}

function Update () {
if (Input.GetKey(KeyCode.Escape))
	{
Application.LoadLevel("MainMenu"); // load Main Menu
}
}