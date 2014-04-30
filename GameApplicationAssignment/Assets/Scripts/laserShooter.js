#pragma strict
//reference to laser
var laserToShoot:Rigidbody;



function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.UpArrow))
	{
		Instantiate(laserToShoot,transform.position,Quaternion.identity);
	}


}