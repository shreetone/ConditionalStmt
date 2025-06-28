studMarksField=document.querySelector("#studMarks")
result=document.querySelector("#MarksShow")

marksArray=[]

function displayMarks(){
    MarksShow.textContent=marksArray.map((t,)=>{

    })
}


function newMarks(){
        addMarks = studMarksField.value 
        marksArray.push(newMarks);
        studMarksField.value = ''
        console.log(marksArray);
        displayMarks()
}
