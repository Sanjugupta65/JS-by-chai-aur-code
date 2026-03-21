
// here we learn about how can we changed the value of somthing whose value is cosntant 
// we all know that the value of PI is constant(3.14). we can't change it's value 

const valueofpi = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(valueofpi);

const chai = {
    namm : "ginger tea",
    price : 15,
    taste : "ginger type ",

    function(){
        console.log(`${price}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"namm"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value != "function"){
        console.log(`${key} : ${value}`)

    }
}


chai.price = 432;
for (let [key,value] of Object.entries(chai)) {
    if(typeof value != "function"){
        console.log(`${key} : ${value}`)

    }
}


// in above section we can easily accces the value of chai using our iteration now we disable the property of chai using method called define property 

Object.defineProperty(chai,'price',{
    writable : false ,
    // enumerable : false
})


// in below we change the price of tea but is will not affect or update the price with new price(786) bcz we disable the propety of writable(can't the update the values of rewrite the values) as false which means the price will not change
chai.price = 786;
for (let [key,value] of Object.entries(chai)) {
    if(typeof value != "function"){
        console.log(`${key} : ${value}`)

    } 
}

