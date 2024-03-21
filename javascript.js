let myNum = "";
let myNum2 = "";
let myCalc = "";
function darNumero(parametro) {
    const MY_SCREEN = document.getElementById('screen');
    /*myNum = myNum + numero;
    myNum2 = myNum2 + numero;
    MY_SCREEN.innerHTML = myNum;
    MY_SCREEN.innerHTML = myNum2;*/

    if (parametro == "+"){
        myCalc = "+"
        MY_SCREEN.innerHTML = 0;
    }else if (parametro == "-"){
        myCalc = "-"
        MY_SCREEN.innerHTML = 0;
    }else if (parametro == "*"){
        myCalc = "*"
        MY_SCREEN.innerHTML = 0;
    }else if (parametro == "/"){
        myCalc = "/"
        MY_SCREEN.innerHTML = 0;
    }else{
        if (myCalc == ""){
            myNum = myNum + parametro
            MY_SCREEN.innerHTML = myNum;
        }else{
            myNum2 = myNum2 + parametro
            MY_SCREEN.innerHTML = myNum2;
        }
    }
console.log(parametro);
console.log(myCalc);
console.log(myNum);
console.log(myNum2);
}


function mDelete() {
    const MY_SCREEN = document.getElementById('screen');
    MY_SCREEN.innerHTML = "0";
    myNum = ""
    myNum2 = ""
    myCalc = ""
    resultado = ""
}

function equal(resultado) {
    const MY_SCREEN = document.getElementById('screen');
    
    if (myCalc == "+"){
        parseInt(myNum);
        parseInt(myNum2);
        resultado = parseFloat(myNum) + parseFloat(myNum2)
        const MY_SCREEN = document.getElementById('screen');
        MY_SCREEN.innerHTML = resultado;
        console.log(resultado)
    }else if(myCalc == "-"){
        resultado = myNum - myNum2
        const MY_SCREEN = document.getElementById('screen');
        MY_SCREEN.innerHTML = resultado;
        console.log(resultado)
    }else if(myCalc == "*"){
        resultado = myNum * myNum2
        const MY_SCREEN = document.getElementById('screen');
        MY_SCREEN.innerHTML = resultado;
        console.log(resultado)
    }else{
        resultado = myNum / myNum2
        const MY_SCREEN = document.getElementById('screen');
        MY_SCREEN.innerHTML = resultado;
        console.log(resultado)
    }
}
