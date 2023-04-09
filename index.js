console.log("Aimed for a vision");
let fName='Artum';
let size='10';
size=size+101;
console.log(fName);
console.log(size);   
console.log(fName);
console.log(size); 
console.log("How are you "+fName);   
console.log("My size is "+size); 
                                    
document.getElementById("first").innerHTML="Hello "+fName;
document.getElementById("second").innerHTML="My size :"+size;

let answer=1/2*3+(4-2);
console.log(answer);

let user;

document.getElementById("mybutton").onclick=function() {
    user=document.getElementById("myname").value;
    console.log(user);
   // both the above 2 lines work the same way
    
   document.getElementById("usernamehtml").innerHTML=user;
   document.getElementById("mybutton").innerHTML="Thanks for submitting";

}

