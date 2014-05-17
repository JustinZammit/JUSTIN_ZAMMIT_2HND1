#pragma strict
//controls the speed of the enemy laser
var speedOfLaser:int;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "Player")
	{
		//decrease lives
		PlayerController2.lives--;
		PlayerController3.lives--;
		
		//remove the enemy laser from the scene
		Destroy(this.gameObject);
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}




function Start () {

}

function Update () {
	//enemy laser moves left
	transform.Translate(Vector3.left * speedOfLaser * Time.deltaTime);
}