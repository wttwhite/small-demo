//document.body.onload = game;

var canvas1 = document.getElementById('canvas1'),//在前,,fish,dust,UI,circle
	canvas2 = document.getElementById('canvas2'),//在后 , bg,aneone(海葵),fruits
	cxt1 = canvas1.getContext('2d'),
	cxt2 = canvas2.getContext('2d'),
	allcanvas = document.getElementById('allcanvas'),
	audio = [],audio1 = [],
	timerT = document.getElementById('audioTimer'),
	timerEnd = document.getElementById('audioTEnd');
	audio[0] = document.getElementById('audio1');
	audio[1] = document.getElementById('audio2');
	audio[2] = document.getElementById('audio3');
	audio[3] = document.getElementById('audio4');
	audio[4] = document.getElementById('audio5');
	audio[5] = document.getElementById('audio6');
	audio[6] = document.getElementById('audio7');
	audio1[0] = document.getElementById('audio11');
	audio1[1] = document.getElementById('audio12');
	audio1[2] = document.getElementById('audio13');
	audio1[3] = document.getElementById('audio14');
var lastTime,//上一阵执行的时间
	deltaTime;//两针的时间差
var bgPic = new Image(); //背景图片
var ane,fruits,momFish,beta,wave,halo,dust,timer,audioO,audio1O;
var momTail = [],momEye = [],momBodyO = [],momBodyB = [],babyTail = [],babyEye = [],babyBody = [],dustPic = [];
var nowTime;
window.onload = function(){
	init();//初始化工作
	lastTime = new Date();//date.now()
	deltaTime = 0;
	gameloop();
	

	
	
}

function init(){
	canWidth2 = canvas2.width;
	canHeight2 = canvas2.height;
	canvas1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src = './img/background.jpg';
	ane = new aneObject();
	ane.init();

	fruits = new fruitObj();
	fruits.init();

	momFish = new momFishO();
	momFish.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth2*0.5;
	my = canHeight2*0.5;

	for(var i =0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src = './img/babyTail'+i+'.png';
		momTail[i] = new Image();
		momTail[i].src = './img/bigTail'+i+'.png';
	}

	for(var i =0;i<2;i++){
		babyEye[i] = new Image();
		babyEye[i].src = './img/babyEye'+i+'.png';
		momEye[i] = new Image();
		momEye[i].src = './img/bigEye'+i+'.png';
	}

	for(var i =0;i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src = './img/babyFade'+i+'.png';
	}

	deta = new detaObj();
	//deta.init();

	if(deta.start){
		canvas1.addEventListener('click',click,false);
	}else{

	}



	for(var i =0;i<8;i++){
		momBodyO[i] = new Image();
		momBodyO[i].src = './img/bigSwim'+i+'.png';
		momBodyB[i] = new Image();
		momBodyB[i].src = './img/bigSwimBlue'+i+'.png';
	}

	cxt1.fillStyle = "#fff";
	cxt1.font = '30px Verdana'; //只用过一次

	wave = new waveObj();
	wave.init();
	halo = new haloObj();
	halo.init();

	dust = new dustObj();
	dust.init();

	for(var i =0;i<7;i++){
		dustPic[i] = new Image();
		dustPic[i].src = './img/dust'+i+'.png';
	}
	timer = new timerObj();
	timer.init();

	audioO = new audioObj();
	audioO.init();

	audio1O = new audio1Obj();
	audio1O.init();
	


}

function gameloop(){
	if(!deta.start){
		canvas1.removeEventListener('click',click,false);
	}
	if(deta.gameOver&&!deta.start){
		var w = canvas1.width;
		var h = canvas1.height;
		canvas1.addEventListener('click',function(e){
			e = e||event;
			var x = e.clientX-allcanvas.offsetLeft;
			var y = e.clientY-allcanvas.offsetTop;
			//console.log(x);
			//console.log(y);
			if(x>=w*0.5-75&&x<=w*0.5+75&&y>=365&&y<=415){
				//console.log(allcanvas.offsetLeft);
				//console.log(allcanvas.offsetTop);
				//console.log("x:"+x);
				//console.log("y:"+y);
				//console.log("w*0.5-75:"+(w*0.5-75));
				//console.log("h:"+h);
				//console.log(1);
				window.location.reload();
			}
		},false);
	}
	
	requestAnimationFrame(gameloop);//相对于setInterval(一定时间内无法绘制完成)更加科学，当前绘制完成之后，间隔多长时间绘制下一帧
	//帧与帧之间绘制时间间隔不统一，   有不同浏览器的配置问题 在绘制背景的那个视频中
	//console.log('loop');
	var now = new Date();
	deltaTime = now - lastTime;
	if(deltaTime > 40){
		deltaTime = 40;
	}
	lastTime = now;
	//console.log(deltaTime);
	drawBg();
	ane.draw();
	fruitMonitor()
	fruits.draw();

	cxt1.clearRect(0,0,canWidth2,canHeight2);//干净的画布
	momFish.draw();
	baby.draw();
	deta.draw();

	momFrColl();
	momBabyColl();

	wave.draw();
	halo.draw();
	dust.draw();
	timer.draw();
	audioO.alive1();
	audio1O.alive1();

}


function onMouseMove(e){
	if(!deta.gameOver){
		if(e.offsetX || e.layerX){
			mx = e.offsetX == undefined ?e.layerX : e.offsetX;
			my = e.offsetY == undefined ?e.layerY : e.offsetY;
			//console.log(mx);
		}
	}
}
function click(){
	deta.start = false;
	nowTime = new Date().getTime();
	//console.log(deta.start);
}

function lerpDistance(aim , cur, ratio){
	var delta = cur - aim;
	return aim + delta * ratio;
}
function lerpAngle(a,b,t){
	var d = b-a;
	if(d>Math.PI){
		d = d-2*Math.PI;
	}
	if(d<-Math.PI){
		d = d+2*Math.PI;
	}
	return a+d*t;
}


