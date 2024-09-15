// Javascript classes


// Class creation

// class Anime {
//     // Properties or state
//     main_charachter = "Kush Kumar Singh";
//     Female_charachter = "Ada Wong";
//     Age = 27;
//     height = 180;

//     // Behavior or Functionality
//     fighting() {
//         console.log("My name is :", this.main_charachter, "and my fighting skill is: Swordsmanship");
//         console.log("My name is :", this.Female_charachter, "and my fighting skill is : Protecting  my main_characther");
//     }

//     cooking(){
//         console.log(this.main_charachter,"Don't Cook!");
//         console.log(this.Female_charachter,"Only Cooks for her Lover :",this.main_charachter);
//     }
// }

// // creating new Object using the new keyword.
// let objectCreated = new Anime();

// // Accessing the data members of Anime class using the dot(.) operator.
// console.log(objectCreated.main_charachter);



// Public and Private class

// class Human{
//     // state or properties
//     age = 27;   //public data members
//     #wt = 60 ; // private data members
//     ht = 180 ;
//     //behavior or functionality
//     walking(){
//         console.log("I am Walkimg like Buggati!",this.#wt);
//     }
//     eating(){
//         console.log("I am Eating only the fresh foods.");
//     }

//     get fetchWeight(){
//        return this.#wt;
//     }
//     set updateWeight(value){
//         this.#wt = value;
//     }

// }
// //creating the object using the new keyword
// let obj = new Human();
// // accesing the public data members
// console.log(obj.age);
// // accessing the private data members
// // console.log(obj.#wt); // This will give the error as it is a private data members and cannot be accessed outside the class so to acccess it we have to use the getter and setter function.
// // obj.walking();
// let result = obj.fetchWeight;
// console.log(result); 


// constructor ---- The constructor method is a special method of a class for creating and initializing an object instance of that class
// class Songs {
//     // state or properties
//     Name;
//     rating;
//     composer = "Atif Aslam";
//     // behavior or functionality
//     smoothing() {
//         console.log("The music is so Smoothing!");
//     }
//     pleasantSound() {
//         console.log("The song is so pleasant and heart touching !");
//     }

//     // constructor 
//     constructor(nameOfSong, ratingOfSong) {
//         this.Name = nameOfSong;
//         this.rating = ratingOfSong;
//     }
// }

// // creating the object of the class
// let Osm = new Songs("O saathi", 100);
// // Initailizing the constructor value -- just give the value in the bracket where you have created object of the class. In my case Songs("O saathi",100);
// // accessing the value is simple just use the dot operator
// console.log(Osm.Name, " ", Osm.rating);




