#pragma strict
var morreu : boolean = false;
var velocidade : float;

function Start () {
}

function Update (){
	this.transform.Translate(0, 0, Time.deltaTime * velocidade);
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