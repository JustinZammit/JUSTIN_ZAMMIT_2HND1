#pragma strict
//reference to bone
var boneToShoot:Rigidbody;



function Start () {

}

//when pressing the up button, the bone will be shot
function Update () {

	if (Input.GetKeyDown(KeyCode.S))
	{
		Instantiate(boneToShoot,transform.position,Quaternion.identity);
	}


}