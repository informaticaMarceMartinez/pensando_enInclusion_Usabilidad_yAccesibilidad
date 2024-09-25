var x = document.body.style.backgroundColor;

function cambiar() {

if (x == "white") {

        // Cambio color de fondo y color del texto
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        // Cambio propiedades del menu lateral secundario
        document.getElementById("menuSec").style.boxShadow ="7px 7px 4px 0px rgba(0,0,0,0.75)";
        document.getElementById("menuSec").style.border = "2px solid white ";
      //  document.getElementById("menuSec").style.background = "#333333";
      
        // Cambio propiedades de los botones 
        document.getElementById("btn1").style.boxShadow = "7px 7px 4px 0px rgba(0,0,0,0.75)";
        document.getElementById("btn2").style.boxShadow = "7px 7px 4px 0px rgba(0,0,0,0.75)";
        document.getElementById("btn3").style.boxShadow = "7px 7px 4px 0px rgba(0,0,0,0.75)";
        document.getElementById("btn4").style.boxShadow = "7px 7px 4px 0px rgba(0,0,0,0.75)";
      
        document.getElementById("btn1").style.border = "2px solid black";
        document.getElementById("btn2").style.border = "2px solid black";
        document.getElementById("btn3").style.border = "2px solid black";
        document.getElementById("btn4").style.border = "2px solid black";      

        // modifico la variable de control del color de la web
        x = "black";
    
    } else {

        // Cambio color de fondo y color del texto
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        // Cambio propiedades del menu lateral secundario
        document.getElementById("menuSec").style.boxShadow ="7px 7px 4px 0px rgba(255,255,255,0.75)";
        document.getElementById("menuSec").style.border = "2px solid white";
     //   document.getElementById("menuSec").style.background = "#333333";

        // Cambio propiedades de los botones 
        document.getElementById("btn1").style.boxShadow = "7px 7px 4px 0px rgba(255,255,255,0.75)";
        document.getElementById("btn2").style.boxShadow = "7px 7px 4px 0px rgba(255,255,255,0.75)";
        document.getElementById("btn3").style.boxShadow = "7px 7px 4px 0px rgba(255,255,255,0.75)";
        document.getElementById("btn4").style.boxShadow = "7px 7px 4px 0px rgba(255,255,255,0.75)";

        document.getElementById("btn1").style.border = "2px solid black";
        document.getElementById("btn2").style.border = "2px solid black";
        document.getElementById("btn3").style.border = "2px solid black";
        document.getElementById("btn4").style.border = "2px solid black";

        // modifico la variable de control del color de la web
        x = "white";        
    }
} 