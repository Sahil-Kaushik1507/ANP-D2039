// callback fn. --> callback hell --> Promise --> Promise Chining --> Asyn Await

//Restro

// coustmer visit
// order place
// order cooking / wating
// order serve
// payment


// visit(
//     ()=>order(
//         ()=>cooking(
//             ()=>serve(
//                 ()=>payment())))

// );

operations();


async function operations(){
    await visit()
    await order()
    await cooking()
    await serve()
    await payment()
}


// visit()
//     .then(()=>order())
//     .then(()=>cooking())
//     .then(()=>serve())
//     .then(()=>payment())
//     .catch((err)=>console.log(err))



function visit(){
    return new Promise((resolve,reject)=>{
        console.log("coustmer visited....")
            setTimeout(()=>{
                console.log("Get the table and menu");
                resolve();
            },2000)

    })
 
}

function order(){
    return new Promise(resolve=>{
                    console.log("selecting from menu")
            setTimeout(()=>{
                console.log("order placed...")
                resolve();
            },5000)
            })
 
}

function cooking(nextstep){
     return new Promise(resolve=>{
    console.log("cooking started")
    setTimeout(()=>{
        console.log("cooking completed")
        resolve()
    },7000)
     })
}


function serve(){
     return new Promise(resolve=>{
    console.log("taking order from kitchen")
    setTimeout(()=>{
        console.log("served...")
        resolve();
    },1000)
})
}

function payment(){
     return new Promise(resolve=>{
    console.log("enjoying food")
    setTimeout(()=>{
        console.log("payment done")
    },4000)
     })
}



// visit(
//     ()=>order(
//         ()=>cooking(
//             ()=>serve(
//                 ()=>payment())))

// );


// function visit(nextstep){
//     console.log("coustmer visited....")
//     setTimeout(()=>{
//         console.log("Get the table and menu");
//         nextstep()
//     },2000)
// }

// function order(nextstep){
//     console.log("selecting from menu")
//     setTimeout(()=>{
//         console.log("order placed...")
//         nextstep();
//     },5000)
// }

// function cooking(nextstep){
//     console.log("cooking started")
//     setTimeout(()=>{
//         console.log("cooking completed")
//         nextstep()
//     },7000)
// }


// function serve(nextstep){
//     console.log("taking order from kitchen")
//     setTimeout(()=>{
//         console.log("served...")
//         nextstep();
//     },1000)
// }

// function payment(){
//     console.log("enjoying food")
//     setTimeout(()=>{
//         console.log("payment done")
//     },4000)
// }


