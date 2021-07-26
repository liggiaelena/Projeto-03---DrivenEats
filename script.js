let prato;
let bebida;
let sobremesa;

function selectPlate(selected){
    let verificar = document.querySelector( ".plate .border");
    if(verificar !== null){
        verificar.classList.remove("border"); 
    }
   selected.classList.add("border");

   /*let icone = document.querySelector(selected + " > .disappear");
   icone.classList.remove("disappear");   */
   prato = selected.innerHTML;
   finalizar();
}

function selectDrink(selected){
    let verificar = document.querySelector(".drink .border");
    if(verificar !== null){
        verificar.classList.remove("border"); 
    }

   selected.classList.add("border");
    bebida = selected.innerHTML;
    finalizar();
}

function selectDessert(selected){
    let verificar = document.querySelector(".dessert .border");
    if(verificar !== null){
        verificar.classList.remove("border"); 
    }
   selected.classList.add("border");
   sobremesa = selected.innerHTML;

   finalizar();
}

function finalizar(){
    if(prato !== undefined ){
        if(bebida !== undefined){
            if(sobremesa !== undefined){
                let selected = document.querySelector(".bottom button");
                selected.classList.add("verde");
                selected.innerHTML = "Fechar pedido";
            }
        }
    }
    
}
finalizar();
