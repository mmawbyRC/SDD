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
/* This function will read a text file containing
answers to the multiple choice question. The parameter is the exact
file name which should be in the flatfiles folder
*/
function loadFile(f_topic){
  const fileToRead = '../flatfiles/'+ f_topic +'.txt';
  console.log ('Read file: ', fileToRead);
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    console.log(xmlhttp.readyState);
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
      txt = xmlhttp.responseText;
      console.log('Read success: ', txt);
      loadAnswers(txt);
    }
  };
  xmlhttp.open("GET",fileToRead,true);
  xmlhttp.send();
}
/* This function will re-format the text file around
output the answers as an array of characters
*/
function loadAnswers(myFile) {
  console.log('loadAnswers');
  let allTextLines = myFile.split(/\r\n|\n/);
  for (let i=0; i<allTextLines.length; i++) {
    if (allTextLines[i] != ''){
        answersList.push(allTextLines[i].replace(","," "));
      }
    }
    console.log(answersList);
}

function errorHandler() {
      alert("File had nothing on it");
}
