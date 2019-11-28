// JavaScript Document
(function($){
	$.fn.zoomIt = function(options){//settings - obj
		
		//0. Bien so su dung trong plugin
		var defaults;//obj
		var newWidth, newHeight;
		
		//1. Khai bao cac gia tri mac dinh trong plugin
		defaults = {
				width	: 100,
				height	: 100,
				both	: 100
			}
		
		options = $.extend(defaults,options);
		console.log(options.both);
		console.log(this);
		
		if(options.both != 100){
			newWidth = $(this).width() * options.both / 100;
			newHeight = $(this).height() * options.both / 100;
		}else{
			newWidth = $(this).width() * options.width / 100;
			newHeight = $(this).height() * options.height / 100;
		}
		
		$(this).animate({width:newWidth, height:newHeight}, 500);
		
		return this;
	};

})(jQuery);

$(document).ready(function(){
	$("#zoomIn").click(function(e) {
        $("#box").zoomIt({width: 80, height: 70})
				 .removeClass("bg01").addClass("bg02");
    });
	
	$("#zoomOut").click(function(e) {
        $("#box").zoomIt({width: 120, height: 130})
				 .removeClass("bg02").addClass("bg01");
    });
	
		
});