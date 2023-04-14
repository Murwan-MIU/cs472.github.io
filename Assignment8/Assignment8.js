"use strict"

// Problem 1
{
    let student = {
        firstName: "",
        lastName: "",
        grades: [],
        inputNewGrade: function(newGrade){
            this.grades.push(newGrade);
        },
        computeAverageGrade: function(){
            let sum = 0;
            for (let grade of this.grades) {
                sum += grade;
            }
            return sum/this.grades.length;
        }
    }

    let students = [];
    let student1 = Object.create(student);
    student1.firstName = "Eren";
    student1.lastName = "Yeager"
    student1.inputNewGrade(100);
    student1.inputNewGrade(90);
    students.push(student1);

    let student2 = Object.create(student);
    student2.firstName = "Mikasa";
    student2.lastName = "Ackerman"
    student2.inputNewGrade(90);
    student2.inputNewGrade(80);
    students.push(student2);

    let student3 = Object.create(student);
    student2.firstName = "Armin";
    student2.lastName = "Arlert"
    student2.inputNewGrade(80);
    student2.inputNewGrade(70);
    students.push(student3);

    let gradeSum = 0;
    for (let std of students) {
        gradeSum += std.computeAverageGrade();
    }
    let averageGradeForAllStudents = gradeSum/students.length;

    console.log("Problem 1: Using object literal, The average grade for all students is:", averageGradeForAllStudents);
}

// Problem 2
{
    function Student(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = [];
    }

    Student.prototype.inputNewGrade = function(newGrade){
        this.grades.push(newGrade);
    }

    Student.prototype.computeAverageGrade= function(){
        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }
        return sum/this.grades.length;
    }
    
    let students = [];
    let student1 = new Student("Eren", "Yeager");
    student1.inputNewGrade(100);
    student1.inputNewGrade(90);
    students.push(student1);

    let student2 = new Student("Mikasa", "Ackerman");
    student2.inputNewGrade(90);
    student2.inputNewGrade(80);
    students.push(student2);

    let student3 = new Student("Armin", "Arlert");
    student3.inputNewGrade(80);
    student3.inputNewGrade(70);
    students.push(student3);

    let gradeSum = 0;
    for (let std of students) {
        gradeSum += std.computeAverageGrade();
    }
    let averageGradeForAllStudents = gradeSum/students.length;

    console.log("Problem 2: Using Constructor Function, The average grade for all students is:", averageGradeForAllStudents);
    

}

// Problem 3
{
    Array.prototype.mysort = function () {
        let arr = this;   
        let len = arr.length;   
        for (let i = len - 1; i >= 0; i--) {     
            for (let j = 1; j <= i; j++) {       
                if (arr[j - 1] > arr[j]) { 
                    let temp = arr[j - 1];         
                    arr[j - 1] = arr[j];         
                    arr[j] = temp; 
                } 
            }   
        }   
        return arr;
    }  

    console.log("Problem 3: This array [9,6,4,2,10,8,5,2] after sorting:", [9,6,4,2,10,8,5,2].mysort());

}