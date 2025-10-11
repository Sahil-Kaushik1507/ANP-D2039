
const mypromise = new Promise((resolve, reject)=>{

let check = false

    if(check){

        resolve("promise resolved")
        
    } else{

        // resolve("promise rejected")
        reject ("promise rejected")
    }

})

// console.log(mypromise)

mypromise.then((data)=>console.log("req success" + data)).catch((data)=>console.log("req fail"+ data))



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))