console.log("Tutorial of type conversion and type coercion");
let numVar = 45;
numVar = String(numVar);// converted in string
// console.log(numVar);
// console.log(typeof numVar);

let booleanVar =String(true);
// console.log(booleanVar);
// console.log(typeof booleanVar);


let arrVar = String([45, 2, 4, "sanjay", true]);
// console.log(arrVar);
// console.log("The length of array is : ",arrVar.length);// length will different in array time and string time.


let date = String(new Date());
// console.log(date);
// console.log((typeof date));

//ANOTHER WAY TO CONVERT ANY DATA TYPE TO STRING📌📌📌
let i = 45;
// console.log(i.toString());// converted in string 

// convert any variable to number📌📌📌
let str = Number("255");
// console.log(str);
// console.log((typeof str));


let arr = Number([5, 1, 2, 9]);
// console.log(arr);
// console.log((typeof arr));

let boolVar =  Number(false);// true -- 1 and false --2
// console.log(boolVar);

// // parseInt and parseFloat function📌📌📌
let num = parseInt(12.255);
// console.log(num);
// console.log((typeof num));

let num2 = parseFloat(12.255);
// console.log(num2);
// console.log(num2.toFixed(10));

// // TYPE COERCION📌📌📌
let number1 =Number('110');
let number2 =210;
console.log(number1+number2);

