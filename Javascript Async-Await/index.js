// Javascript Async-await 


// Creating javascript async function
 function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
            },4000)
    })
}

async function printingData(){
    await getData(1);
    console.log("getting the data2 .....")
    await getData(2);
    console.log("getting the data3 .....")
    await getData(3);
    console.log("getting the data4 .....")
    await getData(4);
    console.log("getting the data5 .....")
    await getData(5);
    
}

// printingData()



// Instead of calling the function printingData() we can use the javascript IIFE

(async function printingData(){
    await getData(1);
    console.log("getting the data2 .....")
    await getData(2);
    console.log("getting the data3 .....")
    await getData(3);
    console.log("getting the data4 .....")
    await getData(4);
    console.log("getting the data5 .....")
    await getData(5);
    
})();    // this is called the javascript IIFE (Immediately Invoked Function Expression)

