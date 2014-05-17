#pragma strict
var laserSpeed:int;
var explosion:Rigidbody;

function Start () {

}

//function that is triggered when laser hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the laser hits an enemy, we will do the following two things:
	//Destroy the enemy
	//Destroy the laser
	
	if((other.tag == "enemy") || (other.tag == "enemyCharacter")){
		
		//score=score+1;
		PlayerController2.score++;
		PlayerController3.score++;
		//destroy the enemy
		Destroy(other.gameObject);
		//destroy the laser
        Destroy(this.gameObject);
        //create the explosion at the enemies's position
		Instantiate(explosion,transform.position,transform.rotation);
		
		Debug.Log("Entered Enemy");
		
	}

}
/*
function OnTriggerExit(other:Collider)
{
	if(other.tag == "enemy")
	{

	Debug.Log("Exit Enemy");
	}
}

*/

function Update () {
	//move the laser FORWARD
	transform.Translate(Vector3.right *
		laserSpeed * Time.deltaTime);
		
		
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}