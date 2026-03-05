// first task
function sumToFifty(el){
    let count = 0;
    while (count < 50){
        el = el + count;
        count++;
    }
    return el;
}

console.log(sumToFifty(0));

// second task
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }
    else {
        for (let i = n - 1; i > 0; i--){
            n = n * i;
        }
        return n;
    }
}
console.log(factorial(5));

// third task
function seson(month){
    switch (month){
        case 1:
        case 2:
        case 12:
            return "Winter";
            break;
        case 3:
        case 4:
        case 5:
            return "Spring";
            break;
        case 6:
        case 7:
        case 8:
            return "Summer";
            break;
        case 9:
        case 10:
        case 11:
            return "Autumn";
            break;
        default:
            return "Incorrect month number";
    }
}
console.log(seson(11));

// fourth task
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function addEven(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(addEven(arr));

// fifth task
const vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));

// sixth task
let base = 2;
let exponent = 3;

function power(base, exponent){
    let result = 1;
    for (let i = 0; i < exponent; i++){
        result = result * base;
    }
    return result;
}
console.log(power(base, exponent));
