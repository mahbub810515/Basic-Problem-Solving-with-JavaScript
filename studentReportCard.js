
function generateReportCard(student){
    let totalMarks=0;
    let totalSubject=0;
    let grade='';
    
    for(key in student){
       let item =student[key];
       if(typeof item !=='string'){
            totalMarks+=item;
            totalSubject++;
       }
    }
    let average= totalMarks/totalSubject;
    if(average>=90){
        grade="A+";
    }else if(average>=80){
        grade="A";
    
    }else if(average>=70){
        grade="B";
    }else{
        grade="F";
    }
    return {report:{name:student.name,totalMarks,average,grade}};
}

let student = { name:'Ayan', bangla:78, english:85, math:92 };
let result = generateReportCard(student);
console.log(result);