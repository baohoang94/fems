// JavaScript Document
(function($){
	$.simpleSlide = function(selector, options){
		//console.log("Hi simpleSlide plugin");
		
		var defaults;
		
		defaults = {
				'itemDefault' 	: 0,
				'delay'			: 2000,
				'fadeSpeed'		: 1000,
				'from'			: 'az',
				'auto'			: true			
			};
		options = $.extend(defaults,options);
		
		var title 	= $(selector).find("div.title");		
		var i 		= options.itemDefault;	
		var imgs	= $(selector).children("img");
		var count	= imgs.length;
		
		imgs.eq(i).show();
		title.text(imgs.eq(i).attr("title")).show().css("opacity","0.7");		
		
		//console.log(count);
		if(options.auto == true){
			setInterval(function(){
				imgs.eq(i).fadeOut(options.fadeSpeed);
				if(options.from == 'az'){
					i = (i + 1 == count)? 0:i+1;
				}else{
					i = (i == 0)? count-1:i-1;
				}
				imgs.eq(i).fadeIn(options.fadeSpeed);
				title.text(imgs.eq(i).attr("title")).show().css("opacity","0.7");
				//console.log(i);
				
			},options.delay);
		}
	};
	
})(jQuery);

$(document).ready(function(e) {
	// $("#box").zoomIt({width: 120, height: 130})
	$.simpleSlide("#slide",{'itemDefault': 2,'from': 'az','auto': true});
   
});
	