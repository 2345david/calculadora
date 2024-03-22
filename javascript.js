let myNum = "";                                         //Variable 1
let myNum2 = "";                                        //Variable 2
let myCalc = "";                                        //Variable 3
function darNumero(parametro) {
    console.log("myNum",myNum);                 // Imprimir el resultado de myNum
    console.log("myNum2",myNum2);                // Imprimir el resultado de myNum2
    console.log("myCalc",myCalc);                // Imprimir el resultado de myCalc
    console.log("parametro",parametro);             // Imprimir el resultado de parametro
    console.log("----------------------")
    const MY_SCREEN = document.getElementById('screen'); // Anclar el id html al java

    if (parametro == "+" || parametro == "-" || parametro == "*" || parametro == "/"){
        myCalc = parametro
        MY_SCREEN.innerHTML = myCalc;
    }else if (myCalc == ""){
        myNum = myNum + parametro
        MY_SCREEN.innerHTML = myNum;
    }else{
        myNum2 = myNum2 + parametro
        MY_SCREEN.innerHTML = myNum2;
    }




    /*if (parametro == "+"){          // Si el parametro introducido es igual a "+"
        myCalc = "+"                // Alamacena en myCalc el simbolo "+"
        MY_SCREEN.innerHTML = "+";  // Para que se muestre el resultado en la pantalla
    }else if(parametro == "-"){     // Si el parametro introducido es igual a "-"
        myCalc = "-"                // alamacena en myCalc el simbolo "-"
        MY_SCREEN.innerHTML = "-";  // Para que se muestre el resultado en la pantalla
    }else if(parametro == "*"){     // Si el parametro introducido es igual a "*"
        myCalc = "*"                // Alamacena en myCalc el simbolo "*"
        MY_SCREEN.innerHTML = "*";  //Para que se muestre el resultado en pantalla
    }else if(parametro == "/"){     //Si el parametro introducido es igual a "/"
        myCalc = "/"                //Almacena en myCalc el simbolo "/"
        MY_SCREEN.innerHTML = "/";  //Para que se muestre el resultado en pantalla
    }else{
       if (myCalc == ""){           //Si myCalc esta vacio
        myNum = myNum + parametro   //Almacenar en myNum la concatenacion de myNum con el parametro
        MY_SCREEN.innerHTML = myNum;    //Para que se muestre el resultado en pantalla
       }else{
        myNum2 = myNum2 + parametro //Almacenar en myNum2 la concatenacion de myNum2 con el parametro
       MY_SCREEN.innerHTML = myNum2;     //Para que se muestre el resultado en pantalla
        }
    }*/
console.log("myNum",myNum);                 // Imprimir el resultado de myNum
console.log("myNum2",myNum2);                // Imprimir el resultado de myNum2
console.log("myCalc",myCalc);                // Imprimir el resultado de myCalc
console.log("parametro",parametro);             // Imprimir el resultado de parametro

}

function mDelete() { // Para el boton de limpiar la pantalla y datos
    const MY_SCREEN = document.getElementById('screen');    //Anclar el id html al java
    MY_SCREEN.innerHTML = "0";                              //Hacer que se muestre lo anclado en pantalla
    myNum = ""                  // Para limpiar la variable
    myNum2 = ""                 // Para limpiar la variable
    myCalc = ""                 // Para limpiar la variable
    resultado = ""              // Para limpiar la variable
}

function equal(resultado) {                            // Para poder imprimir el resultado del calculo
    const MY_SCREEN = document.getElementById('screen'); //Anclar el id html al java
    
    if(myCalc == "+"){                              // Si myCalc es igual a "+"
        resultado = parseFloat(myNum) + parseFloat(myNum2)    //Coger los datos en resultado y hacer la suma de los datos almacenados en myNum y en myNum2
        const MY_SCREEN = document.getElementById('screen');    //Anclar el id html al java
        MY_SCREEN.innerHTML = resultado;                        // Hacer que se muestre lo anclado en pantalla
        console.log(resultado)                                  //Imprimir en pantalla resultado
    }else if(myCalc == "-"){                        //Si myCalc es igual a "-"
        resultado = myNum - myNum2                              //Coger los datos en resultado y hacer la resta de los datos almacenados en myNum y en myNum2
        const MY_SCREEN = document.getElementById('screen');    //Anclar el id html al java
        MY_SCREEN.innerHTML = resultado;                        //Hacer que se muestre lo anclado en pantalla
        console.log(resultado)                                  //Imprimir en pantalla resultado
    }else if(myCalc == "*"){                        //Si myCalc es igual a "*"
        resultado = myNum * myNum2                              //Coger los datos almacenados en resultado para multiplicar los datos almacenados en myNum y en myNum2
        const MY_SCREEN = document.getElementById('screen')     //Anclar el id html al java
        MY_SCREEN.innerHTML = resultado;                        //Hacer que se muestre lo anclado en pantalla
        console.log(resultado)                                  //Imprimir en pantalla resultado
    }else {
        resultado = myNum / myNum2                  //Si no se cumple nada de lo anterior hacer el calculo en este caso la division entre los datos almacenados en myNum y en myNum2
        const MY_SCREEN = document.getElementById('screen')     //Anclar el id html al java
        MY_SCREEN.innerHTML = resultado;                        //Hacer que se muestre lo anclado en pantalla
        console.log(resultado)                                  //Imprimir en pantalla resultado
    }
}
