

const display =  document.getElementById('result');


function clearDisplay(){
    display.value ="";
}

function updateDisplay(val){
      display.value += val ;
}

function equate(){
    try{
        display.value = eval(display.value)
    }
   catch(error){
    display.value="Error";
   }
}
