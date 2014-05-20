#pragma strict

var topMargin:int;
var bottomMargin:int;

var moveUp:boolean;
var moveDown:boolean;

function Start () {
	topMargin = 8;
	bottomMargin = -6;
	
	moveUp = true;
	moveDown = false;
	
	InvokeRepeating("shootLaser",0.3,0.5);
}

function Update () {
if (moveUp == true)
	{
	//move the ufo up
	transform.Translate(Vector3.up * 8 * Time.deltaTime);
		
		if(transform.position.y >= topMargin)
		{
		moveUp = false;
		moveDown = true;
		}
	
	}
	
	if (moveDown == true)
	{
	//move the ufo up
	transform.Translate(Vector3.down * 12 * Time.deltaTime);
		
		if(transform.position.y <= bottomMargin)
		{
		moveUp = true;
		moveDown = false;
		}
	
	}

}

var enemyCharacterlaser:Rigidbody;

function shootLaser()
{
	//shoot the laser
	Instantiate(enemyCharacterlaser,transform.position,transform.rotation);

}