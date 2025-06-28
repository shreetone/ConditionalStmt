/* arr1=[]

console.log(typeof(arr1));

arr1[1,2,3,4]
colors=["pink","yellow","green"]
console.log(colors)

colors[3]='orange'
console.log(colors)

colors.push('purple')
console.log(colors)

/* colors.unshift('Blue')
console.log(colors) */
/* 
colors.pop()
console.log(colors)

colors.shift()
console.log(colors )

subcolor=colors.slice(2,3)
console.log(subcolor);

colors.splice(1,3,'light','maroon')
console.log(colors)


x=colors.includes('Yellow')
console.log(x)

indcolor=colors.indexOf('yellow')
if(indcolor!==-1){
    console.log("You can Buy")
    console.log(indcolor)
}else{
    console.log("You cannot Buy")
}


for(i=0;i<colors.length;i++){
    console.log(colors[i])
}
console.log('End')
for(x of colors){
    console.log(x)
}
console.log('End of for of')

for( i in colors){
    console.log(i,colors[i])
}
console.log('End of for in')  */

// Second larget number in an array is important for the interview

marks=[75,64,87,97,99,94]
total=0
for(i=0;i<marks.length;i++){
    total+=marks[i]

}
console.log(total)

highestMarks=0
secondHighest=0
for(i=0;i<marks.length;i++){
    if(highestMarks<marks[i]){
        highestMarks=marks[i]
    }
}
console.log(highestMarks)

highestMarks=0
secondHighest=0
for(i=0;i<marks.length;i++){
    if(highestMarks<marks[i] && secondHighest<marks[i]){
        highestMarks=marks[i]
        secondHighest=marks[i]
    }
}
console.log(highestMarks)

numArray = [1,2,3,4,5,6]
sqNumber = numArray.map((number)=>{
    return number * number
})
console.log(sqNumber)

sq1number = numArray.map((x)=>x*x)

console.log(sq1number);

evenArray = numArray.filter((z)=>{
    if(z % 2 == 0){
        return z
    }
})




