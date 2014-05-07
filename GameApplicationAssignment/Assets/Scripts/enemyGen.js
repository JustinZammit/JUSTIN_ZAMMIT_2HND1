#pragma strict
//This script will generate rocks in a random position
//between x=14 to 16 and  y=-8 every 5 seconds

var enemy:Rigidbody;




//creates an instance of enemy at 
//a random position in x and y
function createEnemy()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(14,16);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(-8,-8);
 
 //create an enemy relative to the game object
 Instantiate(enemy,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 5.0 seconds
 //parameter 2: every 8.0 seconds
 InvokeRepeating("createEnemy",5.0,8.0);
}

function Update () {

}

//destroy the object when the object had left the screen
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}