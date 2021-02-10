
// i think its a string but test first
async function removeBreaks() {
	setTimeout(() => {
		console.log('remove beaks');
		const clipContent = navigator.clipboard.readText();
		console.log(clipContent)
		//let daText = theText;
		//daText = daText.replace(/\r/g, "");
		//daText = daText.replace(/\n/g, "");
		//return daText
	}, 1);
}

export { removeBreaks }