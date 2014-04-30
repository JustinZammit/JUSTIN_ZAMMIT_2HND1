#pragma strict


static var score:int=0;
static var lives:int=5;

var textStyle:GUISkin;

function OnTriggerEnter (other: Collider) {
		
		if(other.tag == "enemy"){
		Destroy(other.gameObject);
		lives=lives-1;
		}
		
		if(other.tag == "fire"){
		Destroy(other.gameObject);
		score=score+1;
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
}

function Start () {
	lives=5;
	score=0;
}

function Update () {
	checklives();
	checkscore();
}