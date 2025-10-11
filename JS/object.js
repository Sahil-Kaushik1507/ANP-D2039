
// () ==> function
// {} ==> Object
// [] ==> array

let myobj ={
    "first name" : "sahil",
    "last name": "Kaushik",
    age:24,
    gender:"M",
    phone: 1111111111,
    email: "sahil.kaushik@anudip.org",
    mykey: [1,2,34,5],

    printmail: function(){
            console.log(this.email)
    },
    
    
    myobj2:{
        subj: ["eng","hindi"]
    }
}    


console.log(myobj.myobj2.subj[1])





// console.log(myobj.age)

// console.log(myobj)
// console.log("age" + myobj["age"]);


// console.log(Object.keys(myobj)[1]+ " "+ myobj[Object.keys(myobj)[1]])

// console.log(Object.entries(myobj))

// myobj.phone=222222222;

// // Object.freeze(myobj)

// console.log(myobj.phone)

// myobj.course = "mca"

// console.log(myobj)


// console.log(myobj.hasOwnProperty("age"))

// myobj.printmail();