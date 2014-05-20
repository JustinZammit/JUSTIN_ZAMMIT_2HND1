#pragma strict
//refers to prefabs
var BladeToShoot:Rigidbody;
var BulletToShoot:Rigidbody;
//to set up a counter to choose between the two weapons
var weaponChange:int=0;

function Start () {
}

//when pressing the altGr button, the laser will be shoot either Blades or Bullets
function Update () {

	if (Input.GetKeyDown(KeyCode.AltGr))
	{
		if (weaponChange == 0)//set as weapon zero
		{
		Instantiate(BladeToShoot,transform.position,Quaternion.identity);
		}
		if (weaponChange == 1)//set as weapon one
		{
		Instantiate(BulletToShoot,transform.position,Quaternion.identity);
		}
	}
	
//pressing left alt key to change between the two weapons
if(Input.GetKeyDown(KeyCode.LeftAlt)){
   weaponChange += 1; //go up by one
   }
   
   if(weaponChange >= 2){//change between the 2 weapons
     weaponChange = 0; //start at weapon zero
    }
  }
