const person = {name:"protik", age:23, occupation:"student", salary:0000, address:"dhaka", friendsNames:["Roni","abir","Hasan"]};

const {name, age, friendsNames} = person; //it's fine if you= don't mauntain order
console.log(person.name);
console.log(name,age,friendsNames);

const friends = ["Rafiur", "Rahman", "Protik", "Masud", "Nure"];
const [firstName, secondName, ...restNames] = friends;
console.log(firstName);
console.log(secondName, ...restNames);

const complexObject = {
    name : "Complex",
    info :{
        age:20,
        address:"dhaka"

    }
}

const {address} = complexObject.info;
console.log(address);