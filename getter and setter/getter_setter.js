class Bachaa{
    constructor(namm,password){
        this.namm = namm;
        this.password = password;
    }

    get password(){
        // return this.U_password.toUpperCase()
         this.U_password = 786
    }

    set password(value){
        // this.U_password = value.toUpperCase();
         this.U_password = value.toUpperCase();
    }
}

const B1 = new Bachaa("sanu","t@.cm");
console.log(B1)