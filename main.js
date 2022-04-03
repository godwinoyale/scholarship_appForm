


let sumTotalPoint
let agePoint
let countryPoint
let averageStudentPoint





let regBtn=document.getElementById("regBtn")
let fName=document.getElementById("fName")
let lName=document.getElementById("lName")
let age=document.getElementById("age")
let gender=document.getElementById("gender")
let phoneNumber=document.getElementById("phoneNumber")
let school=document.getElementById("school")
let country=document.getElementById("country")
let english=document.getElementById("english")
let englishScore=document.getElementById("englishScore")
let maths=document.getElementById("maths")
let mathScore=document.getElementById("mathScore")
let sub3=document.getElementById("sub3")
let sub3Score=document.getElementById("sub3Score")
let sub4=document.getElementById("sub4")
let sub4Score=document.getElementById("sub4Score")
let sub5=document.getElementById("sub5")
let sub5Score=document.getElementById("sub5Score")
let sub6=document.getElementById("sub6")
let sub6Score=document.getElementById("sub6Score")
let sub7=document.getElementById("sub7")
let sub7Score=document.getElementById("sub7Score")
let sub8=document.getElementById("sub8")
let sub8Score=document.getElementById("sub8Score")




let fNameError=document.getElementById("fNameError")
let lNameError=document.getElementById("lNameError")
let ageError=document.getElementById("ageError")
let genderError=document.getElementById("genderError")
let phoneError=document.getElementById("phoneError")
let schoolError=document.getElementById("schoolError")
let countryError=document.getElementById("countryError")
let englishError=document.getElementById("englishError")
let englishScoreError=document.getElementById("englishScoreError")
let mathsError=document.getElementById("mathsError")
let mathScoreError=document.getElementById("mathScoreError")
let subject3Error=document.getElementById("subject3Error")
let sub3Error=document.getElementById("sub3Error")
let subject4Error=document.getElementById("subject4Error")
let sub4Error=document.getElementById("sub4Error")
let subject5Error=document.getElementById("subject5Error")
let sub5Error=document.getElementById("sub5Error")
let subject6Error=document.getElementById("subject6Error")
let sub6Error=document.getElementById("sub6Error")
let subject7Error=document.getElementById("subject7Error")
let sub7Error=document.getElementById("sub7Error")
let subject8Error=document.getElementById("subject8Error")
let sub8Error=document.getElementById("sub8Error")



let studentSubjects= ["Biology", "Chemistry", "Physics", "Economics", "Geography", "Accounting"]



sub3.addEventListener("change", function(){
    let subjectIndex= sub3.value
    studentSubjects.splice(subjectIndex, 1)
    loopSubject4()
    loopSubject5()
    loopSubject6()
    loopSubject7()
    loopSubject8()
})

sub4.addEventListener("change", function(){
    let subjectIndex= sub4.value
    studentSubjects.splice(subjectIndex, 1)
    loopSubject5()
    loopSubject6()
    loopSubject7()
    loopSubject8()
})

sub5.addEventListener("change", function(){
    let subjectIndex= sub5.value
    studentSubjects.splice(subjectIndex, 1)
    loopSubject6()
    loopSubject7()
    loopSubject8()
})

sub6.addEventListener("change", function(){
    let subjectIndex= sub6.value
    studentSubjects.splice(subjectIndex, 1)
    loopSubject7()
    loopSubject8()
})

sub7.addEventListener("change", function(){
    let subjectIndex= sub7.value
    studentSubjects.splice(subjectIndex, 1)
    loopSubject8()
})

sub8.addEventListener("change", function(){
    let subjectIndex= sub8.value
    studentSubjects.splice(subjectIndex, 1)
})

loopSubject3()
loopSubject4()
loopSubject5()
loopSubject6()
loopSubject6()
loopSubject7()
loopSubject8()

function loopSubject3(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub3.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubject4(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub4.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubject5(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub5.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubject6(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub6.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubject7(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub7.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}

function loopSubject8(){
    let allOptions=""

    for(let i=0; i<studentSubjects.length; i++){
        allOptions+=` <option value="${i}"> ${studentSubjects[i]}</option>`
    }
    sub8.innerHTML=`  <option value="">Select Subjects</option> ${allOptions}`
}


regBtn.addEventListener('click', function(){
    validateDetails()
})

function validateDetails(){
    if(fName.value==""){
        fNameError.innerHTML="First name required"
    }else if(lName.value==""){
        lNameError.innerHTML="Last name required"
    }else if(age.value==""){
        ageError.innerHTML="Age required"
    }else if(gender.value==""){
        genderError.innerHTML="Gender required"
    }else if(phoneNumber.value==""){
        phoneError.innerHTML="Phone number required"
    }else if(school.value==""){
        schoolError.innerHTML="School name required"
    }else if(country.value==""){
        countryError.innerHTML="Select your country"
    }else if(englishScore.value==""){
        englishScoreError.innerHTML="Your score cannot be empty"
    }else if(mathScore.value==""){
        mathScoreError.innerHTML="Your score cannot be empty"
    }else if(sub3.value==""){
        subject3Error.innerHTML="You must select a subject"
    }else if(sub3Score.value==""){
        sub3Error.innerHTML="Your score cannot be empty"
    }else if(sub4.value==""){
        subject4Error.innerHTML="You must select a subject"
    }else if(sub4Score.value==""){
        sub4Error.innerHTML="Your score cannot be empty"
    }else if(sub5.value==""){
        subject5Error.innerHTML="You must select a subject"
    }else if(sub5Score.value==""){
        sub5Error.innerHTML="Your score cannot be empty"
    }else if(sub6.value==""){
        subject6Error.innerHTML="You must select a subject"
    }else if(sub6Score.value==""){
        sub6Error.innerHTML="Your score cannot be empty"
    }else if(sub7.value==""){
        subject7Error.innerHTML="You must select a subject"
    }else if(sub7Score.value==""){
        sub7Error.innerHTML="Your score cannot be empty"
    }else if(sub8.value==""){
        subject8Error.innerHTML="You must select a subject"
    }else if(sub8Score.value==""){
        sub8Error.innerHTML="Your score cannot be empty"
    }else{
        appAction()
    }

    clearError()
    
    
}

function clearError(){
    if(fName.value!==""){
        fNameError.innerHTML=""
    }
    if(lName.value!==""){
        lNameError.innerHTML=""
    }
    if(age.value!==""){
        ageError.innerHTML=""
    }
    if(gender.value!==""){
        genderError.innerHTML=""
    }
    if(phoneNumber.value!==""){
        phoneError.innerHTML=""
    }
    if(school.value!==""){
        schoolError.innerHTML=""
    }
    if(country.value!==""){
        countryError.innerHTML=""
    }
    if(englishScore.value!==""){
        englishScoreError.innerHTML=""
    }
    if(mathScore.value!==""){
        mathScoreError.innerHTML=""
    }
    if(sub3.value!==""){
        subject3Error.innerHTML=""
    }
    if(sub3Score.value!==""){
        sub3Error.innerHTML=""
    }
    if(sub4.value!==""){
        subject4Error.innerHTML=""
    }
    if(sub4Score.value!==""){
        sub4Error.innerHTML=""
    }
    if(sub5.value!==""){
        subject5Error.innerHTML=""
    }
    if(sub5Score.value!==""){
        sub5Error.innerHTML=""
    }
    if(sub6.value!==""){
        subject6Error.innerHTML=""
    }
    if(sub6Score.value!==""){
        sub6Error.innerHTML=""
    }
    if(sub7.value!==""){
        subject7Error.innerHTML=""
    }
    if(sub7Score.value!==""){
        sub7Error.innerHTML=""
    }
    if(sub8.value!==""){
        subject8Error.innerHTML=""
    }
    if(sub8Score.value!==""){
        sub8Error.innerHTML=""
    }

}



function appAction(){
    studentPoint=0
    studentAge()

}



function studentAge(){
    agePoint=0
    if(age.value=="1"){
        agePoint=agePoint+100
        console.log(agePoint)
    }else if(age.value=="2"){
        agePoint=agePoint+80
        console.log(agePoint)
    }else if(age.value=="3"){
        agePoint=agePoint+50
        console.log(agePoint)
    }else if(age.value=="4"){
        agePoint=agePoint+30
        console.log(agePoint)
    }else if(age.value=="5"){
        agePoint=agePoint+10
        console.log(agePoint)
    }
    studentCountry()
    
}

function studentCountry(){
    countryPoint=0
    if(country.value=="africa"){
        countryPoint=countryPoint+50
        console.log(countryPoint)
    }else if(country.value=="asia"){
        countryPoint=countryPoint+40
        console.log(countryPoint)
    }else if(country.value=="southAmerica"){
        countryPoint=countryPoint+30
        console.log(countryPoint)
    }else if(country.value=="northAmerica"){
        countryPoint=countryPoint+20
        console.log(countryPoint)
    }else if(country.value=="others"){
        countryPoint=countryPoint+10
        console.log(countryPoint)
    }
    
    studScore()


}

function studScore(){

    englishScore=parseInt(englishScore.value)
    mathScore=parseInt(mathScore.value)
    sub3Score=parseInt(sub3Score.value)
    sub4Score=parseInt(sub4Score.value)
    sub5Score=parseInt(sub5Score.value)
    sub6Score=parseInt(sub6Score.value)
    sub7Score=parseInt(sub7Score.value)
    sub8Score=parseInt(sub8Score.value)

    sumTotalScores=englishScore+mathScore+sub3Score+sub4Score+sub5Score+sub6Score+sub7Score+sub8Score
    averageTotal=sumTotalScores/8
    console.log(averageTotal)
   
   
    
    
    averagePoint()

}

function averagePoint(){
    averageStudentPoint=0
    if(averageTotal>=90 && averageTotal<=100){
        averageStudentPoint= averageStudentPoint+150
    }else if(averageTotal>=85 && averageTotal<=89){
        averageStudentPoint=averageStudentPoint+140
    }else if(averageTotal>=75 && averageTotal<=84){
        averageStudentPoint=averageStudentPoint+120
    }else if(averageTotal>=65 && averageTotal<=74){
        averageStudentPoint=averageStudentPoint+100
    }else if(averageTotal>=60 && averageTotal<=64){
        averageStudentPoint=averageStudentPoint+80
    }else if(averageTotal>=50 && averageTotal<=59){
        averageStudentPoint=averageStudentPoint+50
    }else if(averageTotal>=40 && averageTotal<=49){
        averageStudentPoint=averageStudentPoint+20
    }else if(averageTotal>=0 && averageTotal<=39){
        averageStudentPoint=averageStudentPoint+0
    }

    sumTotal()

}

function sumTotal(){
    sumTotalPoint=0
    sumTotalPoint= agePoint+countryPoint+averageStudentPoint

    studentTotalPoint()

}





function studentTotalPoint(){
    if(sumTotalPoint>=180){

        const labels = [
            'Age Point',
            'Country Point',
            'Student Point',
            
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: ['Age Point', 'Country Point', 'Student Point'],
              backgroundColor: ['rgb(11, 235, 93)', 'rgb(252, 10, 159)', 'rgb(252, 139, 10)'],
              borderColor: ['rgb(11, 235, 93)', 'rgb(252, 10, 159)', 'rgb(252, 139, 10)'],
              data: [agePoint, countryPoint, averageStudentPoint],
            }]
          };
        
          const config = {
            type: 'doughnut',
            data: data,
            options: {}
          };
        
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
        
        alert("Congratulations " +fName.value+ "! " + "You have been offered scholarship, Your point is " +sumTotalPoint)
        
    }else{
      
        const labels = [
            'Age Point',
            'Country Point',
            'Student Point',
            
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: ['Age Point', 'Country Point', 'Student Point'],
              backgroundColor: ['rgb(11, 235, 93)', 'rgb(252, 10, 159)', 'rgb(252, 139, 10)'],
              borderColor: ['rgb(11, 235, 93)', 'rgb(252, 10, 159)', 'rgb(252, 139, 10)'],
              data: [agePoint, countryPoint, averageTotal],
            }]
          };
        
          const config = {
            type: 'doughnut',
            data: data,
            options: {}
          };
        
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );

            alert("Sorry " +fName.value+ "! " + "you cannot be offered scholarship at this time, your point is too low, Your point is " +sumTotalPoint)


    }
   
}

















    
    
  
