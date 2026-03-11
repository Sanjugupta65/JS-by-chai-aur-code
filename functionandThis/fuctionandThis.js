// here we perform some function

// let a = 78
// if(true){
//     const a = 9
//     const b = 17
//     console.log("inner a : ",a);

// }

// console.log(a)
// // console.log(b)



function one(){
    const person = "sanju"

    function Two(){
        const website = "youtube"
        console.log(person)
        console.log(website)
    }
 
    Two()
}

one()









// here we perform some this function

const user = {
     username :    "sanju",

    welcomemessage : function(){
        console.log(`${this.username} , welcome to our website`)
     }
}

// console.log(user.welcomemessage())
user.welcomemessage()
console.log("\n")
user.username = "sna"
user.welcomemessage()




function chai() {
    console.log(this)
}

// chai()







//here we perform Arrow operations 

const addtow = (num1 , num2)  => (num1 + num2)

console.log(addtow(2,5));



// IFFE using it yhe global scope se hone wle pollution or function ko immedatialy invoke karne kelye use karte hai
// ifffe use karte time previous function ke end me ;(semicolon) mat bhulana
// // function chai(){
//     console.log("ifffe using here")
// }
// chai()

// performing same task using iffe
// (function chai(){
//     console.log("ifffe using here") 
// })() ;        // in first parentheses (function) and second for excution of function     


// // writting iffe using Arrow
// ( (name) => {
//     console.log(` ${name } , using iffe with arrow function and (previous fuction ke end me semicolon mat bulna)`)
// }) ("MUnna")


const n = 10
for (let index = 0; index <10; index++) {
    // const element = index;
    console.log(index)
    
}
