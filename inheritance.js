class Parent{
    constructor(){
        this.fatherName = "David";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Mike");
const parent = new Parent();
console.log(baby.name);
console.log(parent.fatherName);
console.log(baby.getFullName()); // you've to call by child's object