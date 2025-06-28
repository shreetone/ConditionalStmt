//Arithmetic Operators 
a=Number(prompt("Enter Your First Number"));
b=Number(prompt("Enter Your First Number"));  

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Comparision Operators

 a=Number(prompt("Enter Your First Number"));
b=Number(prompt("Enter Your First Number"));

console.log("first greater than second",a>b);
console.log("first less than second",a<b);
console.log("Are two number are equal?",a===b);
console.log("first greater than second",a!=b);


// LOgocal Operator

Math=80;
  science=90;
  if(Math>90 && science>=85){
    console.log("Eligible");
  }
  else{
    console.log("Not Eligible");
  }

//Assignment Operator
// Declare variable x and assign initial value of 10

let x = 10;
console.log("Adding :",x += 5); 
console.log("After Multiplyaing By 3:",x *= 3); 
console.log(" After Subtracting 10:",x -= 10);  
console.log("Divide x by 2:",x /= 2); 
const modulus = x % 3; 
console.log("Modulus of x with 3:", modulus); 


// Operator Precedence
console.log("10 + 3 * 5 =", 10 + 3 * 5);        
console.log("(10 + 3) * 5 =", (10 + 3) * 5);   
console.log("20 / 2 + 3 =", 20 / 2 + 3);        
console.log("20 / (2 + 3) =", 20 / (2 + 3));    


// Combined Example
    function calculateRectangle() {
        const length = parseFloat(prompt("Enter length:"));
        const width = parseFloat(prompt("Enter width:"));
        const perimeter = 2 * (length + width);
        const area = length * width;
        const PerimeterGreater = perimeter > area;
        console.log("Perimeter:", perimeter);
        console.log("Area:",area);
        console.log("Is perimeter greater than area?",PerimeterGreater);
    }
    calculateRectangle();

//  Voting Eligibility Checker
function checkVotingEligibility() {
    const age = parseInt(prompt("Enter age:"));
    const citizenshipInput = prompt("Are you a citizen?");
    const citizenship = citizenshipInput.toLowerCase() === 'true';
    const isEligible = age >= 18 && citizenship;
    const isNotEligible = !isEligible;
    console.log("Eligible to vote:",isEligible);
}
checkVotingEligibility();

// Even or Odd
function checkEvenOdd() {
    const number = parseInt(prompt("Enter a number:"));
    if (number % 2 === 0) {
        console.log(`The number is even.`);
    } else {
        console.log(`The number is odd.`);
    }
}
checkEvenOdd();



// Calculate shopping discount
function calculateDiscount() {
    let total = parseFloat(prompt("Enter total amount:"));
    if (total > 100) {
        total *= 0.9;
    }
    console.log("Discounted total:",total.toFixed(2));
}
calculateDiscount();

 



