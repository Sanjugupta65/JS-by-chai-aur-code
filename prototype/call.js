function Setusername(username){
    console.log("caleed")
    this.username = username;
}

function createuser(username,email,password){
    Setusername.call(this,username);

    this.email = email;
    this.password = password;
}

const us1 = new createuser("mangru","hoo@gmc.com",345);

console.log(us1)
 