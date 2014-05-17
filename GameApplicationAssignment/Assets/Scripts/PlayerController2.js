#pragma strict

//declaring varibales
static var score:int=0;
static var lives:int=5;

//declare variable for the shield: upon collecting 5 fires, a fire shield will power up the player
var fire : int;
var fireshield : boolean;

//varibale for the GUISkin
var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) {

		//when the player hits the life, the lives will increase +1		
		if(other.tag == "life")
		{
		Destroy(other.gameObject);
		lives=lives+1;
		}
		
		//count how many fires collected
		if(other.tag == "fire")
		{
			fire++;
		}
		
		//when collecting fire, destroy fire and score will increase +1
		if(other.tag == "fire")
		{
		Destroy(other.gameObject);
		score=score+1;
		
		}
		
		//when fire collected is equal to 5, the shield will power up the player. Only once can be used.
		if (fire==5)
		{
			fireshield = true;
			GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(transform.position.x+1, transform.position.y, 0);
			fire++;
		}
		
		
		//when the shield hits an enemy, the shield will be destroyed together with the enemy without decreasing lives.
		//Score +1 due to destorying enemy
		if((other.tag == "enemy") && (fireshield == true)){
			
			fireshield =false;
			lives++;
			score++;
		}
		
		//when shield will be destoryed
		if((other.tag == "enemy") && (fireshield == false)){
		Destroy(other.gameObject);
		lives=lives-1;
		}
		
	}
	
//when lives is equal to 0, restart Level 2	
function checklives() {
	if (lives<=0) {
	Application.LoadLevel("Level2");
	}
}

//when scoring total of 35, Start Level 3
function checkscore() {
		
	if (score>=35) {
	Application.LoadLevel("Level3");
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
function Start () {
	lives=5;
	score=0;
	fireshield = false;
}

//updating score and lives in gameplay
function Update () {
	checklives();
	checkscore();
}