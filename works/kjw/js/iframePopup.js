var popSize = {
"iframePopupContentW":500,
"iframePopupContentH":300,
"pop_agreeW":469,
"pop_agreeH":493,
"pop_codeW":469,
"pop_codeH":385,
"pop_event1_comW":469,
"pop_event1_comH":385,
"pop_event2_comW":469,
"pop_event2_comH":385,
"pop_tableW":469,
"pop_tableH":385,
"mem_regW":469,
"mem_regH":385
};
var iframePopup = function(){
	iframePopup.isPopup = false;//static var
	this.setPopup =function(obj){
		var tagHtml = '<div class="conIfr"><iframe src="'+obj+'.html" id="ifr" allowtransparency="true" frameborder="0" marginheight="0" marginwidth="0" name="'+obj+'" scrolling="no"></iframe></div>'
		$('.iframePopup').css("opacity",0);
		$('.iframePopup').css("display","block").html(tagHtml);
		positionPopup();
		$('.iframePopupBg').fadeTo("fast",0.5);   
		iframePopup.isPopup = true;
		//var w = popSize[obj+"W"]
		//var h = popSize[obj+"H"]
		$('#ifr').load(function(){
			$('.iframePopup').css("opacity",1);
			var w = $('#ifr').contents().find(".popup").css("width");
			var h = $('#ifr').contents().find(".popup").css("height");
			$('.iframePopup>.conIfr>#ifr').css("width",w);
			$('.iframePopup>.conIfr>#ifr').css("height",h);
			$('.iframePopup>.conIfr').css("width",w);
			//var winH = $(window).scrollTop() + (($(window).height() -  $('.iframePopup').height()) / 2); 
			var winH = $(window).scrollTop()
			$('.iframePopup>.conIfr').css("top",winH);//�앹뾽�ъ���
			//$('.iframePopup>.conIfr').css("margin","100px auto 0 auto");//�앹뾽�ъ���
			$('.iframePopup').fadeTo(0,1);
			positionPopup();
		});
	}
	this.setPopup1 =function(obj,val){
		var tagHtml = '<div class="conIfr"><iframe src="'+obj+'.html?'+val+'" id="ifr" allowtransparency="true" frameborder="0" marginheight="0" marginwidth="0" name="'+obj+'" scrolling="no"></iframe></div>'
		$('.iframePopup').css("opacity",0);
		$('.iframePopup').css("display","block").html(tagHtml);
		positionPopup();
		$('.iframePopupBg').fadeTo("fast",0.5);   
		iframePopup.isPopup = true;
		//var w = popSize[obj+"W"]
		//var h = popSize[obj+"H"]
		
		$('#ifr').load(function(){
			$('.iframePopup').css("opacity",1);
			var w = $('#ifr').contents().find(".popup").css("width");
			var h = $('#ifr').contents().find(".popup").css("height");
			$('.iframePopup>.conIfr>#ifr').css("width",w);
			$('.iframePopup>.conIfr>#ifr').css("height",h);
			$('.iframePopup>.conIfr').css("width",w);
		//	var winH = $(window).scrollTop() + (($(window).height() -  $('.iframePopup').height()) / 2); 
			//var winH = $(window).scrollTop() 
			$('.iframePopup>.conIfr').css("top",0);//�앹뾽�ъ���
			//$('.iframePopup>.conIfr').css("margin","100px auto 0 auto");//�앹뾽�ъ���
			$('.iframePopup').fadeTo(0,1);
			positionPopup();
			
		});
	}
	var positionPopup = function(){
		if(iframePopup.isPopup == true){
			  //popupBg �믪씠媛� 珥덇린�� (�덊븯硫� �ㅽ겕濡ㅼ깮源�) 
			$('.iframePopupBg').css('height',0);
			if($(window).width()>=1200){
				$('.iframePopupBg').css({'width':$(document).width(),'height':$(document).height()});
			}else{
				$('.iframePopupBg').css({'width':1200,'height':$(document).height()});
			}  
			
		//	var winH = $(window).scrollTop();
			$('.iframePopup>.conIfr').css("top",0);//�앹뾽�ъ���
			//$('.iframePopup>.conIfr').css("margin",winH+"px auto 0 auto");//�앹뾽�ъ���
		}
	}
	iframePopup.closePopup = function(){//static method
		$(".wrap").css("position","relative")
		iframePopup.isPopup = false;
		$('.iframePopup').css('display','none');
		$('.iframePopupBg').css('display','none');
	}
	$(window).resize(function(){
		positionPopup();
	});
}