#pragma strict
var morreu : boolean = false;

function Start () {
	
}

function Update (){
	this.transform.position.x += 0.1;
	if(!morreu) {
		if(!this.animation.IsPlaying("attack")){
			if (parseInt(this.transform.position.x) % 20 == 0){
				this.animation.Play("attack");
			}
			else{
				this.animation.Play("walk");
			}
		}
	} else {
		
	}
}

function OnCollisionEnter(collision : Collision){ 
	if (collision.gameObject.tag == "Player"){ 
		 this.animation.Play("dead");
		 morreu = true;
	} 
}