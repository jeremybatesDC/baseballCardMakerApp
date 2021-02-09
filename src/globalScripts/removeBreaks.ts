console.log('remove beaks');

async function removeBreaks(theText: any) {
	setTimeout(() => {
		let daText = theText;
		daText = daText.replace(/\r/g, "");
		daText = daText.replace(/\n/g, "");
		return daText
	}, 1);
}

export { removeBreaks }