#pragma strict
//reference to laser
var laserToShoot:Rigidbody;



function Start () {

}

//when pressing the up button, the laser will be shot
function Update () {

	if (Input.GetKeyDown(KeyCode.UpArrow))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}


}