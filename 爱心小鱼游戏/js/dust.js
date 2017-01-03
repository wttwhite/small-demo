var dustObj = function(){
	this.x = [];
	this.y = [];
	this.am = [];
	this.no = [];
	this.angle = 0; //和海葵节奏保持一致

}
dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.x[i] = Math.random()*canWidth2;
		this.y[i] = Math.random()*canHeight2;
		this.am[i] = Math.random()*10+20;
		this.no[i] = Math.floor(Math.random()*7);
	}

}
dustObj.prototype.draw = function(){
	this.angle += deltaTime*0.0008;
	var l = Math.sin(this.angle);
	for(var i=0;i<this.num;i++){
		var no = this.no[i];
		cxt1.drawImage(dustPic[no],this.x[i]+this.am[i]*l,this.y[i]);
	}

}