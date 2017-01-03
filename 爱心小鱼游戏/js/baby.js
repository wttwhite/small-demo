var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	//this.babyEye = new Image();
	this.babyBody = new Image();
	//this.babyTail = new Image();
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 2000;// 一张图片持续的时间
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}
babyObj.prototype.init = function(){
	this.x = canWidth2/2 - 50;
	this.y = canHeight2/2 + 50;
	this.angle = 0;
	//this.babyEye.src="./img/babyEye0.png";
	//this.babyBody.src='./img/babyFade0.png';
	//this.babyTail.src = './img/babyTail0.png';

}
babyObj.prototype.draw = function(){
	this.x = lerpDistance(momFish.x , this.x, 0.99);
	this.y = lerpDistance(momFish.y , this.y, 0.99);

	var deltaY = momFish.y - this.y;
	var deltaX = momFish.x - this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;//-PI到PI之间
	this.angle = lerpAngle(beta , this.angle, 0.6);

	if(!deta.start){
		this.babyTailTimer += deltaTime;
		if(this.babyTailTimer > 50){
			this.babyTailCount = (this.babyTailCount+1)%8;
			this.babyTailTimer %= 50;
		}
		this.babyEyeTimer += deltaTime;
		if(this.babyEyeTimer > this.babyEyeInterval){
			this.babyEyeCount = (this.babyEyeCount+1)%2;
			this.babyEyeTimer %= this.babyEyeInterval
			if(this.babyEyeCount == 0){
				this.babyEyeInterval = Math.random()*1500+2000;
			}else{
				this.babyEyeInterval = 200;
			}
		}
		this.babyBodyTimer += deltaTime;
		if(this.babyBodyTimer > 300){
			this.babyBodyCount = this.babyBodyCount+1;
			this.babyBodyTimer %= 300;
			if(this.babyBodyCount >19){
				this.babyBodyCount = 19;
				deta.gameOver = true;
				//game over
			}
		}

	}

	cxt1.save();
	cxt1.translate(this.x,this.y); //转移原点坐标
	cxt1.rotate(this.angle);
	cxt1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width/2+23,-babyTail[this.babyTailCount].height/2);
	cxt1.drawImage(babyBody[this.babyBodyCount],-babyBody[this.babyBodyCount].width/2,-babyBody[this.babyBodyCount].height/2);
	cxt1.drawImage(babyEye[this.babyEyeCount],-babyEye[this.babyEyeCount].width/2,-babyEye[this.babyEyeCount].height/2);	
	cxt1.restore();
}