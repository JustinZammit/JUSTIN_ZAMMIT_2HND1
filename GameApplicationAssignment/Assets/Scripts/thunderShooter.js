#pragma strict
//reference to bone
var thunderToShoot:Rigidbody;



function Start () {

}

//when pressing the up button, the thunder will be shot
function Update () {

	if (Input.GetKeyDown(KeyCode.F))
	{
		Instantiate(thunderToShoot,transform.position,Quaternion.identity);
	}


}