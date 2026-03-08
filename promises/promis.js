// here we create the promise
/*const promise_one = new Promise(function(reslove,reject){
    //do any task
    setTimeout(function(){
        console.log('\nasync task is complete');    
    },1000)
}); 
//consuming the promise
promise_one.then(function(){
    console.log("Promise consumed")
})*/



// in the above code the the .then function is not showindg result(promise consumed bcz we don't use the resolve() inside the created the promise)
/*see how to send data of promise to .then function using resolve() */
/*const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function(){
     resolve("\nuser_name : sanju "); // if we not use the resolve function the value will not goes to .then function
    },2000);
});
// when we use the .then it will take the value/data from promise
myPromise.then(function(value) {
  console.log(value);
  console.log("getting data from promise succefully")
});*/


// in above we store the promise in some variable ,now we don't store promise in any variable and direct doing work on it
/*new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("\ndirect work on promise without store it in any variable")
        // reslove();  // if we want to share/send value to .then fucntion so don't forget to use resolve
    },1000);
}) .then(function(){
    console.log("\ndirect using the .then\n")
})*/




 // now the both resolve and reject 
/*const promise_four = new Promise(function(reslove,reject){        
        let error = false;
        if(!error){
            reslove({username : "sanju", id : "718"});
        }
        else{
            reject(`\n'ERROR'somthing wrong`)
        }
}) 

promise_four.then((result)=> {
    console.log(result);
    return result.id
})
.then((result) =>{
    console.log(result);
})
.catch((err) => {
   console.log(err); 
}).finally(() =>{
    console.log(`Everything working fine`);
})*/







// we can also we asyn and await
/*const promise_five = new Promise(function(reslove,reject){

    let error = true;
    if(!error){
        reslove({username : "hwllo ..", id :"738"});
    }
    else{
        reject(`"Error", somthing unsual happens`);
    }
})

async function usinasync() {
    try {
        const response = await promise_five;
    console.log(response);
    } catch (error) {
        console.log(error)
    }    
}
//execute the async function
usinasync();*/










const userinfo = new Promise(function(reslove,reject){
    const inoofoo =  fetch(`https:/randomuser.me/api/`)
    reslove(inoofoo);
    reject('somthing wrong');
})

userinfo.then((result) =>{
    return result.json();
})
.then((mail) =>{
    console.log("\n")
    console.log("informations is : ")
    console.log(mail)
})
.catch((err) =>{
    console.log(err);
})


