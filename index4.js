  /*
  const answer=Math.floor(Math.random()*10+1);
  let guesses=0;
  document.getElementById('submitBtn').onclick=function(){
    let guess=document.getElementById('guessField').value;
    guesses+=1;
    if(guess==answer){
       alert(`${answer} is the no.It took you ${guesses} guesses`);
    }
    else if(guess<answer){
        alert("It is too small");
    }
    else{
        alert("Too large");
    }

  }
   */

  document.getElementById('submitButton').onclick=function(){
    let temp;
    if(document.getElementById('cButton').checked){
        temp=document.getElementById('textBox').value;
        temp=Number(temp);
        temp=toCelsius(temp);
        document.getElementById('tempLabel')
        .innerHTML=temp+"°C";

    }
    else if(document.getElementById('fButton').checked){
        temp=document.getElementById('textBox').value;
        temp=Number(temp);
        temp=toFahrenheit(temp);
        document.getElementById('tempLabel')
        .innerHTML=temp+"°F";

    }
    else{
        document.getElementById('tempLabel').innerHTML=
        "Please select a unit";
    }
  }
  
  function toCelsius(temp){
    return 5/9*(temp-32);
  }
  function toFahrenheit(temp){
    return 9/5*temp+32;
  }

  let fruits=["Banana","Papaya", "Avocado"];
  fruits[2]="Orange";
  fruits.push("lemon"); // ADD at the end
  fruits.pop(); //REMOVES the last index
  fruits.unshift("Ananas");// Add at the beginning
  fruits.shift(); // Removes the beggining element
  
  console.log(fruits);
  let a=fruits.length;
  let index=fruits.indexOf("Banana");
  console.log(index);
  console.log(a);
/*
  let prices_list=[5,12,45,67,340];
  for(let i=prices_list.length-1;i>=0;i--){
    console.log("This is the ", i ,"item:",prices_list[i]);
  }
  */
  let prices_list=[5,12,45,67,340];
  for(let price of prices_list){
    console.log(price);
  }
  /*
  let fruit=["Banana","Papaya", "Avocado"];
  fruit=fruit.sort().reverse();
  for(let fr of fruit){
    console.log(fr);
  }
  */

  let first=["Banana","Papaya", "Avocado"];
  let second=["Onion","Potato", "Antrio"];
  let third=["cow","ox", "goat","sheep"];

  let total_List=[first,second,third];
  total_List[0][2]="non-avocado"; 
  // the first for row the second is for column. Here it
  // replaces the given one at that index with another.
  for(let list of total_List){
    for(let last of list){
        console.log(last);
    }
  }
 
let num=[0,1,2,3,4,5,6,7,8,9];
let maximum=Math.max(...num);
console.log(maximum);

let class1=['Bafa','Sanas','Wigglesworth'];
let class2=['Rupi','Peter','John'];
class1.push(...class2);
console.log(...class1);

let z=1;
let b=2;
let c=3;
let d=4;
let e=5;
console.log(sum(d,e));
function sum(...numberss){
    let tot=0;
    for(let numb in numberss){
        tot+=numb;
    }
    return tot;
}