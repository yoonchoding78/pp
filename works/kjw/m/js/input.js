function set_radio($label,$input,num){	
	if($label==undefined){
		$label = "radioLabel"
	}
	if($input==undefined){
		$input = "radioInput"
	}
	$("."+$input).attr("checked",false);
	if(num!=undefined){
		selectRadio($("."+$label+":eq("+num+")"),$("."+$input+":eq("+num+")"))
	}
	$("."+$input).css({"position":"absolute","top":"0px","left":"-9999px"});
	var prevImg;
	$("."+$label).click(function(e){
		e.preventDefault();
		var radioInput = $(this).prev("input");
		var radioLabel = $(this);
		selectRadio(radioLabel,radioInput);
	});
	function selectRadio($label,$radio){
		$radio.attr("checked",true);
		var imgSrc;
		if(prevImg != null || prevImg != undefined){
			imgSrc = prevImg.attr("src");
			prevImg.attr("src",imgSrc.replace("on","off"));
		}
		imgSrc = $label.find("img").attr("src");
		$label.find("img").attr("src",imgSrc.replace("off","on"));
		prevImg = $label.find("img");
	}
	this.trigger  = function(idx){
		$("."+$label).eq(idx).trigger("click");
	}
}
function set_chk($label,$input,num){
	var preChkLabel;
	this.limit;
	var $this = this;
	
	if($label==undefined){
		$label = "chkLabel";
	}
	if($input==undefined){
		$input = "chkInput";
	}
	$("."+$input).attr("checked",false);
	if(num!=undefined){
		selectChkBox($("."+$label+":eq("+num+")"),$("."+$input+":eq("+num+")"));
	}
	$("."+$input).css({"position":"absolute","top":"0px","left":"-9999px"});
	$("."+$label).click(function(e){
		e.preventDefault();
		preChkLabel = $(this)
		var chkInput = $(this).prev("input");
		var chkLabel = $(this);
		
		selectChkBox(chkLabel,chkInput);
	})
	function selectChkBox($label,$chk){
		var selLimit = $("."+$input+":checkbox:checked").length
		if($this.limit == null || $this.limit == undefined || selLimit < $this.limit || $chk.is(":checked") == true){
			var labelImg = $label.find("img");
			var labelImgSrc = $label.find("img").attr("src");
			if($chk.is(":checked") == true){
				$chk.attr("checked",false);
				labelImg.attr("src",labelImgSrc.replace("on","off"));
			}else if($chk.is(":checked") == false){
				$chk.attr("checked",true);
				labelImg.attr("src",labelImgSrc.replace("off","on"));
			}
		}else{
			alert($this.limit+"개 이상 선택하실 수 없습니다.")
		}
	}
	this.resetTrigger = function(){
		var preChkInput = preChkLabel.prev("input");
		selectChkBox(preChkLabel,preChkInput);
	}
	
	this.trigger = function(idx){
		preNum = $("."+$label).eq(idx)
		$("."+$label).eq(idx).trigger("click");
	}
}