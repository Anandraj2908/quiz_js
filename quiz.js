const questions=[
    {
        question:"Which one of the following also known as Conditional Expression",
        answers:[
            {text:"Alternative to if-else",correct:"false"},
            {text:"Switch statement",correct:"false"},
            {text:"If-then-else statement",correct:"false"},
            {text:"immediate if",correct:"true"}
        ]
    },
    {
        question:"When interpreter encounters an empty statements, what it will do",
        answers:[
            {text:"Shows a warning",correct:"false"},
            {text:"Ignores the statements",correct:"true"},
            {text:"Prompts to complete the statement",correct:"false"},
            {text:"Throws an error",correct:"false"}
        ]
    },
    {
        question:"Which one of the following is the correct way for calling the JavaScript code?",
        answers:[
            {text:"Preprocessor",correct:"false"},
            {text:"Triggering Event",correct:"false"},
            {text:"Function/Method",correct:"true"},
            {text:"RMI",correct:"false"}
        ]
    },
    {
        question:"Which of the following type of a variable is volatile",
        answers:[
            {text:"Mutable variable",correct:"true"},
            {text:"Dynamic variable",correct:"false"},
            {text:"Volatile variable",correct:"false"},
            {text:"Immutable variable",correct:"false"}
        ]
    }
];

const questCard=document.querySelector('.disabledPrblm')
const startBtn=document.querySelector('.enabledStart')
const nextBtn=document.querySelector('.next')
const ops=document.querySelectorAll('#option');
const res=document.querySelector('.res');
let x=0
let totalScore=0
startBtn.addEventListener('click',function(){
    startBtn.classList.add('disabledStart')
    startBtn.classList.remove('enabledStart')
    questCard.classList.add('problems')
    questCard.classList.remove('disabledPrblm')
    nextBtn.classList.remove('nextDis')
    const question=document.querySelector('.question')
    question.innerHTML=questions[x].question
    
    for(let i=0;i<ops.length;i++){
        ops[i].innerHTML=questions[x].answers[i].text;
        ops[i].style.backgroundColor='grey'
    }
    

},false)

nextBtn.addEventListener('click',function(){
    if(x==3){
        questCard.classList.add('disabledPrblm')
        nextBtn.classList.add('nextDis')
        res.classList.remove('disabledResult')
        res.innerHTML=`You Scored ${totalScore} out of 16`
    }
    x++;
    const question=document.querySelector('.question')
    question.innerHTML=questions[x].question
    for(let i=0;i<ops.length;i++){
        ops[i].innerHTML=questions[x].answers[i].text;
        ops[i].style.backgroundColor='grey'
        ops[i].disabled=false;
    }

},false)

ops.forEach(item=>{
    item.addEventListener('click',function(e){

        const ansV=e.target.innerHTML
        
        for(let i=0;i<=3;i++){
            if(ansV===questions[x].answers[i].text){
                if(questions[x].answers[i].correct=="true"){
                    e.target.style.backgroundColor='green'
                    totalScore+=4;
                    for(let i=0;i<=3;i++)
                    ops[i].disabled=true;
                }
                else{
                    e.target.style.backgroundColor='red'
                    totalScore--
                }
            }
        }
    },false)
})

