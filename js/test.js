function runTest(){
  alert('stub for Test');
  /*
  Load Q&A file
  for i = 1 to 3:
    display q and options
  for i = 1 to 3:
    mark
  display total
  */
}

function showQuestion(question) {
  questionElement.innerText = question.question
}



const questions = [
  {
    question: 'How many grams of Ag will be produced from 5.00g of Cu and 1.00g of AgNO3',
    answers: [
      { text: '0.635 grams of Ag', correct: true },
      { text: '0.324 grams of Ag', correct: false },
      { text: '0.633 mols of Ag', correct: false },
      { text: '63 grams of Ag', correct: false }
    ]
  },
  {
    question: 'A 50.6 g sample of Mg(OH)2 is reacted with 45.0 g of HCl. What is the theoretical yield of MgCl2 in grams?',
    answers: [
      { text: '58.6 moles of MgCl2', correct: false },
      { text: '30.23 grams of MgCl2', correct: false },
      { text: '58.6 grams of MgCl2', correct: true },
      { text: '100 moles', correct: false }
    ]
  }
]
