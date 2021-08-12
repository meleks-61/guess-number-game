
//Variables

const inputElement =document.querySelector("#number");

const checkElement=document.querySelector("#check");

const randomNumber = ()=>{
    return Math.floor(Math.random()*100);
}




//EventListeners

checkElement.addEventListener("click", ()=>{
    checkF();
    
    
});

// console.log(document.getElementById("number").value);


//Functions

function checkF(){
    const a =randomNumber()
    const b =parseFloat(inputElement.value)

    if ( b === a) {

            console.log("tebrikler");
  
    }  
    else if (b > a) {
        console.log("please enter smaler number");
    
        
    }else if (b < a) {
        console.log("please enter bigger number");
    
    }if (inputElement.value>100 || inputElement.value< 0 ) {
        console.log("please enter nuber in 0-100");
        
    }
        
    console.log(a);
    console.log(b);
    // console.log(inputElement.value);
    // console.log(typeof(inputElement.value));    
    
};

