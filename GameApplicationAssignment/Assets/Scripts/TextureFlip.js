#pragma strict

var X : float;


//gathering normal object scale x
function Start () 
{
	X = transform.localScale.x;
}


function Update () 
{
	if (Input.GetKey("right")){//user pushed right arrow key
	//set texture to normal position
	transform.localScale.x=X;
	}

	//set texture to negative position (flip it)
	else if(Input.GetKey("left")){//user pushed left arrow key
	transform.localScale.x=-X;
	}
}