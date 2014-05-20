#pragma strict
var bladeSpeed:int;
var explosion:Rigidbody;

static var livesboss:int=15;

function Start () {

}

//function that is triggered when blade hits the enemy
function OnTriggerEnter(other:Collider)
{
	//if the blade hits an enemy, we will do the following two things:
	//Destroy the enemy
	//Destroy the blade
	
	if(other.tag == "enemyCharacter"){
		
		//score=score+5;
		PlayerController4.score+=5;
		//destroy the enemy
		Destroy(other.gameObject);
		//destroy the blade
        Destroy(this.gameObject);
        //create the explosion at the enemies's position
		Instantiate(explosion,transform.position,transform.rotation);
		
		Debug.Log("Entered Enemy");
		
	}
	if(other.tag == "boss"){
		
		//score=score+5;
		PlayerController4.score+=5;
		
//decrease lives by 1
		livesboss-=1;
		
		if(livesboss <= 0 ){
		
//destroy the enemy
		Destroy(other.gameObject);
		}
			
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
		bladeSpeed * Time.deltaTime);
		
		
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}