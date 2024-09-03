// Javascript Strings




// Creating a string using various methods avialable on the Javascript platform

// method - 1  normal method 

// let str = "kush kumar singh";
// console.log(str);

// method - 2  normal method

// let str = 'kush kumar singh';
// console.log(str);

// method - 3  template literals method

// let str = `kush kumar singh`;
// console.log(str);



// If you try to try to write "" inside the same quotes that you used to create the string then javascript will give you error.
// example : let str = " we are going "on" vacation" ---> the on part will give you the error simply so you have 2 options to fix it.
// 1) use Template literals to create the string .
// 2) use the escape sequence charachter where you are going to write the "" code .

//                   Pratical  Implementation

//          Using the template literals method

// let str = `kush kumar singh is a "good" person.`;
// console.log(str);


//         Using the escape sequence method

// let str1 = "kush kumar singh is a \"bad \" boy!";
// console.log(str1);


// String  as an Object   -------   to create the string as an object we have to use new keyword.(always)

let string1 = new String("kush kumar singh");
console.log(string1);
console.log(typeof (string1));



// String Interpolation  ----  substitutes values of variables into placeholders in a string.


// let name1 = "Kush Kumar Singh";      //  1st method
// let str = `My name is ${name1}.`;
// console.log(str);


// let name1 = prompt("Enter Your name !");   // same method just taking input from the user. 
// let str = `My name is ${name1}.`;
// console.log(str);


// let name2 = " kush kumar singh";
// console.log("The name of my name is:",{name2});
// console.log(typeof(name2));


// String Indexing 

// let strIndex = "Kush Kumar Singh";
// console.log(strIndex[0]);
// console.log(strIndex[1]);
// console.log(strIndex[2]);
// console.log(strIndex[3]);
// console.log(strIndex[4]);
// console.log(strIndex[5]);
// console.log(strIndex[6]);
// console.log(strIndex[7]);
// console.log(strIndex[8]);
// console.log(strIndex[9]);
// console.log(strIndex[10]);
// console.log(strIndex[11]);
// console.log(strIndex[12]);
// console.log(strIndex[13]);
// console.log(strIndex[14]);
// console.log(strIndex[15]);

// or Effectively just use the For Loop.
// let str2 = "Kush kumar singh";
// for (let i = 0; i <= 15; i++) {
//     console.log(str2[i]);
// }


// String Methods and Properties.



//  To Find the length of the string.
let str = "Chicken Lover";
console.log(str.length);  // Note that space is also calculated.


// To change the lowercase to uppercase
console.log(str.toUpperCase());


// To change the uppercase to lowercase
console.log(str.toLowerCase());


// To Concatenate you have 2 methods ---> 
// 1) using the + operator 

let str1 = "kush Kumar singh";
let str2 = "Rajput";
console.log(str1 + " " + str2);

// 2) Using the concatenate property of the string.

console.log(str1.concat(str2));
// console.log(str1.concat(" ", str2, " ", "Is a good Person really?"));


// To remove the whitespaces from the string use the trim property of the string.

let StringSpace = "       Happy Birthday     ";
console.log(StringSpace.trim());


// To replace the string charachter from the string just use the replace properties.
console.log(StringSpace.replace("Happy","sad"));


// To Extract the some part of the string just use the substring or the slice propery of the string.
let SliceString = " Have a good life with your family.";
console.log(SliceString.substring(8,13));
console.log(SliceString.slice(8,13));