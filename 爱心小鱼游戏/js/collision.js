//判断大鱼和果实的距离
function calLength2(x1,y1,x2,y2){
	return Math.pow(x1-x2,2)+Math.pow(y1-y2,2);
}
function momFrColl(){
	if(!deta.gameOver&&!deta.start){
		for(var i =0;i<fruits.num;i++){
			if(fruits.alive[i]){
				var l = calLength2(fruits.x[i],fruits.y[i],momFish.x,momFish.y);
				if(l<900){
					//果实别吃掉
					audioO.born();
					
					fruits.dead(i);
					deta.fruitNum ++;
					momFish.momBodyCount ++;
					wave.born(fruits.x[i],fruits.y[i]);
					if(momFish.momBodyCount >7){
						momFish.momBodyCount = 7;
					}
					if(fruits.fruitType[i] == 'blue'){
						deta.double = 2;
					}
				}
			}
		}
	}
}
//判断大鱼和小鱼的碰撞
function momBabyColl(){
	if(!deta.gameOver&&!deta.start){
		if(deta.fruitNum > 0){
		
			var l = calLength2(momFish.x,momFish.y,baby.x,baby.y);
			if(l < 900){
				baby.babyBodyCount = 0;
				momFish.momBodyCount = 0;
				halo.born(baby.x,baby.y);

				audio1O.born();

				//分数更新
				deta.addScore();
			}
		}
	}
}