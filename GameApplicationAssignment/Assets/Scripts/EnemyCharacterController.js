#pragma strict

var enemyCharacterlaser:Rigidbody;

function shootLaser()
{
	//shoot the laser
	Instantiate(enemyCharacterlaser,transform.position,transform.rotation);

}



function Start () {
	//enemyCharacters will shoot half a second after they spawn and every second after
	InvokeRepeating("shootLaser",1.0,1.5);
	

}

function Update () {
	
	
}