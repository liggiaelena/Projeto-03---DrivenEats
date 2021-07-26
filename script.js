let prato;
let bebida;
let sobremesa;
let valor;

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
   alert(prato);
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
   alert(bebida);
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
   alert(sobremesa);

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

function habilitado(elemento){
    let link = "https://wa.me/5515991379663?text=";
   // let text = "Olá, gostaria de fazer o pedido:" + "- Prato:"+ prato + "/n"
    
   // - Bebida: Coquinha Gelada
   // - Sobremesa: Pudim
   // Total: R$ 27.70;"
   // let textoPronto = encodeURI();
    //let texto = "%60%60%60css%20Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20-%20Prato%3A%20" + prato +"%20-%20Bebida%3A%20" + bebida + "%20-%20Sobremesa%3A%20" + sobremesa + "%20Total%3A%20R%24%" + valor + "%20%60%60%60";
    let menssagem = link + texto;
    elemento.setAttribute("href", link );

}

//https://api.whatsapp.com/send?phone=5515991379663&text=%60%60%60css%20Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20-%20Prato%3A%20Frango%20Yin%20Yang%20-%20Bebida%3A%20Coquinha%20Gelada%20-%20Sobremesa%3A%20Pudim%20Total%3A%20R%24%2027.70%20%60%60%60