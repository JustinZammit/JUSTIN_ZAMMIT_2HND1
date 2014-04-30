#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyUp("space")){
		if(!audio.isPlaying){
			audio.Play();
		}
		
	}
}