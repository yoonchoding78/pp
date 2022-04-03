 var mobilecheck = function () {
 var check = false;
 (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
 return check;
 }
$(document).ready(function() {
	if(mobilecheck()){
		$("html").addClass("mobile");
	}else{
		$("html").addClass("web");
	}
	setTotalSize();
	setTimeout(function(){
		$(".intro").css("display","none");
		$(".wrap").css("display","block");
		$("#contents").click(function(){
			closeKeyborad();
		});
		setTimeout(function(){
			closeKeyborad();
			sendQuestion();
		},500); 
	},2500);    
	printClock();
	getCurrentDate();
	setIscroll();
	
});
$(window).load(function(){
	setSlide();	
});
//portfolio
var isPortfolio = false;
function openPortfolio(_index){
	isPortfolio = true;
	var pagingTop = $(".header").height()+$(".header").width();
	$(".paging").css("top",pagingTop+"px")
	$(".wrap").css("position","absolute");
	$(".wrap").css("top","-100%");
	$(".wrap_slide"+_index).css("display","block");
}
function closePortfolio(_index){
	isPortfolio = false;
	$(".wrap").css("position","relative");
	$(".wrap").css("top","auto");
	$(".wrap_slide"+_index).css("display","none");
	openKeyborad();
}
//slide
var swiper1;
var swiper2;
function setSlide(){
	swiper1 = new Swiper('.swiper-container1', {
		pagination: '.swiper-pagination1',
		paginationClickable: true,
		nextButton: '.swiper-button-next1',
		prevButton: '.swiper-button-prev1',
		onSlideChangeEnd: function (swiper1) {
      		writeSlideTitle(swiper1.realIndex,1);
  		}
	});
	swiper2 = new Swiper('.swiper-container2', {
		pagination: '.swiper-pagination2',
		paginationClickable: true,
		nextButton: '.swiper-button-next2',
		prevButton: '.swiper-button-prev2',
		onSlideChangeEnd: function (swiper2) {
      		writeSlideTitle(swiper2.realIndex,2);
  		}
	});	
	var h = $(".wrap").height()-($(".wrap").width()+$(".top").height());
	$(".portfolio").height(h);
	$(".wrap_slide1").css("display","none");
	$(".wrap_slide2").css("display","none");
	writeSlideTitle(0,1);
}
function writeSlideTitle(_index,_type){
	var txt = $(".wrap_slide"+_type+" .swiper-slide").eq(_index).find(".title").text();
	$(".wrap_slide"+_type+" .my_nick").text(txt);
}



//QnAs
var QAIndex = 0;
var isQAing = false;
var questionObj ={
	"첫인사":[
		"안녕 반가워! 개발자 윤창수라고 해~ ",
		"이곳은 내 포트폴리오 사이트고 pc으로도 볼수 있지만 모바일로 보는게 편할꺼야",
		"아래 가상키보드에 메뉴를 눌러서 이곳을 둘러볼수있어~"
	],	
	"너는 누구야?":[
		"내가 좀 유치해서 윤초딩이라는 별명이 있구ㅋㅋ 사는 곳은 서울 보라매역 인근에 살고 있어.",
		"나이는 사팔청춘 40이구... 좀 많지?ㅎㅎ 성격은 무난히 사회생활 할 정도는 되는거 같어!! 헤헤"
	],	
	"뭐 할줄 알아?":[
		"플래시로 사회생활을 시작했는데 플래시가 망하는 바람에ㅠㅠ",
		"힘들었지만, 그래도 나름 미리 준비해서 안정적으로 웹프론트엔드 개발로 전향했어.",
		"지금은 주업무가 웹퍼블리싱이고, 안주하지 않고 자기계발을 통해 nodejs, 모바일 게임 앱, 하이브리드앱, VR도 만들 줄 알아~"
	],	
	"작업한거 보여줘":[
		"링크줄께. 기달려봐~",
		'<a href="javascript:openPortfolio(1);" style="text-decoration:underline;">2015~2017 작업 보러가기</a><br> 좌우로 드래그 하면서 볼수 있어~'
		
	],	
	"특별한 작업은 없어?":[
		"보러가기줄께~",
		"<a href='javascript:openPortfolio(2);' style='text-decoration:underline'>2015~2017 특별작업 보러가기</a><br> 좌우로 드래그 하면서 볼수 있어~",
	],	
	"연락처는?":[
		"작업하는거야!?",
		"농담이구ㅋㅋ 폰은 010 6617 2136 이메일은 berserk78@naver.com 이니깐 스팸만 보내지 말아줘~"
	],	
	"옛날작업 뭐있어?":[
		"<a href='portfolio_2014/index.html' target='_blank' style='text-decoration:underline'>2015 이전 작업 보러가기</a>",
		"위에 보러가기를 새창링크로 볼수 있을꺼야~"
	]
};
var idCursorBlink;
var isOpenKeyborad = true;
function openKeyborad(){
	removeCursorBlink();
	if(isOpenKeyborad == false){
		$(".bottom").animate({bottom:0},300,function(){
			var	contentH = $(".con_main").height()-($(".header").height()+$(".bottom").height());
			$("#contents").css("height",contentH+"px");
			myScroll.refresh();
			cursorBlink();
		});
	}
	isOpenKeyborad = true;	
}
function closeKeyborad(){
	removeCursorBlink();
	if(isOpenKeyborad == true){
		var h = ($(".wrap").width()*0.5472)*-1;
		$(".bottom").animate({bottom:h+"px"},300,function(){
			var contentH = $(".con_main").height()-($(".header").height()+$(".text_bar").height());
			$("#contents").css("height",contentH+"px");
			myScroll.refresh();
			//cursorBlink();
		});
	}	
	isOpenKeyborad = false;	
}
function removeCursorBlink(){
	$(".cursor").css("display","none");
	clearTimeout(idCursorBlink);
}
function cursorBlink(){
	$(".cursor").toggle();
	idCursorBlink = setTimeout(function(){
		cursorBlink();
	},500);
}
function inputQuestion(_string){
	$(".question_txt .txt").text(_string);
	if(_string == ''){
		$(".btn_send").css("display","none");
	}else{
		$(".btn_send").css("display","block");
	}
}
function sendQuestion(){
	var _string = $(".question_txt .txt").text();
	if(QAIndex==0){
		_string = "첫인사";
		$(".current_date").css("display","block");
	}else{
		$(".btn_send").css("display","none");
		_string = $(".question_txt .txt").text();
		$(".question_txt .txt").text("");
		var meHtml = "";           
		meHtml += '<div class="talk_me talk_me'+QAIndex+'">';
		meHtml += '<div class="talk_text talk_text_me">';
		meHtml += '<span class="txt">'+_string+'</span>';
		meHtml += '<div class="con_time_txt">';
		meHtml += '<div class="time_txt">'+$(".wrap .time").text()+'</div>';
		meHtml += '</div>';
		meHtml += '</div>';
		meHtml += '<img class="tail_me"src="img/tail2.png"/>';
		meHtml += '</div> ';
		$("#scroller").append(meHtml);
		var talk = $(".talk_me"+QAIndex);
		var talkHeight = talk.find(".talk_text").height()+($(".wrap").width()/100*9);
		talk.css("margin-bottom",talkHeight);
	}
	QAIndex++;
	moveScrollQA();
	
	if(isQAing == false){
		isQAing = true;
		var index = 0;
		var questionTotal = questionObj[_string].length-1;
		for(var i=0; i<=questionTotal; i++){
			setTimeout(function(){
				if(index == questionTotal){
					sendAnswer(questionObj[_string][index],false);
					var overlapMsg = new Array("엥? 또 그 질문이야? 그래도 난 친절하니깐 대답해줄께ㅋㅋ");
					if(overlapMsg[0] != questionObj[_string][0]){
						questionObj[_string] = overlapMsg.concat(questionObj[_string]);
					}
				}else{
					sendAnswer(questionObj[_string][index],true);
				}
				index++;
			},(2000*i)+1000);
		}
	}else{
		var yoonHtml = "";
		yoonHtml += '<div class="talk_yoon talk_yoonNo'+QAIndex+'">';
		yoonHtml += '<div class="psa"><img src="img/psa.png"/></div>';
		yoonHtml += '<div class="psa_name">윤초딩</div>';
		yoonHtml += '<div class="talk_text talk_text_yoon">';
		yoonHtml += '<span class="txt">성격 급하구나 ㅋㅋ 대답부터 듣고 질문해줘!</span>';
		yoonHtml += '<div class="con_time_txt">';
		yoonHtml += '<div class="time_txt">'+$(".wrap .time").text()+'</div>';
		yoonHtml += '</div>';
		yoonHtml += '</div>';
		yoonHtml += '<img class="tail_yoon"src="img/tail1.png"/>';
		yoonHtml += '</div>';
		$("#scroller").append(yoonHtml);
		var talk = $(".talk_yoonNo"+QAIndex);
		var talkHeight = talk.find(".talk_text").height()+($(".wrap").width()/100*5);
		talk.css("margin-bottom",talkHeight);
		moveScrollQA();
	}
}
function sendAnswer(_string, _isQAing){
	var yoonHtml = "";
	yoonHtml += '<div class="talk_yoon talk_yoon'+QAIndex+'">';
	yoonHtml += '<div class="psa"><img src="img/psa.png"/></div>';
	yoonHtml += '<div class="psa_name">윤초딩</div>';
	yoonHtml += '<div class="talk_text talk_text_yoon">';
	yoonHtml += '<span class="txt"><img style="width:'+($(".wrap").width()*0.078125)+'px;" src="img/keyAni.gif"/></span>';
	yoonHtml += '<div class="con_time_txt">';
	yoonHtml += '<div class="time_txt">'+$(".wrap .time").text()+'</div>';
	yoonHtml += '</div>';
	yoonHtml += '</div>';
	yoonHtml += '<img class="tail_yoon"src="img/tail1.png"/>';
	yoonHtml += '</div>';
	$("#scroller").append(yoonHtml);
	var talk = $(".talk_yoon"+QAIndex);
	var talkHeight = talk.find(".talk_text").height()+($(".wrap").width()/100*5);
	talk.css("margin-bottom",talkHeight);
	moveScrollQA();
	setTimeout(function(){
		talk.find(".talk_text .txt").html(_string);
		talkHeight = talk.find(".talk_text").height()+($(".wrap").width()/100*5);
		talk.css("margin-bottom",talkHeight);
		QAIndex++;
		moveScrollQA();
		//setTimeout(function(){
		isQAing = _isQAing;
		//},300);
	},1000);
}
function moveScrollQA(){
	myScroll.refresh();
	var sH = $("#scroller").height();
	var cH = $("#contents").height();
	if(sH > cH){
		myScroll.scrollTo(0,cH - sH,300);
	}
}
//iscroll
var myScroll;
function setIscroll(){
	myScroll = new IScroll('#contents', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		click:true
	});
}
function setTotalSize(){
	//web H:970px min
	if($(window).height() > 970){
		$(".web .con_main").height($(window).height());
	}else{
		$(".web .con_main").height(970);
	}
	//mobile H:970px min
	$(".mobile .con_main").height($(window).height());
}
//current date
function getCurrentDate(){
  var week = new Array('일', '월', '화', '수', '목', '금', '토');
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var dayName = week[today.getDay()];
  $(".current_date .txt").text(year+"년"+month+"월"+day+"일"+dayName+"요일")
}
//current time
function printClock() {
    var clock = document.getElementById("time");
    var currentDate = new Date();
    var amPm = '오전';
    var currentHours = addZeros(currentDate.getHours(),2); 
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);
    if(currentHours >= 12){ 
    	amPm = '오후';
    }  
	if(currentHours >= 13){ 
		currentHours = addZeros(currentHours - 12,1);
	}
    $(".time").text(amPm+" "+currentHours+":"+currentMinute);
    setTimeout("printClock()",1000); 
}
function addZeros(num, digit) { 
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}