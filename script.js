
let input_01 = document.querySelector('.task-one .inputs input');
let result_0 = document.querySelector('.task-one .result');

console.log(input_01);
console.log(result_0);
let listNumbers=[];
let counter=1;
function task1(e){
    counter+=1;
    if (+input_01.value!==0){
        let sum = 0;
        for (let i = 0; i < listNumbers.length; i++) {
        sum += listNumbers[i];
        }
        if (sum<100){
            listNumbers.push(+input_01.value)
            result_0.innerHTML=sum+ (+input_01.value)
            input_01.value= ''
            input_01.placeholder=`Number ${counter}`
        }
        else{
            result_0.innerHTML=sum
            counter=1
            input_01.value= ''
            input_01.placeholder=`Number ${counter}`
            listNumbers=[]
        }
    }
    else{
        counter=1
        let sum = 0;
        if(listNumbers.length===0){
            result_0.innerHTML=sum
            input_01.value= ''
            input_01.placeholder=`Number ${counter}`
        }
        else{
            for (let i = 0; i < listNumbers.length; i++) {
                sum += listNumbers[i];
            }
            input_01.value= ''
            input_01.placeholder=`Number ${counter}`
            result_0.innerHTML=sum
            listNumbers=[]
        }
    }
}

let input_1 = document.querySelector('.task-two .inputs');


function task2(e){
    input_1.style.display='block'
    input_1.addEventListener("input", (event) => {
        // Change the color of the text based on the selected color
        result_1.style.color = event.target.value;
      });
}

let divTask1 = document.querySelector('.task-one ');
let divTask2 = document.querySelector('.task-two ');
let divTask3 = document.querySelector('.task-three ');

let button_1 = document.querySelector('.task-two .buttons button');
let result_1 = document.querySelector('.task-two .result');

let result_2 = document.querySelector('.task-three .results');

function slider(e) {
    result_1.innerHTML =''
    result_2.innerHTML=''
    button_1.style.visibility='hidden'
    result_1.style.visibility="hidden"
    input_1.style.display='none'

    let task =e.className
    if (task==='slider task1'){
        divTask1.style.opacity = '1'
        divTask2.style.opacity = '0'
        divTask3.style.opacity = '0'
    
    }
    else if (task==='slider task2'){
        divTask2.style.opacity = '1'
        divTask1.style.opacity = '0'
        divTask3.style.opacity = '0'

        function executeAfter1Seconds() {
        alert("Welcome to my site");
        let userName = prompt("Please enter your name:");
        if (!userName) {
            userName = "Guest"; 
        }
    
        let colorChoice = prompt("Choose a color: red, green, or blue").toLowerCase();
        if (!colorChoice || (colorChoice !== "red" && colorChoice !== "green" && colorChoice !== "blue")) {
            alert("Invalid color choice! Defaulting to black.");
            colorChoice = "black";
        }
    
        result_1.style.color = colorChoice;
        result_1.style.visibility="visible"

        result_1.innerHTML = `Welcome, ${userName} !`;
        button_1.style.visibility='visible'
        }
        
        setTimeout(executeAfter1Seconds, 1000)
    
    }
    else{
        divTask3.style.opacity = '1'
        divTask2.style.opacity = '0'
        divTask1.style.opacity = '0'

        function executeAfter1Seconds() {
            let message = prompt("Enter your message").toLowerCase();
            result_2.innerHTML = "";
            for (let i = 1; i <= 6; i++) {
                let heading = document.createElement(`h${i}`);
                heading.textContent = message;
                result_2.appendChild(heading);
              }
            }
            
            setTimeout(executeAfter1Seconds, 1000)
    }

}








