// // Objedt literals


// // declare a symbol

// const hai = Symbol("anything")
// const userdata = {
//     name : "Yuraj",
//     // using symbol here as a key and don't foget to use brackedt while using it
//     [hai] : "mysymbol",
//     age : 15,
//     email : "Yuvi@gmail.com",
//     location : "Gidderbaha",
//     have_premium : false,
//     Peak_watch : ["Saturday", "Monday"],

//     // suppose we declare a variable like this 
//     "last name" : "Gupta"
//     // we can only acces this with userdata["last name"]
// }

// console.log(userdata.email);  
// console.log(userdata["name"])  // both the way is correct to acces the data 
// console.log(userdata["last name"])   // but when we declare the data in string this is only way to acces the data 
// console.log(userdata[hai])

// console.log("\n")
// userdata.location = "Bathinda"
// console.log(`User data after changing location : `)
// console.log(userdata)
// console.log("\n")
// Object.freeze(userdata);   //when we use this we can't change data in object or can't  do anything  with object
// userdata.name = "sanju"
// console.log(userdata);

// // using fuction in and don't forget to comment the .freeze it will generate problem bcz after using freeze we can't do anything with object
// userdata.solve = function hello() {
//     console.log(`hello users i am here to help you , My name is ${userdata.name}`);
    
// }

// console.log(userdata.solve())
















//making a Object 
// const tinder = new Object() 

// //giving value of object form outside 
// tinder.name = "sanju"
// tinder.age = 78
// // console.log(tinder)


// // making nested object inside the object 
// const tinderdata = {
//     name : "username ",
//     statusbar : "single",
//     other_info : {
//         locatio : "Noida",
//         work_status : "Student",
//         looking_for : {
//             age : "18 - 20",
//             colour : "does't matter",
//             location : "local (Noida)"
//         }
//     }
// }

// console.log(tinderdata.other_info)
// console.log(tinderdata.other_info.looking_for)  // we use . and . to acces the data 

// //// using Object.key of acces all the key present in Object 
// console.log(Object.keys(tinderdata))

// // // access the value of object
// console.log(Object.values(tinderdata))

// // Determines whether an object has a property with the specified name 
// console.log(tinderdata.hasOwnProperty('name'))  // given booean result



// concate the objects
// const obj1 = { a : 1 , b:2}
// const obj2 = { b: 3, c: 4}
// const obj3 = { d: 5 , e : 6}

// const combine = {...obj1,...obj2,...obj3}
// console.log(combine )   











/// De-structure the Object or setting name in short words
// const course = {
//     coursename : "JS in hindi",
//     coursefee : 989,
//     coursetecher : "HItesh sir",
//     courselanguage : "hindi"
// }

// //// sometime we need use this data , but the data name is big so we use De-structure to set big name in short form
// /// we not need to course.courselanguage to acces the just use this and data can acces by using only courselanguage
// const {courselanguage} = course

// console.log(courselanguage)  // if we not use the const {value} = objectname , we need course.courselanguage to acces the data
// //// or we can also use to set 
// const {courselanguage : language} = course
// console.log(language)

















