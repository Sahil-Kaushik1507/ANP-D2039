


// let a = 10;
// let b = 20
// let c = a+b;
// console.log(c)

// let d= 10;
// let e = 20
// let f = a+b;
// console.log(f)



// function method

//normal

// function add(a,b){
//     console.log(a+b);
    
// }

// add(10,4);
// add(10,40);
// add(10,34);
// add(124,4);

//var fun

// var myfun1= function (a,b){
//     console.log(a+b);
// }


// myfun1(10,4);


// arrow fun

// let myfun2=(a,b,)=>{

//     console.log(a+b)
//     return a+b;

// }

// myfun2(12,55);


//  without return keyword

// let myfun2=(a,b)=>(a+b)
// myfun2(12,55);


// function (a){
//     return a*a;
// };

// 
// myfun3(12,55);


//iife


// (
//     ()=>{
//         console.log("hello world")
//     }
// )();

// (
//     ()=>{
//         console.log("hello world")
//     }
// )();


// add(10,4)

// add3(5);

// console.log(a)
// console.log(b)

// var a = 10;
// let b = 20;

// console.log(a)
// console.log(b)

// function add(a,b){

//     console.log(a+b)

//     function add3(x){
//         console.log(a+b+x)

//         function add4(y){
//             console.log(a+b+x+y)
//         }


//     }
// }


function count(){
    var count = 1;
    return function (){
        count++
        console.log(count)
    }
}

let result= count();


result();
result();
result();
result();
