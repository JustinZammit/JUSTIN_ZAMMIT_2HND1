#pragma strict

function Start () {

}

//when the user hits the spacebar button, sound will play
function Update () {
	if (Input.GetKeyUp("space")){
		if(!audio.isPlaying){
			audio.Play();
		}
		
	}
}