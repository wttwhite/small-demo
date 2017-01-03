var timerObj = function(){
	this.unit;
	this.decade;
}
timerObj.prototype.init = function(){
	this.a = true;
	this.unit = 0;
	this.decade = 6;
}
timerObj.prototype.draw = function(){
	if(!deta.start&&!deta.gameOver){
		var t = new Date().getTime();
		this.decade = parseInt(((nowTime+1000*60)-t)/1000/10);
		this.unit = parseInt(((nowTime+1000*60)-t)/1000%10);
		if((nowTime+1000*60-t)<0){
			this.decade = 0;
			this.unit = 0;
			deta.gameOver = true;
		}
	}
	cxt1.fillStyle = "#fff";
	cxt1.fillText(this.decade+''+this.unit,40,60);

	if(this.decade == 0&&this.unit!=0){
		timerT.play();
	}
	if(this.decade == 0&&this.unit==0&&this.a){
		timerEnd.play();
		this.a = false;
	}
}