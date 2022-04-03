(function($) {
	$.fn.textSpecing = function() {
		var widthArr = [];
		var totalWidth = 0;
		alert(this.length)
		for(var i=0; i<this.length; i++){
			//console.log($(".top_menu").eq(i).width());
		}
		return this.each(function() {
			/*
			for( i=0; i<$(".con_top_menu>li").length; i++){
				widthArr[i] = $(".con_top_menu>li").eq(i).find("a").width();
				totalWidth = totalWidth + $(".con_top_menu>li").eq(i).find("a").width();
			}
			var num = $(window).width() - totalWidth;
			num = num/(Number($(".con_top_menu>li").length)*2);
			for(i=0; i<$(".con_top_menu>li").length; i++){
				$(".con_top_menu>li").eq(i).css("width",((widthArr[i]+num*2)/$(window).width())*100+"%");
			}
			*/
		});
	};
})(jQuery);