var aneObject = function(){
	//start point,control poion ,end point(sin)

	this.rootx =[];//y坐标已知
	this.headx = [];
	this.heady = [];
	this.am = [];
	this.angle = 0;
}
aneObject.prototype.num = 50;
aneObject.prototype.init = function(){
	var h = canHeight2;
	for(var i =0;i<this.num;i++){
		this.rootx[i] = i*16+Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = h-200+Math.random()*50;
		this.am[i] = Math.random()*30+40;
	}
	//console.log(1);
}
aneObject.prototype.draw = function(){
	this.angle += deltaTime*0.0008;
	var l = Math.sin(this.angle);//[-1,1]
	cxt2.save();
	cxt2.globalAlpha = 0.6;
	cxt2.strokeStyle = '#3b154e';
	cxt2.lineWidth = 20;
	cxt2.lineCap = 'round';
	for(var i =0 ;i<this.num;i++){
		cxt2.beginPath();
		cxt2.moveTo(this.rootx[i],canHeight2);
		this.headx[i] = this.rootx[i] + l*this.am[i];
		cxt2.quadraticCurveTo(this.rootx[i],canHeight2-70,this.headx[i],this.heady[i]);		
		cxt2.stroke();
	}
	cxt2.restore();  //样式只在这一段之间有作用
}
