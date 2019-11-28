/* CSS Document */

function getStyleElement(elemt){
		var styleElement;
		if(elemt.currentStyle){
			styleElement = elemt.currentStyle; //IE
		}else{
			styleElement = window.getComputedStyle(elemt,null);
		}
		
		return styleElement;
	}