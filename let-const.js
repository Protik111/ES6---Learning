const name = "protik";
console.log(name);

const names = ["rafiur", "protik"];
names.push("rahman");
console.log(names);

let newName = "hello";
newName = "hey";
console.log(newName);

let sum = 0;
for(var i = 0; i<10; i++){ // if you use let in for loop it won't be accessable from outside of the scope
    sum = sum + i;
}
console.log(i);