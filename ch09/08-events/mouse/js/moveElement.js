// JavaScript Document

this.moveElement = function(positionObj){
	//positionObj = {xA,yA, xB, yB}

	/*=======================================
	* PUBLIC FUNCTIONS
	*========================================*/
	
	var _moveSize = 5;
	var _t;
	var _speed = 5;
	
	this.stopMove = function(){
			stopMove();
	}
	
	this.setMoveSize = function(val){
		_moveSize = val;
	}
	
	this.setSpeed = function(val){
		_speed = val;
	}
	
	this.getDirection = function(){
		return getDirection(positionObj);
	}
	
	this.run = function(objHTML){
		console.log(positionObj);		
		
		objHTML.style.left 		= positionObj.xA + "px";		
		objHTML.style.top 		= positionObj.yA + "px";		
		objHTML.style.position 	= "absolute";
		objHTML.style.zIndex 	= 10101;
		
		var vDirection =  getDirection(positionObj);		
		
		if(vDirection != ""){
			if(vDirection == "right"){
				moveRight(positionObj, objHTML);
			}
			
			if(vDirection == "left"){
				moveLeft(positionObj, objHTML);
			}
			
			if(vDirection == "top"){
				moveTop(positionObj, objHTML);
			}
			
			if(vDirection == "bottom"){
				moveBottom(positionObj, objHTML);
			}
			
			if(vDirection == "lefttop"){				
				moveLeftTop(positionObj, objHTML);
			}
			
			if(vDirection == "righttop"){				
				moveRightTop(positionObj, objHTML);
			}
			
			if(vDirection == "leftbottom"){				
				moveLeftBottom(positionObj, objHTML);
			}
			
			if(vDirection == "rightbottom"){				
				moveRightBottom(positionObj, objHTML);
			}
		}
		
	}
	
	/*=======================================
	* PRIVATE FUNCTIONS
	*========================================*/
	
	function moveRightBottom(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		var pecent = xyPecent(posObj);//xPecent - yPecent;
		
		var flag 	= true;
		
		if(pecent.xPecent > pecent.yPecent){
			var tmp = xStop - parseFloat(objHTML.style.left);
		}else{
			var tmp = yStop - parseFloat(objHTML.style.top);				
		}
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) 
							+ (moveSize*pecent.yPecent) + "px";
		objHTML.style.left = parseFloat(objHTML.style.left) 
							+ (moveSize*pecent.xPecent) + "px";
		
		//console.log("x,y: " + objHTML.style.top + " | " + objHTML.style.left);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveRightBottom(posObj, objHTML); },speed);
		}
		
		
	}
	
	function moveLeftBottom(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		var pecent = xyPecent(posObj);//xPecent - yPecent;
		
		var flag 	= true;
		
		if(pecent.xPecent > pecent.yPecent){
			var tmp = parseFloat(objHTML.style.left) - xStop;
		}else{
			var tmp = yStop - parseFloat(objHTML.style.top);				
		}
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) 
							+ (moveSize*pecent.yPecent) + "px";
		objHTML.style.left = parseFloat(objHTML.style.left) 
							- (moveSize*pecent.xPecent) + "px";
		
		//console.log("x,y: " + objHTML.style.top + " | " + objHTML.style.left);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveLeftBottom(posObj, objHTML); },speed);
		}
		
		
	}
	
	function moveRightTop(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		var pecent = xyPecent(posObj);//xPecent - yPecent;
		
		var flag 	= true;
		
		if(pecent.xPecent > pecent.yPecent){
			var tmp = xStop - parseFloat(objHTML.style.left);
		}else{
			var tmp = parseFloat(objHTML.style.top) - yStop;				
		}
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) 
							- (moveSize*pecent.yPecent) + "px";
		objHTML.style.left = parseFloat(objHTML.style.left) 
							+ (moveSize*pecent.xPecent) + "px";
		
		//console.log("x,y: " + objHTML.style.top + " | " + objHTML.style.left);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveRightTop(posObj, objHTML); },speed);
		}
		
		
	}
	
	function moveLeftTop(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		var pecent = xyPecent(posObj);//xPecent - yPecent;
		
		var flag 	= true;
		
		if(pecent.xPecent > pecent.yPecent){
			var tmp = parseFloat(objHTML.style.left) - xStop;
		}else{
			var tmp = parseFloat(objHTML.style.top) - yStop;				
		}
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) 
							- (moveSize*pecent.yPecent) + "px";
		objHTML.style.left = parseFloat(objHTML.style.left) 
							- (moveSize*pecent.xPecent) + "px";
		
		//console.log("x,y: " + objHTML.style.top + " | " + objHTML.style.left);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveLeftTop(posObj, objHTML); },speed);
		}
		
		
	}
	
	function xyPecent(posObj){
		//console.log("xyPecent");
		//console.log(posObj);
		//{xA,yA, xB, yB}
		var vHeight = Math.abs(posObj.yA - posObj.yB);
		var vWidth = Math.abs(posObj.xA - posObj.xB);
		
		var xPecent, yPecent;
		if(vHeight == vWidth){
			xPecent = 1;
			yPecent = 1;
		}else if(vHeight > vWidth){
			xPecent = (vWidth/vHeight).toFixed(5);
			yPecent = 1;
		}else{
			yPecent = (vHeight/vWidth).toFixed(5);
			xPecent = 1;
		}
		
		return {xPecent: Math.abs(xPecent), yPecent: Math.abs(yPecent)};
	}
	
	function moveBottom(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		//console.log("xStop: " + xStop);
		
		//{xA,yA, xB, yB}
		
		var flag 	= true;
		var tmp 	= yStop - parseFloat(objHTML.style.top);
				
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) + moveSize + "px";
		
		console.log("xStop: " + yStop + " | " + objHTML.style.top);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveBottom(posObj, objHTML); },speed);
		}
		
	}
	
	function moveTop(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var yStop = posObj.yB;
		//console.log("xStop: " + xStop);
		
		//{xA,yA, xB, yB}
		
		var flag 	= true;
		var tmp 	= parseFloat(objHTML.style.top) - yStop;
		
		//xStop + " | " + objHTML.style.left
		//128 | 428
		//128 | 423 
		//128 | 418 
		//........
		//128 | 130 = 2 < 5
		
		//128 | 125
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.top = parseFloat(objHTML.style.top) - moveSize + "px";
		
		console.log("xStop: " + yStop + " | " + objHTML.style.top);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveTop(posObj, objHTML); },speed);
		}
		
	}
	
	function moveLeft(posObj, objHTML){
		
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		//{xA,yA, xB, yB}
		
		var flag 	= true;
		var tmp 	= parseFloat(objHTML.style.left) - xStop;
		
		//xStop + " | " + objHTML.style.left
		//128 | 428
		//128 | 423 
		//128 | 418 
		//........
		//128 | 130 = 2 < 5
		
		//128 | 125
		
		if(tmp < moveSize ){
			moveSize 	= tmp;
			flag		= false;
		}
		
		objHTML.style.left = parseFloat(objHTML.style.left) - moveSize + "px";
		
		console.log("xStop: " + xStop + " | " + objHTML.style.left);
		
		
		
		if(flag == true){
			_t = setTimeout(function(){ moveLeft(posObj, objHTML); },speed);
		}
		
	}
	
	function moveRight(posObj, objHTML){
		//console.log("moveRight");
		//Khoang cach di chuyen boxA moi lan
		var moveSize 	= _moveSize; //5px
		//Thoi gian giua moi lan di chuyen boxA
		var speed 		= _speed; // 1000 = 0.005s
		
		//Vi tri toa do X ma boxA se phai dung lai
		var xStop = posObj.xB;
		//console.log("xStop: " + xStop);
		
		var flag = true;
		var tmp = xStop - parseFloat(objHTML.style.left);
		if(tmp < moveSize ){
			moveSize = tmp;
			flag = false;
		}
		
		objHTML.style.left = parseFloat(objHTML.style.left) + moveSize + "px";
		
		console.log("xStop: " + xStop + " | " + objHTML.style.left);
		
		//xStop + " | " + objHTML.style.left
		//728 | 726 = 2 < 5
		//728 | 731 
		
		if(flag == true){
			_t = setTimeout(function(){ moveRight(posObj, objHTML); },speed);
		}
		
	}
	
	function stopMove(){
		clearTimeout(_t);
	}
	
	function getDirection(posObj){		
		
		var val = '';
		
		if(posObj.xA == posObj.xB){
			val = val + "";
		}
		
		if(posObj.xA > posObj.xB){
			val = val + "left";
		}
		
		if(posObj.xA < posObj.xB){
			val = val + "right";
		}
		
		if(posObj.yA == posObj.yB){
			val = val + "";
		}
		
		if(posObj.yB > posObj.yA){
			val = val + "bottom";
		}
		
		if(posObj.yB < posObj.yA){
			val = val + "top";
		}
		
		return val;
	}
}
