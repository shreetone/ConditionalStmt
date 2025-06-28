 const student={
        name:"shree",
        age:20,
        cgpa:8.47
}

student.subject="math";
student.cgpa=9.9;
console.log(student)


const book={
    title:"C",
    auther:"Dennies Ritchie",
    detail:"this is the programming language book",
     details:{
    pages: "C17,c18",
    genre:"procedural programming language"
    }
}

console.log(book)
console.log(book.details.pages);
console.log(book.details.genre);


let product={
    name:'Maggie',
    price:20,
    stock:true
}
console.log(product)
if(product==true){
    console.log(true)
}else{
    console.log(false)
}

const calculator = {
  add: function(num1, num2) {
    return num1+num2;
  },
  subtract: function(num1, num2) {
    return num1-num2;
  },
  multiply:function(num1,num2){
    return num1*num2;
  },
  division:function(num1,num2){
    return num1/num2;
  }
};
console.log(calculator.add(5, 3));      
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(30,10));
console.log(calculator.division(5, 3)); 


let person1={
    name:"Shree",
    age:22,
   
}
let person2={
        name:"Shree",
        age:22,
    }
console.log(person1);
if (person1.name == person2.name) {
    console.log("Both persons have the same names!");
} else {
    console.log("Both persons have different names!");
}
if (person1.age == person2.age) {
    console.log("Both persons are the same age!");
} else {
    console.log("Both persons are of different ages!");
}

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans); 

/* 
for(let i=1;i<=5;i++){
  console.log(i)
}

console.log("Odd Number")

for(let i=1;i<=15;i=i+2){
  console.log(i)
}

console.log("Even Number")

for(let i=2;i<=20;i=i+2){
  console.log(i)
} */

/* let n=prompt("Enter your name")
n=parseInt(n)

for(let i=n;i<=n*10;i=i+n){
  console.log(i)
} */

/* for(let i=1;i<=3;i++){
  pat="";
  for(let j=1;j<=3;j++){
    console.log(j)
  }
} */


/* const favMovie="Dildar";
let guess=prompt("guess my favourite movie");
while((guess != favMovie) && (guess !="quit")){
     guess= prompt("wrong guess,please try again");
     console.log(favMovie)
}
 */