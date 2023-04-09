let x=Math.floor(Math.random()*20)+1;
console.log(x);
/*

let userName="  Robel Massebo  ";
userName=userName.trim();
let nameLength=userName.length;
console.log("The length of the word is :",nameLength);
userName=userName.toLocaleUpperCase();
console.log(userName.charAt(2));
console.log(userName.lastIndexOf("o"));
console.log(userName);

*/
let phone="0912-828-2272";
phone=phone.replaceAll("-"," ");
console.log(phone);

let fullName="Robel Massebo";
let firstName;
let lastName;
firstName=fullName.slice(0,fullName.indexOf(" "));
lastName=fullName.slice(fullName.indexOf(" ")+1);

console.log("firstName: ",firstName);
console.log("lastName: ",lastName);

let userName="robel";

let letter=userName.charAt(0).toLocaleUpperCase().trim();

console.log(letter);

let age=44;
if(age>20){
    console.log('You are an adult');
}
else if(age<20){
    console.log('You are young');
}
else {
    console.log('You are elder')
}

let online=true;
if(online){
    console.log('You are online');
}
else{
    console.log('You are offline');
}


document.getElementById('mybut').onclick=function(){
const mycheck=document.getElementById('mycheck');
const visaBtn=document.getElementById('visaBtn');
const paypalBtn=document.getElementById('paypalBtn');
const cashBtn=document.getElementById('cashBtn');
    
if(mycheck.checked){
    console.log('Thanks for Verifying');
   }
   else{
       console.log('You didnot subscribe');

   }
        if(visaBtn.checked){
            console.log('Thanks you choose Visa');
        }
        else if(paypalBtn.checked){
            console.log('Thanks you choose Paypal');
        }
        else if(cashBtn.checked){
            console.log('Thanks you choose Cash');
        }
        else{
            console.log('You have to select method of payment');
        }
    

}

let grade="A";
switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("This is not grade");
        
}

let temp=55;
if(temp>0 && temp<25){
    console.log('It is nice temprature ');
}
else if(temp>25&& temp<45){
    console.log('It is summer temprature ');
}
else{
    console.log('It is out of normal');
}

for(let count=0; count<5; count++){
    for(let j=0; j<5; j++){
    
        document.getElementById('myRect').innerHTML+="$";
        console.log(j);
    }
    document.getElementById('myRect').innerHTML+="<br>";
    console.log("It is ",count);
    
}

function begin(){
    let user="Robel";
    let age=22;
    apl(user,age);
    
}
begin();

function apl(u,a){
console.log("Welcome here our guest",u);
console.log("Welcome here our guest");
console.log("Welcome here our guest");
console.log("You are ",a,"years");
}
let length;
let width;
let area;

length=10;
width=20;

area=calculate_the_area(length,width);

console.log("The area of the rectangle is: ",area);

function calculate_the_area(length,width){
    let answer=length*width;
    return answer;
    // return length*width;
}

let adu=checkAge(10);
console.log(adu);
function checkAge(age){
    return age>18?true:false;
}

function cheakWinner(win){
    win?console.log('You win'):console.log('You lose');
}
cheakWinner(true);


    for( var i=0;i<6;i++){
        //console.log(i);
    }

console.log(i);

let me="Robel";
let items=3;
let total=100;

console.log(`Hello ${me}`);
console.log(`You have ${3} items in the list`);
console.log(`Your total discount price is $ ${total}`);

let text=`Hello ${me} <br>You have ${3} items in the list <br>
Your total discount price is $ ${total}`;

document.getElementById('mynew').innerHTML=text;

let myNum=40;
myNum=myNum.toLocaleString(undefined,{style:"unit",unit:'kilometer'});
console.log(myNum);