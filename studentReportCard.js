
function generateReportCard(student) {

    if (typeof student !== "object" || Array.isArray(student) === true) {
        return "Invalid for object";
    }
    if (typeof student.bangla !== "number" || typeof student.english !== "number" || typeof student.math !== "number") {
        return "Invalid number";
    }
    //this code for getting dynamic  value
    // for(key in student){
    //    let item =student[key];
    //    if(typeof item !=='string'){
    //         totalMarks+=item;
    //         totalSubject++;
    //    }
    // }
    let totalMarks = student.bangla + student.english + student.math;
    let grade = '';
    let average = totalMarks / 3;
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";

    } else if (average >= 70) {
        grade = "B";
    } else {
        grade = "F";
    }
    return { report: { name: student.name, totalMarks, average, grade } };
}
//console the result  for testing the app
let student = { name: 'Ayan', bangla: 78, english: 85, math: 92 };
let result = generateReportCard(student);
console.log(result);
student = { name: 'Ayan', bangla: "78", english: 85, math: 92 };
result = generateReportCard(student);
console.log(result);
student = [20, 58];
result = generateReportCard(student);
console.log(result)