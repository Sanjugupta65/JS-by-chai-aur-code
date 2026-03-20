class User {
    // in JS we use constructor keyword to make a constructor , don't  use the class name for define a constructor
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
        
    }

    // function and method are the same things , when we use the function inside the class we called it method
    //making our own method for password encryption
    password_encryption(password){
        return `${this.password}abc` 
    }

    //changing usename into upper case
    changetoUpper(){
        return `${this.username.toUpperCase()}`;
    }
}

const us1 = new User("vikas","cks@g.com",342);
// console.log(` \n infori :`,us1);
// console.log(us1.changetoUpper());
// console.log(us1.password_encryption());











// suppose if class functionality is not available in JS so we make our code of class like this or bhind the seen of how the class work
// function which store the user data
function Client(namm,mail,pincode){
        this.namm = namm;
        this.mail = mail;
        this.pincode = pincode;
}

Client.prototype.password_strong = function(){
    return `${this.pincode}abc`
}
Client.prototype.LetterBig = function(){
    return `${this.namm.toUpperCase()}`;
}

const Client1 = new Client("ajay","aj@.com",872);
console.log(` \n${Client1.password_strong()}`);
console.log(Client1.LetterBig());





