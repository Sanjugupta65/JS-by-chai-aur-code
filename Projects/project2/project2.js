const form = document.querySelector('form');

form.addEventListener('submit' , function(keu) {
    keu.preventDefault ();

     const height = parseInt(document.querySelector('#height').value);
     const Weight = parseInt(document.querySelector('#Weight').value);
     const result = document.querySelector('#result');

     if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Pls give the valid height'
     }

    else if(Weight == '' || Weight < 0 || isNaN(Weight)){
        result.innerHTML = 'Pls give the valid Weight'
     }

     else{
    const  natija = (Weight / ((height*height) / 10000)).toFixed(2);
    result.innerHTML = `result is ${natija}`
    

    if(natija <18.9 ){
        result.innerHTML = ` you are Under-Weight,result is  ${natija}`
    }
    
    else if(natija > 18.6 && natija < 24.9){
        result.innerHTML = `you are in normal range , resutl is ${natija}`
    }

    else if(natija > 24.9){
        result.innerHTML = ` you are Over-weight , your result is ${natija}`
    }


     }

    


});





// use this individually seprate form above

// const body = document.querySelector('body');
// const con = document.querySelector('.container')
// button.addEventListener('click', function(key){
//     key.preventDefault()
// // body.addEventListener('click' , function(key) {
//     // console.log(key)
//     console.log(key.target.id)
//     // if(heig)
//     if(key.target.id === 'button'){
    
//         button.style.color = 'green'
//         button.innerText = 'submit ho gya';
//     }

// });
        
    

