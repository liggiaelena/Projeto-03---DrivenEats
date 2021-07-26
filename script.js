let prato;
let bebida;
let sobremesa;
let valor = 0;
let nome;
let endereco;

function selectPlate(selected){
    let verificar = document.querySelector( ".plate .border");
    if(verificar !== null){
        verificar.classList.remove("border");
        let adicionar = verificar.querySelector(".icon");
        adicionar.classList.add("disappear") ;
    }
   selected.classList.add("border");
   let icone = selected.querySelector(".disappear");
   icone.classList.remove("disappear");   
   
   let nome = selected.querySelector("h3");
   prato = nome.innerHTML;

   let preco = selected.querySelector("span");
   let string = preco.innerHTML;
   let numero = parseFloat(string.replace(",","."));
   
   valor = valor + numero;

   finalizar();
}

function selectDrink(selected){
    let verificar = document.querySelector(".drink .border");
    if(verificar !== null){
        verificar.classList.remove("border"); 
        let adicionar = verificar.querySelector(".icon");
        adicionar.classList.add("disappear") ;
    }

   selected.classList.add("border");
   let icone = selected.querySelector(".disappear");
   icone.classList.remove("disappear");   
   
   let nome = selected.querySelector("h3");
   bebida = nome.innerHTML;

   let preco = selected.querySelector("span");
   let string = preco.innerHTML;
   let numero = parseFloat(string.replace(",","."));
   
   valor = valor + numero;

    finalizar();
}

function selectDessert(selected){
    let verificar = document.querySelector(".dessert .border");
    if(verificar !== null){
        verificar.classList.remove("border"); 
        let adicionar = verificar.querySelector(".icon");
        adicionar.classList.add("disappear") ;
    }
   selected.classList.add("border");
   let icone = selected.querySelector(".disappear");
   icone.classList.remove("disappear"); 

   let nome = selected.querySelector("h3");
   sobremesa = nome.innerHTML;

   let preco = selected.querySelector("span");
   let string = preco.innerHTML;
   let numero = parseFloat(string.replace(",","."));
  
   valor = valor + numero;

   finalizar();
}

function finalizar(){
    if(prato !== undefined ){
        if(bebida !== undefined){
            if(sobremesa !== undefined){
                let selected = document.querySelector(".bottom .button");
                selected.classList.add("verde");
                selected.innerHTML = "Fechar pedido";
                
            }
        }
    }
    
}
function dados(){
    nome = prompt("Digite seu nome:");
    endereco = prompt("Digite seu endereço:");
    habilitado();
}


function habilitado(){
    valor = valor.toFixed(2);
    let link = "https://wa.me/5515991379663?text=";
    let text = "Olá, gostaria de fazer o pedido:\n - Prato: "+ prato + "\n - Bebida: "+ bebida +"\n - Sobremesa: " + sobremesa + "\n - Total: R$ "+valor+ "\n Nome: " + nome +"\n Endereço: "+ endereco;
    let textoPronto = encodeURI(text);
    let menssagem = link + textoPronto;
    let ativar = document.querySelector("a");
    ativar.setAttribute("href", menssagem );
}

