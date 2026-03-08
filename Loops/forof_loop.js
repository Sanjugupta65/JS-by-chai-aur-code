
const arr = [44,89,23,90,85]
for (const index in arr) {    
        // const element = arr[index];
        // console.log(element)

        // or
        // console.log(arr[index])
    }


    // const word = "hello world"
    // for (const element of word) {
    //     console.log(`letters present in this are: ${element}`)
    // }


    const map = new Map()
    map.set('IN' , "india")
    map.set('UP' , "Utar Pardesh")
    map.set('MP' , "Madhay Pardesh")
    map.set('UK' , "Utharakhand")
    map.set('MP' , "Madhay Pardesh")   // (it will not shown in output) bcz ,If an element with the same key already exists, the element will be updated
    map.set('DL' , "Delhi");
     

    // console.log(map)
    for (const element of map) {
        // console.log(element)
    }


        ////when we use this we can easy acces the keys and values separately 
    for (const [key, value] of map) {
        // console.log(key)    // to access the keys
        // console.log(value)    // to access the values
    }




    const myObject = {
        game1 : "freefire \n",
        game2 : "pubg \n",
        game3 : "COD \n",
        geme4 : "frozen hirozen \n",
        game5 : "Little_NightMare \n"
    }


    // here we use forin loop
    for (const key in myObject) {
            
            // console.log(key)  // this is shown the key 

            // or
            // console.log(myObject[key])   // this will shown the value
        }



    const programming = [ "js" , "cpp", "python" , "ruby" , "java"]

    for (const key in programming) {
        // console.log(key)     // same here if we only use key it will print the keys
        // console.log(programming[key])   // if we use objectname[key] , it will print the values
    }












    // here we use foreach loop
    const Language = ["js", "cpp" , "python" , "java" , "ruby" , "go"]

    Language.forEach( function(it)  {
        console.log(it)
    });

    Language.forEach( (val,index,arr) => {
        // console.log(val , index, arr)
    })



    // if there is many object present in array 
    const coding = [
        {
            Language : "Javascript",
            filename : "js"
        },

        {
            Language : "c++",
            filename : "cpp"
        },

        {
            Language : "python",
            filename : "py"
        }
    ]


    coding.forEach( (key) => {
        // console.log(key.filename)

        // 
        // console.log(key.Language)
    })