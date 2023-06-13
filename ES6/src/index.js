import Marks from './Marks'
class Student{
    constructor(rollNo,firstName,lastName,marks){
        this.rollNo=rollNo;
        this.firstName=firstName;
        this.lastName=lastName;
        this.marks=marks;
        this.totalMarks=0;
    }
    calculateTotalMarks() {
        this.marks.forEach((mark1) => {
          this.totalMarks += mark1.mark;
        });
      }

}

const student1 = new Student(1,"Omkar","Tambe",[
  new Marks('Maths',100),
  new Marks('Science',97),
  new Marks('History',90)
  ]);

const student2 = new Student(2,"Rishab","Singh",[
    new Marks('Maths',95),
    new Marks('Science',94),
    new Marks('History',91)
    ]);

const student3 = new Student(3,"Vishal","Ashiwal",[
      new Marks('Maths',60),
      new Marks('Science',60),
      new Marks('History',60)
      ]);

const studentArray =[student1, student2, student3];
studentArray.forEach((student) => {
  student.calculateTotalMarks();
});

var percentages = studentArray.map((student)=>{
  return student.totalMarks / 300 * 100;
});
console.log(`Array of students percentage: ${percentages}`);


var studentWithDistinction=studentArray.filter((student)=>{
  return student.totalMarks>=200;
});
var numberOfStudentWithDistinction = studentWithDistinction.length;
console.log(`Students with Distinction: ${numberOfStudentWithDistinction}`);


function printStudentDetails(rollNo){
    var flag=false;
  studentArray.find((student) =>{
    if(student.rollNo==rollNo)
    {
      console.log(`${student.rollNo} ${student.firstName} ${student.totalMarks}`)
      flag=true;
    }
  });
  if(flag==false)
  {
    console.log(`Roll number not present`)
  }
}
printStudentDetails(2);