#pragma strict

function Start () {


}

function Update () {

var AT = gameObject.GetComponent(AnimatedTexture); //Store AnimatedTexture Script

if (Input.GetKey("right")){//user pushed right arrow key
	//set sprite to get animated from row 1
	AT.rowNumber = 1;
	}

	//set texture to negative position (flip it)
	else if(Input.GetKey("left")){//user pushed left arrow key
	//set sprite to get animated from row 1
	AT.rowNumber = 1;
	}
	
	//set sprite to get animated from row 0 standstill
	else {
	AT.rowNumber = 0;
	}
}