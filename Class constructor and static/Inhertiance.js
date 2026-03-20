
class Member {
    constructor(username) {
        this.username = username;
    }
        logME(){
            return ( ` \n Username is : ${this.username}`);
        }
}

// use the extend keyword to used the object and mthod of other class

class Teacher extends Member{
    constructor(username,dept,password){
        
        super(username);   //super is used to access the parent class — either to call its constructor or its methods.
        this.dept = dept;
        this.password = password;
    }

    working(){
        return `\n ${this.username} is working the dept of : ${this.dept}`;
    }
}

const Madam = new Teacher("sonu","CSE",345);
console.log(Madam.logME());
console.log(Madam.working()) ;