#pragma strict
//This script will generate lifes in a random position
//between x=14 to 16 and  y=-4 to 5 every 13 seconds

var life:Rigidbody;




//creates an instance of life at 
//a random position in x and y
function createLife()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(14,16);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(-4,5);
 
 //create a life relative to the game object
 Instantiate(life,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 13.0 seconds
 //parameter 2: every 20.0 seconds
 InvokeRepeating("createLife",13.0,20.0);
}

function Update () {

}

//destroy the object when the object had left the screen
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}