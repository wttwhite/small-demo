var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.speed = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
	this.aneNum = [];
}
fruitObj.prototype.num = 20;

fruitObj.prototype.init = function(){
	for(var i =0;i<this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;   //l图片大小
		this.speed[i] = Math.random()*0.01+0.005;//[0.005,0.015)
		//this.born(i);
		this.fruitType[i] = '';
		this.aneNum[i] = 0;
	}
	this.orange.src = "./img/fruit.png";
	this.blue.src = "./img/blue.png";
}

fruitObj.prototype.draw = function(){
	for(var i =0;i<this.num;i++){
		// draw
		// find an ane ,grow,fly up
		if(this.alive[i]){
			if(this.fruitType[i] == 'blue'){
				var pic = this.blue;

			}else{
				var pic = this.orange;
			}
			if(this.l[i]<=15){
				this.x[i] = ane.headx[this.aneNum[i]];
				this.y[i] = ane.heady[this.aneNum[i]];
				this.l[i] += this.speed[i]*deltaTime;//是过程变得平滑
			}else{
				this.y[i] -= this.speed[i]*7*deltaTime;
			}
			cxt2.drawImage(pic,this.x[i],this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
		
	}
}

fruitObj.prototype.update = function(){ //检测频幕上有多少果实
	var num = 0;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			num++;
		}
	}
}

fruitObj.prototype.born = function(i){
	this.aneNum[i] = Math.floor(Math.random()*ane.num);//会出现重复 可以判断，暂时不做
	this.l[i] = 0;
	this.alive[i] = true;
	var type = Math.random();
	if(type<0.2){
		this.fruitType[i] = 'blue';
	}else{
		this.fruitType[i] = 'orange';
	}
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}

function fruitMonitor(){   //监视果实的数量
	var num = 0;
	for(var i =0;i<fruits.num;i++){
		if(fruits.alive[i]){
			num++;
		}
	}
	if(num<10){
		//send fruit
		sendFruit()
		return;
	}
}

function sendFruit(){
	for(var i =0;i<fruits.num;i++){
		if(!fruits.alive[i]){
			fruits.born(i);
			return;
		}
	}
}