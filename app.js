
//Variables

const inputElement =document.querySelector("#number");

const checkElement=document.querySelector("#check");

const answerElement=document.querySelector("#answer");

const gifElement=document.querySelector("#gif");

const finalElement=document.querySelector("#final");

const randomNumber = ()=>{
    return Math.floor(Math.random()*100);

}
const a =randomNumber();
let count=0 ;







//Functions


function checkF(){
    
    const b =parseFloat(inputElement.value);
    count+=1;

    
    if ( b === a) {

        
        gifElement.style.display = "block"
        answerElement.style.display = "none"
        

        console.log("tebrikler");
        answerElement.style.backgroundColor="white"
        finalElement.innerHTML =`Number of attempts  : ${count}`
        finalElement.style.backgroundColor = "blueviolet"
        
        
  
    }  
    else if ((100 >= b) && (b > a)){

        answerElement.innerHTML="<h3 >please enter smaler number</h3>";
        console.log("please enter smaler number");
        answerElement.classList.add('animate__animated', 'animate__wobble');

        answerElement.style.backgroundColor = "orange";
        answerElement.style.color = "purple";
        answerElement.style.borderRadius="50%";
        
        
        

       
    
        
    }else if ((0<= b) && (b < a)) {
        answerElement.innerHTML="<h3>please enter bigger number</h3>";
        answerElement.classList.add('animate__animated', 'animate__tada');
        answerElement.style.backgroundColor = "purple";
        answerElement.style.color = "orange";
        answerElement.style.borderRadius="50%"

        console.log("please enter bigger number");
        
        
       
    
    }else if (b>100 || b< 0 ) {

        answerElement.innerHTML="<h3>please enter number in 0-100</h3>"
        answerElement.classList.add('animate__animated', 'animate__bounce');

        console.log("please enter nuber in 0-100");
        answerElement.style.backgroundColor = "orange";
        answerElement.style.borderRadius="50%";
        
        
    }else if(isNaN(b)){
        answerElement.innerHTML="<h3>invalid syntax</h3>";
        answerElement.classList.add('animate__animated', 'animate__bounce');
        answerElement.style.backgroundColor = "orange";
        answerElement.style.borderRadius="50%";
        
    }
   
        
    console.log(a);
    console.log(b);
    console.log(count);
    // console.log(inputElement.value);
    // console.log(typeof(inputElement.value));    
    // console.log(typeof(answerElement))
    
};






//EventListeners

checkElement.addEventListener("click", ()=>{
    checkF();
    
    
});

// console.log(document.getElementById("number").value);


//Functions

