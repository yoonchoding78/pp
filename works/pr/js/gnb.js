var gnb_html="";
var footer_html="";
gnb_html +=    '<header>'
gnb_html +=        '<h1><a href="#"><img src="img/logo.png" alt="logo"/></a></h1>'
gnb_html +=        '<nav>'
gnb_html +=            '<div class="gnb_back_mask">'
gnb_html +=                '<ul class="gnb_back">'
gnb_html +=                    '<li class="depth1 depth11">'
gnb_html +=                    '<a class="depth1_a" href="#">공지사항</a>'
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth12">'
gnb_html +=                    '<a class="depth1_a" href="#">업무보고</a>'          	
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth13">'
gnb_html +=                    '<a class="depth1_a" href="#">Udali Big Data</a>'
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth14">'
gnb_html +=                    '<a class="depth1_a" href="#">Udali 광장</a>'
gnb_html +=                    '</li>'
gnb_html +=                '</ul>'
gnb_html +=            '</div>'
gnb_html +=            '<div class="gnb_mask">'
gnb_html +=                '<ul class="gnb">'
gnb_html +=                    '<li class="depth1 depth11">'
gnb_html +=                    '<a class="depth1_a" href="#">공지사항</a>'
gnb_html +=                        '<ul class="depth2">'
gnb_html +=                            '<li><a class="depth2_a" href="#">공지사항</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">ceo 메시지</a></li>'
gnb_html +=                        '</ul>'
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth12">'
gnb_html +=                    '<a class="depth1_a" href="#">업무보고</a>'
gnb_html +=                        '<ul class="depth2">'
gnb_html +=                            '<li><a class="depth2_a" href="#">업무보고</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">일일업무보고</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">외주발주보고</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">매출보고</a></li>'
gnb_html +=                        '</ul> '           	
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth13">'
gnb_html +=                    '<a class="depth1_a" href="#">Udali Big Data</a>'
gnb_html +=                        '<ul class="depth2">'
gnb_html +=                            '<li><a class="depth2_a" href="#">Udali Big</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">광고검색</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">광고등록</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">광고주관리</a></li>'
gnb_html +=                        '</ul>'
gnb_html +=                    '</li>'
gnb_html +=                    '<li class="depth1 depth14">'
gnb_html +=                    '<a class="depth1_a" href="#">Udali 광장</a>'
gnb_html +=                        '<ul class="depth2">'
gnb_html +=                            '<li><a class="depth2_a" href="#">조직도</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">게시판</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">내부자료실</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">광고자료실</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">동호회</a></li>'
gnb_html +=                            '<li><a class="depth2_a" href="#">Udali 행사</a></li>'
gnb_html +=                        '</ul>'
gnb_html +=                    '</li>'
gnb_html +=                '</ul>'
gnb_html +=            '</div>'
gnb_html +=        '</nav>'  
gnb_html +=        '<div class="quick_link">'
gnb_html +=            '<a class="btn_quick" href="javascript:select_quick()"><img src="img/btn_quick.png" alt="quick lnik"/><img class="arow" src="img/arow_off.png" alt=""/></a>'
gnb_html +=            '<ul>'
gnb_html +=                '<li><a href="#">홈페이지 관리</a></li>'
gnb_html +=                '<li><a href="#">블로그 관리</a></li>'
gnb_html +=                '<li><a href="#">뉴스레터 관리</a></li>'
gnb_html +=                '<li><a href="#">도서 관리</a></li>'
gnb_html +=            '</ul>'
gnb_html +=        '</div>'
gnb_html +=        '<dl class="personal">'
gnb_html +=            '<dt><span class="level">사원</span><span class="name pie">이지은</span></dt>'
gnb_html +=            '<dd><img src="img/iu.png"/></dd>'
gnb_html +=        '</dl>'
gnb_html +=        '<a class="btn_logout" href="#"><img src="img/btn_logout.png" alt="로그아웃"/></a>'
gnb_html +=    '</header>'
footer_html +='<footer>'
footer_html +='<div class="footer_con">'
footer_html +=    '<img src="img/copy.png" alt="Copyright ⓒ 2014 Udali Communications"/>'
footer_html +='</div>'
footer_html +='</footer>'

$(document).ready(function() {
  	$(".con_top").html(gnb_html);
    $(".con_footer").html(footer_html);
	var gnbHArr = [];
	gnbHArr[0] = 0;
	gnbHArr[1] = 125;
	gnbHArr[2] = 160;
	gnbHArr[3] = 160;
	gnbHArr[4] = 197;
	var overNum;
    var timeid;
    $(".gnb_back>.depth1").mouseover(function(){
		clearTimeout(timeid);
		overNum = $(this).index();
		menuActive()
	});
	$(".gnb_back>.depth1").mouseout(function(){
		overNum = -1
		timeid = setTimeout(function(){menuActive();},500);
	});
	$(".gnb>.depth1").mouseover(function(){
		clearTimeout(timeid);
		overNum = $(this).index();
	});
	$(".gnb_mask").mouseout(function(){
		overNum = -1
		timeid = setTimeout(function(){menuActive();},500);
	});
	function menuActive(){
		if(overNum == -1){
			$(".gnb_mask").clearQueue().stop().animate({"height":gnbHArr[overNum+1]},100);
		}else{
			$(".gnb_mask").clearQueue().stop().animate({"left":(132*overNum)+172,"height":gnbHArr[overNum+1]},300);
			$(".gnb").clearQueue().stop().animate({"left":-(132*overNum)},300);
		}
	}
	
	var time_quick;
	$(".quick_link").mouseover(function(){
		clearTimeout(time_quick);
		$(".quick_link>ul").slideDown(100);
		$(".arow").attr("src","img/arow_on.png");
	});
	$(".quick_link").mouseout(function(){
		time_quick = setTimeout(function(){
			$(".quick_link>ul").slideUp(100);
			$(".arow").attr("src","img/arow_off.png");	
		},100)
	});

});





