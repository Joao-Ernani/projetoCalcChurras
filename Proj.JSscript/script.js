// Carne- 400gr por pessoa + de 6 horas- 650
// Cerveja- 1200ml por pessoa + 6 horas- 2000ml
// refrigerante 1000ml por pessoa + 6 horas 1500ml


let inputAdultos = document.getElementById ("Adultos");
let inputCrianças= document.getElementById ("Crianças");
let inputDuração = document.getElementById ("Duração");

let resultado = document.getElementById("resultado")


function calcular(){
    console.log("calculando..."); 

    let Adultos = inputAdultos.value;
    let Crianças = inputCrianças.value;
    let Duração = inputDuração.value;

  
    let QuantidadeTotalCarne = CarnePP(Duração) * Adultos +  (CarnePP(Duração) /2 * Crianças);
    let QuantidadeTotalCerveja = CervejaPP(Duração) * Adultos;
    let QuantidadeTotalRefri = RefriPP(Duração)   * Adultos +  (RefriPP(Duração) /2 * Crianças);
     
    resultado.innerHTML = `<p>${QuantidadeTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(QuantidadeTotalCerveja / 375)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(QuantidadeTotalRefri / 2000)}Pet's 2L de Refri</p>`



    function CarnePP(Duração){
        if(Duração >= 6){
            return  650;
        }else{
            return 400;
        }
    }

    function CervejaPP(Duração){
        if(Duração >= 6) {
            return 2550;   
        }else {
            return 1125;
        }
    }

    function RefriPP(Duração){
        if(Duração >= 6){
            return  1800;
        }else{
            return 1000;
        }
    }
   
}


