console.log('remove beaks');

setTimeout((theText: any) => {
	let daText = theText;
	daText = daText.replace(/\r/g, "");
	daText = daText.replace(/\n/g, "");
	return daText
}, 1);