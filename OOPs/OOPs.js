// const user = {
//     name : "sanju",
//     id : 983,
//     singIn : true,

//     getuserinf(){
//             console.log("\nhlloe iwtoji iseeix")
//     }
// }

// console.log(user) 
/* @@@@@@@@@@reson why the above function is worked differently@@@@@@@@@@ 
Why You See undefined After the Function Output
This happens because of how console.log(user.getuserinf()) works — it's doing two things:
Step 1 — user.getuserinf() is called, which runs the function and prints:
hlloe iwtoji iseeix
Step 2 — console.log(...) tries to print the return value of getuserinf(). Since your function has no return statement, it implicitly returns undefined. So it prints:
undefined

The Fix
Option A — Remove the outer console.log (since the function already logs internally):
javascriptuser.getuserinf(); // just call it directly
Option B — Use return instead of console.log inside the function:
javascriptgetuserinf() {
    return "\nhlloe iwtoji iseeix"; // now console.log() has something to print
}*/










// const user = {
//     Name : "ajeu",
//     follower : 12,

//     getuerin : function(){
//         // return (`user name is ${this.Name}`);
//         console.log(this)
//     }
// }

// // console.log(user)
// console.log(user.getuerin())
// console.log(this)


function student(Name,rollno,id){
    this.Name = Name;
    this.rollno = rollno;
    this.id = id
    
    this.hello = function(){
        return (`wellocom to clgh`);
    }

}

 const s1 =  new  student("ajeu",342,987);
const  s2 = new student("juue",345,783);
console.log(s1);
console.log(s1.hello);