function add(num1, num2 = 20){ // num2= 20 is called default parameter
    // num2 = num2 || 30; //if only one parameter is passed we can use that
    return num1 + num2;
}

const result = add(20, 30); //if this is passed then default parameter will not be executed.
console.log(result);
