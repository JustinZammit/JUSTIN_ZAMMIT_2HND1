#pragma strict
function Start () {
}

function Update () {
}

function OnTriggerEnter(other:Collider)
{
	//if the player hits the circle, we will do the following:
	if(other.tag == "Player"){
		
		//score=score+3;
		PlayerController2.score+=3;//Level2
		PlayerController3.score+=3;//Level3
		//give red material
		renderer.material.color = Color.red;
		//Check	
		Debug.Log("Entered Circle");
	}

}

function OnTriggerExit(other:Collider)
{
	if(other.tag == "Player")
	{
	//give cyan material
	renderer.material.color = Color.cyan;
	//Check
	Debug.Log("Exit Enemy");
	}
}