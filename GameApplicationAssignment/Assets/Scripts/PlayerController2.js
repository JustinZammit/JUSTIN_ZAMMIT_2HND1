#pragma strict


static var score:int=0;
static var lives:int=5;
var fire : int;
var fireshield : boolean;


var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) {
		
		if(other.tag == "fire")
		{
			fire++;
		}
		
		if(other.tag == "fire")
		{
		Destroy(other.gameObject);
		score=score+1;
		
		}
		
		if (fire==5)
		{
			fireshield = true;
			GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(transform.position.x+1, transform.position.y, 0);
			fire++;
		}
		
		
		
		if((other.tag == "enemy") && (fireshield == true)){
			
			fireshield =false;
			lives++;
		}
		
		if((other.tag == "enemy") && (fireshield == false)){
		Destroy(other.gameObject);
		lives=lives-1;
		}
		
	}
	
function checklives() {
	if (lives<=0) {
	Application.LoadLevel("Level1");
	}
}

function checkscore() {
	if (score==15) {
	Application.LoadLevel("Level2");
	}
	
	if (score>=30) {
	Application.LoadLevel("Level3");
	}
}


	

function OnGUI()
{
	GUI.skin = textStyle;
	//parameters: x, y, width, height
	GUI.Label(Rect(5,5,150,50),"Score: "+score);
	GUI.Label(Rect(160,5,150,50),"Lives: "+lives);
	
	//GUI.Label(Rect(315,5,150,50),"Fire: "+fire);
}

function Start () {
	lives=5;
	score=0;
	fireshield = false;
}

function Update () {
	checklives();
	checkscore();
}