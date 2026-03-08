
//when we change in stack (permitive data)
let Myrealname = "Sanju";

let anothereName = Myrealname;
anothereName = "Bharat";

console.log(Myrealname);
console.log(anothereName);

// IN this pass the copy that's why original value will not change 

// when we change in heap (non permitive data

let userOne = {
    userEmail : "sanju@gamil.com",
    Password : 67893,
}

let userTwo = userOne;
userTwo.userEmail = "Bharat@gmail.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);

// Object by reference , that's why original value changed 