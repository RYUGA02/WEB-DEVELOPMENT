// For-in Loop

let student = {
    "First-name": "kush",
    "Last-name": "kumar singh",
    "age": "22",
    "job": "Full-stack developer",
    "favourite person": "mom"
}

for (var key in student) {
    // console.log(student[key]);
    console.log(key,":",student[key]);
}