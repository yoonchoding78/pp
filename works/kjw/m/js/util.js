function getLocationFileName(){//주소창의 파일명 리턴
	var data = [];
	var url = String(location);
	data = url.split("/");
	console.log(data[data.length-1].split(".")[0]);
	return data[data.length-1].split(".")[0];
}
function getLocationParameter(name){//주소창의 파라미터(name)명을 입력하면 그의 값 리턴
	var data = [];
	search=location.search;
	search=search.split("?");
	if(!search[1]){
		console.log("변수가 없습니다.");
		return false;
	}else{
		if(search[1].indexOf(name)==(-1)){
			console.log("찾는 변수가 없습니다.");
			return false;
		}else{
			data = search[1].split("&");
			for(var i=0; i<data.length; i++){
				if(data[i].split("=")[0] == name ){
					console.log(data[i].split("=")[1]);
					return	data[i].split("=")[1];
				}
			}
		}
	}
}
