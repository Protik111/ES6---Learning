class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "High School";
    }
}

const student1 = new Student(1, "Protik");
const student2 = new Student(2, "Rahman");
console.log(student1, student2);
console.log(student1.id, student1.name);