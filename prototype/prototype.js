/*function mutliple(num){
        return num * 5
}

mutliple.power = 2;

console.log(mutliple(5))
console.log(mutliple.power)
console.log(mutliple.prototype) */











/*
function user(uername,score){
    this.uername = uername;
    this.score = score;
}

user.prototype.increment = function(){
    this.score++;
}

user.prototype.printME = function(){
    console.log(`score of user is: ${this.score}`)
}

const user1 = new user("chai",434);
const user2 = new user("tea",973);


console.log(user1)
console.log(user2)
console.log(user2.score);
user1.printME();
user1.increment();
console.log(user1.score);
*/







let hero = ["iron","captain"] ;

let heropower ={
    iron : "suit",
    captain : "syprum",

    getIron(){
        console.log(`Iron man power come form it's ${this.captain}`)
    }
}

// We are ingecting the our own method in object(actual object which is used in JS)
Object.prototype.OURown = function(){
    console.log(`add a default method in our object`);
}  

hero.OURown();


//  heropower.getIron();



 





//adding in new kind of property in  stirng this property is working according to our need 
//suppose when we use the space while giving value to our stirng the spaces will include in the length of the stirng ,but suppose here we only went to know the only the length of the letters we use in stirng value so we make a own method which give as the exert value 
let student_name = "sanju   "
// in above we use some space while declare our stirng but is will not consider in answer bcz we make our own method which only read the letters not space  
String.prototype.true_lenth = function(){
    console.log(`${this.trim().length}`)
}

student_name.true_lenth();
"mangrulal   ".true_lenth();
"halwi  ram".true_lenth();
