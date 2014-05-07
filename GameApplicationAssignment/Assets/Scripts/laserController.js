#pragma strict
var laserSpeed:int;

function Start () {

}

//function that is triggered when laser hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the laser hits an enemy, we will do the following two things:
	//Destroy the enemy
	//Destroy the laser
	
	if(other.tag == "enemy"){
		Destroy(other.gameObject);
		//score=score+1;
		PlayerController2.score++;
		
		//destroy the enemy
		Destroy(other.gameObject);
		//destroy the laser
        Destroy(this.gameObject);
		
	}

}

function Update () {
	//move the laser FORWARD
	transform.Translate(Vector3.right *
		laserSpeed * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}