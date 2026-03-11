const name = "Sanju";

const Reposcount = 5;

console.log(name + Reposcount + " wow !");

// Best way to write above in better way 
console.log(`My name is ${name} and number to my repositories on github is ${Reposcount} and i know there is no unique thing in this reposo `)

// Another method to declare the string 
 const School = new String(`Mimit`);

 console.log(`convert into lowercase ${School.toLowerCase()}`);  // convert stirng in lower case
 const length = School.length;
 console.log(`length of new string (mimit) is  ${length} `);
 
//   name.length();
  console.log (name.slice(1,4));  // slice(startindex,endindex) endindex is not included in output
  console.log (name.length);        //[string.length]   find lenght of string
  console.log(name[3]);            //   str[]    find the this index which letter is present 
  console.log(name.charAt(3));    //   find the this index which letter is present
  console.log(name.indexOf('u'));  //find at which index this element or letter is present

  let low = name.toLowerCase()      // convert string into lowercase
  console.log(name.toUpperCase());  // convert string into uppercase


  const series = "    stranger things";
  console.log(series);
  console.log(series.trim())   // trim() will remove space form starting and ending

  // console.log(name.replace('n','p'));   // replace value with new value
  console.log(`this is replace the words like in name(sanju) it replace 'n' with 'p' ==  ${name.replace('n','p')} `);


  const website_url = "https/google%48find.com";
  console.log(`website-url before replce == ${website_url}`);
  console.log(`website-url after replace == ${website_url.replace('%48','@#')}`)


  console.log(website_url.includes('google'));  // this will show given keyword is present or not 