var momFishO = function(){
	this.x;
	this.y;
	//this.bigEye = new Image();
	//this.bigBody = new Image();
	//this.bigTail = new Image();
	this.momTailTimer = 0;
	this.momTailCount = 0;
	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 3000;// 一张图片持续的时间
	this.momBodyTimer = 0;
	this.momBodyCount = 0;
	this.angle;
}
momFishO.prototype.init = function(){
	this.x = canWidth2/2;
	this.y = canHeight2/2;
	//this.bigEye.src = './img/bigEye0.png';
	//this.bigBody.src = './img/bigswim0.png';
	//this.bigTail.src = './img/bigTail0.png';
	this.angle = 0;
}
momFishO.prototype.draw = function(){

	this.x = lerpDistance(mx , this.x, 0.97);
	this.y = lerpDistance(my , this.y, 0.97);

	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;//-PI到PI之间
	this.angle = lerpAngle(beta , this.angle, 0.6);


	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount+1)%8;
		this.momTailTimer %= 50;
	}
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount+1)%2;
		this.momEyeTimer %= this.momEyeInterval
		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random()*1500+3000;
		}else{
			this.momEyeInterval = 200;
		}
	}

	cxt1.save();
	cxt1.translate(this.x,this.y);
	cxt1.rotate(this.angle);
	cxt1.drawImage(momTail[this.momTailCount],-momTail[this.momTailCount].width*0.5+30,-momTail[this.momTailCount].height*0.5);
	if(deta.double == 1){
		cxt1.drawImage(momBodyO[this.momBodyCount],-momBodyO[this.momBodyCount].width*0.5,-momBodyO[this.momBodyCount].height*0.5);
	}else{
		cxt1.drawImage(momBodyB[this.momBodyCount],-momBodyB[this.momBodyCount].width*0.5,-momBodyB[this.momBodyCount].height*0.5);
	}
	
	cxt1.drawImage(momEye[this.momEyeCount],-momEye[this.momEyeCount].width*0.5,-momEye[this.momEyeCount].height*0.5);
	cxt1.restore();
}