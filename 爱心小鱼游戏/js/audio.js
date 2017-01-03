var audioObj = function(){
	this.alive = [];
	this.time = 0;
}
audioObj.prototype.init = function(){
	for(var i =0;i<7;i++){
		this.alive[i] = false;
		
	}
}
audioObj.prototype.alive1 = function(){
	this.time += deltaTime*0.005;
	if(this.time > 10){
		for(var i =0;i<7;i++){
			if(this.alive[i]){
				this.alive[i] = false;
				
			}
		}
	}
}
audioObj.prototype.born = function(){
	for(var i =0;i<7;i++){
		if(!this.alive[i]){
			
			audio[i].play();
			//console.log(audio[i]);
			this.alive[i] = true;
			return;
		}
	}


}
////////////////////////////////////////
var audio1Obj = function(){
	this.alive = [];
	this.time = 0;
}

audio1Obj.prototype.init = function(){
	for(var i =0;i<4;i++){
		this.alive[i] = false;
		
	}
}
audio1Obj.prototype.alive1 = function(){
	this.time += deltaTime*0.005;
	if(this.time > 10){
		for(var i =0;i<4;i++){
			if(this.alive[i]){
				this.alive[i] = false;
				
			}
		}
	}
}
audio1Obj.prototype.born = function(){
	for(var i =0;i<4;i++){
		if(!this.alive[i]){
			
			audio1[i].play();
			//console.log(audio1[i]);
			this.alive[i] = true;
			return;
		}
	}


}