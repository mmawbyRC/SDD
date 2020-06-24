/** @format */

function loadfile(topic) {
	var filePath = "../Q&Afiles/QA_Impl_" + topic + ".txt";
	getAsText(filePath);
	processData(textfile);
}

function getAsText(filePath) {
	let reader = new FileReader();
	// Read file into memory as UTF-8
	reader.readAsText(filePath);
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
}

function processData(textfile) {
	let allTextLines = textfile.split(/\r\n|\n/);
	for (let i = 1; i < allTextLines.length; i++) {
		if (allTextLines[i] != "") {
			namesList.push(allTextLines[i].replace(",", " "));
		}
	}
	arrayCreated = true;
	let output = document.getElementById("result");
}
