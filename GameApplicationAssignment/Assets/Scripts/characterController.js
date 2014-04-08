#pragma strict
//var controlling the character's speed
var characterSpeed:int;



function Start () {
		
}


function Move (cSpeed:int) {
	
	transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"));

	if (Input.GetKey(KeyCode.UpArrow))
	{
		transform.Translate(Vector3.up * Time.deltaTime * cSpeed);
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		transform.Translate(Vector3.down * Time.deltaTime * cSpeed);
	}


}

function Update () {
	//transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"));
	
		Move (5);
}