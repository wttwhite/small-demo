var detaObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.start = true;
	this.alpha = 0;
}

detaObj.prototype.draw = function(){
	var w = canvas1.width;
	var h = canvas1.height;

	cxt1.save();
	cxt1.textAlign = 'center';//默认left
	cxt1.shadowBlur = 10;
	cxt1.shadowColor = '#fff';
	//cxt1.fillText('num '+this.fruitNum,w*0.5,h-50);
	//cxt1.fillText('double '+this.double,w*0.5,h-80);
	cxt1.fillText('score '+this.score,w*0.5,h-30);

	if(this.start){
		cxt1.save();
		cxt1.fillStyle = 'rgba(255,255,255,0.4)';
		cxt1.rect(w*0.5-100,150,200,200);
		cxt1.fill();
		cxt1.restore();

		cxt1.fillStyle = 'rgb(255,255,255)';
		cxt1.fillText('Start',w*0.5,100);

		cxt1.save();
		cxt1.font = '5px Verdana';
		cxt1.fillStyle = '#000';
		cxt1.textAlign = 'left';
		cxt1.fillText('点击屏幕任意位置开始游戏，',w*0.5-75,180);
		cxt1.fillText('大鱼吃上浮的果实，喂给小鱼',w*0.5-75,215);
		cxt1.fillText('后才能得分，蓝色果实分数加',w*0.5-75,250);
		cxt1.fillText('倍，当小鱼的颜色变为白色或',w*0.5-75,285);
		cxt1.fillText('者倒计时为0时，游戏结束。',w*0.5-75,320);
		cxt1.restore();
	}
	if(this.gameOver&&!this.start){
		this.alpha += deltaTime*0.0005;//deltaTime = 17左右
		if(this.alpha >1){
			this.alpha = 1;
		}

		// cxt1.save();
		// cxt1.fillStyle = 'rgba(255,255,255,0.4)';
		// cxt1.rect(w*0.5-75,365,150,50);
		// cxt1.fill();
		// cxt1.restore();
		
		cxt1.save();
		cxt1.fillStyle = 'rgba(255,255,255,'+this.alpha+')';
		cxt1.fillText('Game Over',w*0.5,h*0.5);
		cxt1.fillText('得分：'+this.score,w*0.5,h*0.5-50);
		cxt1.fillText('重新开始',w*0.5,h*0.5+100);
		cxt1.restore();

		
	}

	

	cxt1.restore();
}
detaObj.prototype.addScore = function(){
	this.score += this.fruitNum*10*this.double;
	this.fruitNum = 0;
	this.double = 1;
}