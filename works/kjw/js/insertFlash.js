function insertFlash(swf, width, height, id, flashvars)
{
	var strFlashTag = new String();

	if (navigator.appName.indexOf("Microsoft") != -1)
	{
		strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
		strFlashTag += 'id="' + id + '" width="' + width + '" height="' + height + '">';
		strFlashTag += '<param name="movie" value="' + swf + '"/>';

		if(flashvars != null) {strFlashTag += '<param name="flashvars" value="' + flashvars + '"/>'};
		strFlashTag += '<param name="quality" value="best"/>';
		strFlashTag += '<param name="scale" value="noscale"/>';
		strFlashTag += '<param name="wmode" value="transparent"/>';
		strFlashTag += '<param name="allowScriptAccess" value="always"/>';
		strFlashTag += '</object>';
	}
	else
	{
		strFlashTag += '<embed src="' + swf + '" ';
		strFlashTag += 'quality="best" ';
		strFlashTag += 'width="' + width + '" ';
		strFlashTag += 'height="' + height + '" ';
		strFlashTag += 'scale="noscale" ';
		strFlashTag += 'id="' + id + '" ';
		strFlashTag += 'wmode="transparent" ';
		strFlashTag += 'allowScriptAccess="always" ';
		if(flashvars != null) {strFlashTag += 'flashvars="' + flashvars + '" '};
		strFlashTag += 'type="application/x-shockwave-flash" ';
		strFlashTag += 'pluginspage="http://www.macromedia.com/go/getflashplayer">';
		strFlashTag += '</embed>';
	}

	document.write(strFlashTag);
}