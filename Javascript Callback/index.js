// Javascript Callback function

// normal callback function
// function sum(a,b){
//    console.log(a+b)
// }

// function printingSUM( a , b , Sumcallback){
//    Sumcallback(a,b)
// }

// printingSUM(20,30,sum)   // Here sum is a callback function


// ---------------------------------------------------------------------------------------------------------------

// taking the data by id_name with a delay of 2sec using callback function.
function getData(dataId, nextDataId){
    setTimeout(() => {
        console.log("data:",dataId)
        if(nextDataId){
           nextDataId()
        }
        
    },2000)
} 
 


getData(1, () => {     // callback hell problem
    console.log("Getting the data 2-----")
    getData(2, () => {
        console.log("Getting the data 3-----")
        getData(3 , () => {
            console.log("Getting the data 4-----")
            getData(4, () => {
                console.log("Getting the data 5-----")
                getData(5)
            })
        })
    })
})
