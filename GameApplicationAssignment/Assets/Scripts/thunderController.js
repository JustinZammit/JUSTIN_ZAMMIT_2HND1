#pragma strict
var thunderSpeed:int;
var explosion:Rigidbody;

function Start () {

}

//function that is triggered when thunder hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the thunder hits an enemy, we will do the following two things: 
	//Destroy the enemy
	//Destroy the thunder
	
	if((other.tag == "enemy") || (other.tag == "enemyCharacter")){
		
		//score=score+1;
		PlayerController2.score+=5;
		PlayerController3.score+=5;
		//destroy the enemy
		Destroy(other.gameObject);
		//destroy the bone
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
	//move the bone FORWARD
	transform.Translate(Vector3.right *
		thunderSpeed * Time.deltaTime);
		
		
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}