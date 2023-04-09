/*let total=sum(2,3);
displayConsole(total);
displayDOM(total);

function sum(x,y){
    let result=x+y;
    return result;
}

*/
sum(2,3,6,displayDOM);
sum(4,5,6,displayConsole);
// it has three parameters the first two are the numbers
// to be added and the last one is the callback
function sum(x,y,z,doSomething){
    let result=x+y+z;
    doSomething(result);
}

function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML=output;
}

let students=['winta','hana','lili'];
// we want to capitalize the first letter of the words.
students.forEach(capitalize); 
// capitalize the first letter
students.forEach(print);
// call all the elements of the array
function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);
    // substring(1) helps to display all the letters after index 1.
}
function print(elele){
    console.log(elele);
}

let numbers=[1,2,3,4,5];
let squares=numbers.map(square);
// here by using map method we make new array displayed.
squares.forEach(printe);

 function square(element){
    return Math.pow(element,2);
 }
 function printe(element){
    console.log(element);
 }
 

 let ages=[30,23,34,22,33,40];
 let adult=ages.filter(checkAge);
 adult.forEach(printed);
 function checkAge(element){
    return element>=30;
 }
 function printed(element){
    console.log(element);
 }

 let prices=[77,10,22,32,33,23,44,89];
 let total=prices.reduce(checkOut);
 // checkOut here is the callback.
 console.log(`The total is $ ${total}`);
  function checkOut(total,element){
    // total-contains the accumulated value 
    // element- is the element that we are in.
    return total+element;
  }

let the_list=[77,10,42,32,33,23,44,89];
the_list=the_list.sort(descendingSort);
the_list.forEach(printer);
function descendingSort(x,y){
    return y-x;   // an descending order
 // return x-y;   // an ascending order
}
function printer(element){
    console.log(element);
 }
 /*
 function sayHello(){
    console.log("Hello!");
 }
 sayHello();
*/
 
 const greeting =function (){
    console.log("Hello!");
 }
 greeting();

let count=0;
document.getElementById('increaseButton').onclick=function(){
    count+=1;
    document.getElementById('theLabel').innerHTML=count;
}

document.getElementById('decreaseButton').onclick=function(){
    count-=1;
    document.getElementById('theLabel').innerHTML=count;
    
}
/*
function increaseCount(){
    count+=1;
    document.getElementById('theLabel').innerHTML=count;
    
 }
 function decreaseCount(){
    count-=1;
    document.getElementById('theLabel').innerHTML=count;
    
 }
 */