const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach( (boot) => {
    console.log(boot);
    boot.addEventListener('click' , function(key) {
        // console.log(key)
        console.log(key.target.id)

        // if(key.target.id === 'grey'){
        //     console.log("yes");
        //     body.style.backgroundColor = 'grey'
        // }
        // if(key.target.id === 'white'){
        //     console.log("yes");
        //     body.style.backgroundColor = 'white'
        // }
        // if(key.target.id === 'blue'){
        //     console.log("yes");
        //     body.style.backgroundColor = 'blue'
        // }

        color = key.target.id;
        switch (color) {
            case 'grey':
                body.style.backgroundColor = key.target.id // or 'grey' //or key.target.id
                break;

            case 'white':
                body.style.backgroundColor = 'white'
                break;

            case 'green':
                body.style.backgroundColor = 'green'
                break;

            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
        
            default:
                console.log("Plz select the box")
                break;

        }
        
        
    });
});


