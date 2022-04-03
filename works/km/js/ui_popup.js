/*
//css
.popup{position:absolute; top:0; left:0; width:100%; height:100%;   display:none;}
.pop{display:none}
.con_pop{ position:relative; margin:0 auto; background:url(img/loading.gif) center center no-repeat scroll;}
.popup .bg{position:absolute; top:0; left:0; width:100%; height:100%; background-color:#000; }

//host code
	//web
var popupObj = {
'min-width':1024,
'min-height':820,
'pop_input'    :{'w':579, 'h':499, 'isLoad':false, 'callback':function(){}},
'pop_attention':{'w':709, 'h':419, 'isLoad':false}
}

openPopup('pop_input');
closePopup();
	//mobile
var popupObj = {
'min-width':0,
'min-height':0,
'pop_input'    :{'w':'90%', 'h':'auto', 'isLoad':false, 'callback':function(){}},
'pop_attention':{'w':'90%', 'h':'auto', 'isLoad':false}
}
openPopup('pop_input');
closePopup();
*/
(function($){
	$(function(){
		var html = '';
		html += '<div class="popup">'
		html += '<div class="bg"></div>'
		html += '<div class="con_pop"></div>'
		html += '</div>'
		$('body').append(html);
		resizePopupBg();
	})
})(window.jQuery);
$(window).resize(function(){
	resizePopupBg();
});
function resizePopupBg(){

}
function openPopup(_selector){
	$('.popup>.bg').fadeTo(0,0.5);
	$('.con_pop').css({'width':popupObj[_selector].w,'height':popupObj[_selector].h});	
	if(popupObj[_selector].isLoad == false){
		$('.con_pop').append('<div class="pop con_'+_selector+'" style="width:100%; height:100%"></div>');
		$('.con_pop>.con_'+_selector).load(_selector+'.html',function(data){
			
			$('.'+_selector).css('display','block');
			if(popupObj[_selector].initCallback != undefined ){
				popupObj[_selector].initCallback();
			}
			popupObj[_selector].callback(_selector);
		});
	}
	$('.con_'+_selector).css('display','block');
	$('.popup').css('display','block');
	popupObj[_selector].isLoad = true;
	popupObj[_selector].callback(_selector);
	
}
function closePopup(){
	$('.popup').css('display','none');
	$('.pop').css('display','none');
}
