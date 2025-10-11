

//for each

// let arr = [11,12,13,14,15,16,17,18]

// let res= arr.forEach((element, index, arr)=>{

//     return element*2;
// })

// console.log(res)

// 22,24,26,28,30....36


// function foreach(){
//     for(i=0;i<arr.length;i++){
//         fun(arr[i],i,arr)
//     }
// }


// arr.forEach(value=>console.log(value))


// // map

// arr.map(value=>console.log(value))

// let res= arr.map((element, index, arr)=>{

//     return element*2;
// })

// console.log(res)


// function map(){

        // let arr=[]
//     for(i=0;i<arr.length;i++){
//         let a= fun(arr[i],i,arr)
// if(condition){

//     // arr.push(a)
// }
//     }

    // return arr; 
// }


// let cube = arr.map(val=>{ return val*val*val})

// console.log(cube)



// filter 

let arr = [11,12,13,14,15,16,17,18]

// let res= arr.filter(function(value, index, arr){
//     console.log(value,index,arr)
//     return value%2==0

// })

// console.log(res)

// let res = arr.filter(val=>val<15)

// console.log(res)

//reduce

let cart = [12,234,65,7643,7657,876,34,4234,534,234,5]

let sum = 0;

for(i=0; i<cart.length;i++){
    sum=sum+cart[i];    // 0 + 0 =0  i=1
                // 0 +1 =1      i=2
                // 1 +2 =3      i=3
                // 3 + 3 =6     i =4
}
console.log(sum)


// let res = cart.reduce((prev,curr, index,arr)=>{
//     return prev+curr

// },0)

let res = cart.reduce((prev,curr)=>prev+curr,100)
console.log(res)