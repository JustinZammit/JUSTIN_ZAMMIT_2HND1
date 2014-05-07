#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {
if (other.collider.gameObject.tag == "enemy")
{
	Destroy(other.collider.gameObject);
	transform.position = Vector3(transform.position.x, transform.position.y, 20);
	Destroy(this.gameObject);
}
}