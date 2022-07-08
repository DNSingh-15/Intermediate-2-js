console.log(`hello`);

// Arrow Functions

_hello = () => {
    console.log(`hello world`);
}
_hello();

// function returning something
greet = () => {
    return `Good Morning`;
}
console.log(greet());

// if we have only statement then we should write arrow function like this ---
// for one line code doesn't require {} and return keyword.
_greet = () => `good morning`;
console.log(_greet());

// Arrow Function With two orguments:
_name = (name, age) => `his name is ${name} and age ${age} years`;
console.log(_name("dn", 36));

// Arrow Function Without Parentheses: ---
_hello2 = name => "Hello " + name;
console.log(_hello2("Riya"));




// question 4 with arrow function - BMI Calculator Advanced with some randome conditions --with the using variable interpretation
bmiCalculator = (weight, height) => {

    var bmi = weight / Math.pow(height, 2);
    var interpretation;

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi} , so you are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you have overweight.`;
    }
    return interpretation;
}
console.log(bmiCalculator(95, 2));




// Leap year concept with Arrow function
_isLeap = (year) => {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return `${year} is a leap year`;
            } else {
                return `${year} is not a leap year`;
            }
        } else {
            return `${year} is a leap year`;
        }
    } else {
        return `${year} is not a leap year`;
    }
}
console.log(_isLeap(2020));




// question 5 with Arrow function  --- write a function to adding the number inside the empty aray and evry single time when we run the code number will increase.
var arr = [];
var count = 1;

_addNum = () => {
    arr.push(count);
    count++;
    return arr;
}
console.log(_addNum());

// In Ques. 4  when arr is divisible by 3 change by a "DN" and if arr is divided by 4 change by "Singh"
_changeNum = () => {
    if (count % 3 == 0) {
        arr.push("DN");
    } else if (count % 4 == 0) {
        arr.push("Singh");
    }
    else {
        arr.push(count);
    }
    count++;
    return arr;
}
console.log(_changeNum());




//  Question 7 --while loop question -- print something  relaedt to bottles in decreasing order from 99
var bottles = 99;
_bottles = () => {
    while (bottles <= 99) {
        return `${bottles} Bottles of the beer on the on wall`;
    }
    bottles--;
}
console.log(_bottles());



// task 1
const arr1 = [1, 2, 3];
var arr2 = [];

arr1.forEach(_arrFunction);
function _arrFunction(item) {
    arr2.push(item);
    console.log(arr2);
}

// or
arr2.push(arr1[0]);
arr2.push(arr1[1]);
arr2.push(arr1[2]);
// or   --using Concat method
var arr2 = arr1.concat(arr2);
// or    --using spread method
arr2.push(...arr1)

console.log(arr2);



// task 2
var _arr = [2, 22];
i = 0;
for (i = 0; i < 50; i++) {
    _arr.push(i);
}
console.log(_arr);




// fibonacci concept
_fibonacci = (n) => {
    var output = 0;
    if (n == 0) {
        output = [0];
    } else if (n == 1) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for(i = 2; i < n + 1; i++){
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output
}
console.log(_fibonacci(6));