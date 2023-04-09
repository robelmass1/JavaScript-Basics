/*
let age=window.prompt("How old are you?");

age=Number(age);
console.log(typeof age);
age+=1;
console.log(age);
*/
let x;
x=Boolean("");
console.log(x,typeof x);
/*
const pi=3.14159;
let radius;
let circumfrance;

radius=window.prompt('Input the radius of the circle');
radius=Number(radius);

circumfrance=2*pi*radius;
console.log('The circumfrance of the circle is : ',circumfrance);
*/
let a=-25.5;
let b=3;
let c=44;
let maxim;
let minim;
maxim=Math.max(a,b,c);
minim=Math.min(a,b,c);
let p=Math.PI;

console.log("The max is: ",maxim);
console.log("The min is: ",minim);
console.log(p);
/*
let a1;
let b1;
let c1;
a1=window.prompt("Height: ");
a1=Number(a1);

b1=window.prompt("Base: ");
b1=Number(b1);
c1=Math.sqrt(Math.pow(a1,2)+Math.pow(b1,2));
console.log("The hypotnuse is : ", c1);
*/
let a1;
let b1;
let c1;
document.getElementById("submitbutton").onclick=function(){

a1=document.getElementById("height").value;
a1=Number(a1);

b1=document.getElementById("width").value;
b1=Number(b1);

c1=Math.sqrt(Math.pow(a1,2)+Math.pow(b1,2));

document.getElementById("clabel").innerHTML="The result:"+c1;
console.log(c1);

}

let count=0;
document.getElementById("decreaseBtn").onclick=function(){
    count-=1;
    document.getElementById("countlabel").innerHTML=count;
    console.log(count);
}

document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;
    console.log(count);
}
document.getElementById("increaseBtn").onclick=function(){
    count+=1;
    document.getElementById("countlabel").innerHTML=count;
    console.log(count);
}
