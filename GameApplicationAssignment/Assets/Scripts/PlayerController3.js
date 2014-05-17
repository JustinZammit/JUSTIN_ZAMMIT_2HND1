#pragma strict
//declaring varibales
static var score:int=0;
static var lives:int=5;
//varibale for the GUISkin
var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) 
{
//when the player hits the life, the lives will increase +1		
		if(other.tag == "life")
		{
		Destroy(other.gameObject);
		lives=lives+1;
		}
//when the player hits the enemy, the lives will decrease -1		
		if(other.gameObject.tag=="enemy")
		{
//decrease lives by 1
		lives--;
//destroy the enemy
		Destroy(other.gameObject);
		}
}
		
//when lives is equal to 0, restart Level 3	
function checklives() 
{
	if (lives<=0) 
	{
	Application.LoadLevel("Level3");
	}
}

//when scoring total of 60, Load Game Won
function checkscore() 
{
	if (score>=60) 
	{
	Application.LoadLevel("GameWon");
	}
}


	
//displaying the score and lives on screen
function OnGUI()
{
	GUI.skin = textStyle;
//parameters: x, y, width, height
	GUI.Label(Rect(5,5,150,50),"Score: "+score);
	GUI.Label(Rect(160,5,150,50),"Lives: "+lives);
//this is to check that fires collecting is counting correctly //GUI.Label(Rect(315,5,150,50),"Fire: "+fire);
}

//when the game starts
function Start () 
{
	lives=5;
	score=0;
}

//updating score and lives in gameplay
function Update () 
{
	checklives();
	checkscore();
}

