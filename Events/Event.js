// document.getElementById('jhon').onclick = ( function (){
//         alert('jhon wick')
//     })


        // best way to for the above code
// document.getElementById('jhon').addEventListener('click' , function(e){
//     alert('jhon wick is here ');
    
// })










// //Capturing and Bubbling 
// document.querySelector('.photo').addEventListener('click' , function(){
//     console.log('Your are clicking on ul photo')
//     // alert('Your are clicking on ul photo')
// },false)   //to use bubbling, set it as false 

// document.getElementById('jhon').addEventListener('click' , function(e){
//      e.stopPropagation()   // when we use this only jhon wick is here work or execution not goes to root element
//     console.log('jhon wick is here ');
//     // alert('jhon wick is here ');
// }, false) 
 









//// here we going to remove the photo along with its parent
// if we only select the item.target the photo will hide , but the dot of li will visible so we select the parentNode for this
document.querySelector('.photo').addEventListener('click' , function(item) {
    // console.log(item.target.parentNode)

    // console.log(item.target.tagName);
    let  removeIt = item.target.parentNode;
    // removeIt.remove();
        ////or other method
    // removeIt.parentNode.removeChild(removeIt)  


    /// in above code if we click anywhere in browser when (preview/look file on browser)  things instead of img all the img will remove bcz it will select the whole ul
    //// that's why we using checking condition
    if(item.target.tagName === 'IMG'){
        removeIt.remove(); 
    }
})   