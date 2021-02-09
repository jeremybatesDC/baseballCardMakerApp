function hexToRGB(hex) {
	return [
		parseInt("0x" + hex[1] + hex[2]),
		parseInt("0x" + hex[3] + hex[4]),
		parseInt("0x" + hex[5] + hex[6]),
	];
}
export { hexToRGB }