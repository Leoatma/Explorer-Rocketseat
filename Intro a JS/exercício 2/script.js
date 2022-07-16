const studentList = [
  {
  name: "André", 
  firstScore: 7.5,
  secondScore: 5.3,
  classScore: 0.6
  },
  {
    name: "Giovani", 
    firstScore: 5.5,
    secondScore: 3.3,
    classScore: 0.3
  },
  {
    name: "Flávia", 
    firstScore: 4.5,
    secondScore: 4.3,
    classScore: 0.6
  },
  {
    name: "Catarina", 
    firstScore: 7.5,
    secondScore: 7.7,
    classScore: 0.5
  },  
]

function mediaScore() {

for (let student of studentList) {

  let mediaCalc = (((student.firstScore + (student.secondScore)) / 2) + (student.classScore)).toFixed(2);

      
      if (mediaCalc >= 7) {
      alert(`${student.name}: média ${mediaCalc}. Parabéns!!\nVocê está aprovado(a)! Em breve a equipe de seleção entrará em contato! 
      `)
    } else if ((mediaCalc < 7) && (mediaCalc >= 5)) {
      alert(`${student.name}: média ${mediaCalc}.\nContinue tentando!!\nGaranta o seu lugar na próxima seleção. 
      `)
    } else {
      alert(`${student.name}: média ${mediaCalc}. Reprovado(a).\nNão desista! Fique atento(a) a abertura do próximo processo seletivo!  
      `)
    }
  }
}

  
  
  
  
