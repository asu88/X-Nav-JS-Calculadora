var PrimerSumando;
var display;
var resultado;
var suma
function getUno(){
 
  display = 1;
  document.getElementById("display").innerHTML = "1";
  console.log("unooo " + display); 
 //return Sumando;
}

function getSigno(){
   PrimerSumando = display;
   display = null;
      document.getElementById("display").innerHTML = "+";
   console.log("Sumando: " + PrimerSumando+ " display: "+display);
   //return display;
}

function getCero(){
   display = 0;
   document.getElementById("display").innerHTML = "0";
   console.log("ceroo " + display);
   //return Sumando;
}

function getOpera(){
    if(PrimerSumando == display){
        suma = 0;
    }else{
        suma = PrimerSumando + display;
    }
    console.log("resultado " + suma);
    document.getElementById("display").innerHTML = "resultado "+ suma;
    //suma = parseInt(PrimerSumando) + parseInt(display);
    display = null;
}



