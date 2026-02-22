 const clock = document.getElementById('clock')
 console.log(clock)

 // this is set time interval 
 setInterval( function () {
    const tarik = new Date();
    clock.innerHTML = tarik.toLocaleTimeString();
 },1000);