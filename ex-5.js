function calculateStudentGrade(score) {
  // Start coding here
  if(score >= 90 && score <= 100){
    return "A"
  }
  else if(score >= 80 && score <= 89){
    return "B"
  }
  else if(score >= 70 && score <= 79){
    return "C"
  }
  else if(score >= 60 && score <= 69){
    return "D"
  } 
  else if(score >= 50 && score <= 59){
    return "F"
  }
  else{
    return "F"
  }
}


let johnGrade = calculateStudentGrade(30);
console.log(`John grade is ${johnGrade}`);

let lisaGrade = calculateStudentGrade(73);
console.log(`Lisa grade is ${lisaGrade}`)

let janeGrade = calculateStudentGrade(80);
console.log(`Jane grade is ${janeGrade}`);

let jjGrade = calculateStudentGrade(60);
console.log(`JJ grade is ${jjGrade}`);

let alexGrade = calculateStudentGrade(90);
console.log(`Alex grade is ${alexGrade}`);

let alexxxGrade = calculateStudentGrade(120);
console.log(`Alex grade is ${alexxxGrade}`);//F