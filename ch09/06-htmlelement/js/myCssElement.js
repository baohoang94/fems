// JavaScript Document
this.myCssElement = function(elemt){
	this.element = elemt;//boxA
	
	this.cssStyle = function(){
		return getStyleElement(elemt);
	}
	
	this.outerWidth = function(){
		var cssElement = getStyleElement(elemt);
		
		var vOuterWidth = parseInt(cssElement.borderLeftWidth)
						  + parseInt(cssElement.paddingLeft)
						  + parseInt(cssElement.width)
						  + parseInt(cssElement.paddingRight)
						  + parseInt(cssElement.borderRightWidth);	
		return vOuterWidth;
	}
	
	this.innerWidth = function(){
		var cssElement = getStyleElement(elemt);
		
		var vWidth = parseInt(cssElement.paddingLeft)
					+ parseInt(cssElement.width)
					+ parseInt(cssElement.paddingRight);	
		return vWidth;
	}
	
	this.outerHeight = function(){
		var cssElement = getStyleElement(elemt);
		
		var vOuterHeight = parseInt(cssElement.borderTopWidth)
						  + parseInt(cssElement.paddingTop)
						  + parseInt(cssElement.height)
						  + parseInt(cssElement.paddingBottom)
						  + parseInt(cssElement.borderBottomWidth);	
		return vOuterHeight;						  
	}
	
	
	this.innerHeight = function(){
		var cssElement = getStyleElement(elemt);
		
		var vHeight =  parseInt(cssElement.paddingTop)
						+ parseInt(cssElement.height)
						+ parseInt(cssElement.paddingBottom);	
		return vHeight;						  
	}
	
	function getStyleElement(elemt){
		var styleElement;
		if(elemt.currentStyle){
			styleElement = elemt.currentStyle; //IE
		}else{
			styleElement = window.getComputedStyle(elemt,null);
		}
		
		return styleElement;
	}
}