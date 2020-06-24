let answersList = [];
function runQuiz(topic){
  alert(topic);
  /*
  Load Q&A file
  for i = 1 to 3:
    display q and options
    mark
  display total
  */
  loadFile(topic);
}

function loadFile(f_topic){
  fileToRead = readFile();

  alert('here now');
  xmlhttp.onload =loadHandler;
  xmlhttp.onerror = errorHandler;
}
function readFile(){
  console.log('readFile');
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    alert(xmlhttp.readyState);
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
      txt = xmlhttp.responseText;
      alert(txt);
    }
  };
  xmlhttp.open("GET","sample.txt",true);
  xmlhttp.send();

  return xmlhttp;
}
function loadHandler(event) {
  alert('loadHandler');
  let csv = event.target.result;
  let allTextLines = csv.split(/\r\n|\n/);
  for (let i=1; i<allTextLines.length; i++) {
    if (allTextLines[i] != ''){
        answersList.push(allTextLines[i].replace(","," "));
      }
    }
    console.log(answersList);
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Cannot read file!");
  }
}
