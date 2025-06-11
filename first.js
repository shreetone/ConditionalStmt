/* var clg="Willingdon";
console.log(clg);

 age=22;
console.log(age);

let color="white";
console.log(color);
let col="black";
console.log(col);


 if (false) {
let message = "Hello!";
console.log(message); 
}
else{
message="Bye";
console.log(message); 
}

const fruit=['Banana','mango','apple'];
fruit.push('pineapple');
console.log(fruit) ; 


 x=5
if(x==5){
 var name="wisdosm Sprouts";
}

 a=Number(prompt("Enter Your First Number"));
 b=Number(prompt("Enter Your First Number"));  

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log("first greater than second",a>b);
console.log("first less than second",a<b);
console.log("Are two number are equal?",a===b);
console.log("first greater than second",a!=b);


  Math=80;
  science=90;
  if(Math>90 && science>=85){
    console.log("Eligible");
  }
  else{
    console.log("Not Eligible");
  }

  let isAdult=true;
  let hasLicence=false;


  console.log(isAdult && hasLicence);
  console.log(isAdult || hasLicence);
  console.log(!isAdult);

x=10;
5=x;
console.log("Initial Value Of X:",x);
console.log("Initial Value Of X:",x+5);
console.log("Initial Value Of X:",x*3);
console.log("Initial Value Of X:",x);
console.log("Initial Value Of X:",x);

isLogin=false
if(isLogin){
  console.log("You Already Logged In");
}else{
  console.log("Please Login");
}

age=17;
if(age>18){
  console.log("Eligible for Vote");
}else{
  console.log("Not Eligible for Vote")
}

marks=34;
if(marks <35){
  console.log("Fail");
}else if(marks>35 && marks<60){
  console.log("Pass");
}else if(marks>60 && marks<75){
  console.log("Pass with first class");

}else if(marks>75 && marks<100){
  console.log("Pass with Distinct");
}


let i= 1;
for(let i=1;i<=5;i++)
{
  console.log(i);
}

n1=prompt("Enter The Number");

for(let n1;n1>0){
    console.log();
}


let num =4;
if(num % 2==0){
  console.log(" The Number is Even");
}else{
  console.log("Number is Odd");
}


let fact;
let number;

for(let i=1;i<=number;i++){
  fact=i*fact;
}
 */


/* let color="red";
if(color=="red"){
  console.log("Stop");
}
if(color=="yellow"){
  console.log("Go Slow");
}
if(color=="green"){
  console.log("Go")
} */

/* let size="L";
if(size=="XL"){
  console.log("250");
}else if(size=="L"){
  console.log("200");
}else if(size=="M"){
  console.log("100");
}else if(size=="M"){
  console.log("50");
}else{
  console.log("Not Available");
} */

/*   let str="apple";
  if(str[0]==="a"&& str.length>3){
    console.log("Good String")
  }else{
    console.log("Not a Good String");
  } */

/* let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wedensday");
    break;
  case 4:
    console.log("Thursdat");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

    default:
      console.log("");



}


 */

/* n=5;

for(i=1;i<=n;i++){
  line='';
  for(j=1;j<=5;j++){
    line+="*";
  }
  console.log(line);
} */

/* n=5;

for(i=1;i<=n;i++){
  line='';
  for(j=1;j<=i;j++){
    line+="*";
  }
  console.log(line);
} */

/* for(i=1;i>=1;i--){
  line='';
  for(j=1;j<=i;j++){
    line-=" *";
  }
  console.log(line);
} */

n=5;
for(i=1;i<=n;i++){
  line=' ';
  for(j=1;j<=n-i;j++){
    line+=' ';
  }
  for(j=1;j<=i;j++){
    line+=' *'
  }
  console.log(line);
}
for(i=1;i<=n-1;i++){
  line=' ';
  for(j=1;j<=i;j++){
    line+=' ';
  }
  for(j  = (n - i) * 2 - 1; j > 0; j--){
    line+=' *'
  }
  console.log(line);
}

