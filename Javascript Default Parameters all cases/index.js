// Javascript Default Parameter all cases.


// case-1 ---- Single valued Default Parameter

// function Hello(myName="kush"){
//     console.log("Hello! my name is :",myName);
// }
// Hello();

// case-2 ---- Multi valued Default Parameter

// function fullName(fName="Lord",lName="Krishna"){
//     console.log("Throughout the heaven and earth . I",fName,lName, "alone is honoured one. ");
// }
// // fullName("Lord","Shiva");
// fullName();


// case-3 ---- one default parameter is dependent on other.


// function upperCase(LowerName="kush",UpperName=LowerName.toUpperCase()){
//     console.log("My lowercase name is:",LowerName,"and my uppercase name is:",UpperName);
// }

// // upperCase("vishal","ARKO");
// upperCase();


// case-4 ---- passing the object as the default parameter

// function passingObj (value={name:"kush",age:22,result:"Pass"}){
//     console.log("The Object is:",value);
// }
// // passingObj(100);
// passingObj();


// case-5 ---- passing the array as the default parameter

// function passingArray (value = ["kush",1,"pass","Be good Boy!",100]){
//     console.log("The Array Value is:",value);
// }
// // passingArray('vishal');
// passingArray();



// case-6 ---- passing default parameter arguments as null

// function nullVal (value = "King"){
//     console.log(value);
// }
// nullVal(null);


// case-7 ---- passing default parameter arguments as undefined

// function undefinedVal(value=100){
//     console.log("The value of Undefined is:",value);
// }
// undefinedVal(undefined);   // in case of undefined value passed as argument in default parameter in function we get the output as we have defined and initailized as default value . In this case I got value as 100 as I have initialized my default parameter as 100.


// case-8 ---- passing the function as default parameter

function sum(firstVal, secondVal) {
    return firstVal + secondVal;
}

function printResult(Name = "Virat Kohli", result = sum(firstVal, secondVal)){
    console.log("My name is:",Name,"and the sum of my two paper is:",result);
}

let result = sum(92,98);
console.log(result);
printResult("Mahendra Dhoni",result);