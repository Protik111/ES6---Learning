// function addIt(a,b){
//     return a + b;
// }

// arrow  function
const addIt = (num1,num2) => num1+num2;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const sub = num2 - num1;
    const result = sum * sub;
    return result;
}

const result = addIt(20,60);
console.log(result);

const result2 = doMath(2,3);
console.log(result2);