var waveObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.x = [];
	this.y = [];

}
waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
	for(var i =0;i<this.num;i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}
waveObj.prototype.draw = function(){
	cxt1.save();
	cxt1.lineWidth = 2;
	cxt1.shadowColor = "#fff";
	cxt1.shadpwBlur = 8;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			//draw
			this.r[i] += deltaTime*0.04;
			if(this.r[i]>50){
				this.alive[i] = false;
				break;
			}
			var alpha = 1-this.r[i]/100;
			
			cxt1.beginPath();
			cxt1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);		
			cxt1.closePath();
			cxt1.strokeStyle = 'rgba(255,255,255,'+alpha+')';
			cxt1.stroke();
		}
	}
	cxt1.restore();
}
waveObj.prototype.born = function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y
			//born
			//console.log(1);
			return;//只需要一个，跳出循环
		}
	}
}