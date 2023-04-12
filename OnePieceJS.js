
//Mostrar Mapa
function mostrarMapa(){
    var element = document.getElementById("logPose");
    element.classList.add("mostrarMapa");
}
function esconderMapa(){
    var element = document.getElementById("logPose");
    element.classList.remove("mostrarMapa");
}

const target = document.getSelection('rodar')

function MostrarAnimacao(){
    var element = document.getElementById("fundoOnda");
    element.classList.add("mostrar");

    var element = document.getElementById("rodar1");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar2");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar3");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar4");
    element.classList.add("rodarAnimacao");

    //Tempo que deseja esperar, em milissegundos
    var tempo = 8000;
    //Url para onde redirecionar
    var url = "Wano/Onigashima.html";
  
    setTimeout(function(){
      window.location = url;
    }, tempo);

    
}


//window.onload = function as(){
    
 // }



/*Luffy*/
function mostrarLuffy(){
    var element = document.getElementById("luffy");
    element.classList.add("mostrar");
}
function esconderLuffy(){
    var element = document.getElementById("luffy");
    element.classList.remove("mostrar");
}


function mostrarLInformacoes(){
    //Remover
    var element = document.getElementById("lHistoria");
    element.classList.remove("mostrar");
    element.classList.remove("posicao1");

    var element = document.getElementById("lCuriosidades");
    element.classList.remove("mostrar");

    var element = document.getElementById("lIntrodução");
    element.classList.remove("mostrar");

    var element = document.getElementById("Gear");
    element.classList.remove("mostrar");

    //Adicionar
    if(document.getElementById('lHis').checked) {
        var element = document.getElementById("lHistoria");
        element.classList.add("mostrar");
        element.classList.add("posicao1");
      }else if(document.getElementById('lCur').checked) {
        var element = document.getElementById("lCuriosidades");
        element.classList.add("mostrar");
      }else if(document.getElementById('lInt').checked) {
        var element = document.getElementById("lIntrodução");
        element.classList.add("mostrar");
      }else if(document.getElementById('lGear').checked) {
        var element = document.getElementById("Gear");
        element.classList.add("mostrar");
      }

   
}

function mostrarVideo(){
    var element = document.getElementById("video1");
    element.classList.add("mostrar");
    
}


/*Zoro*/
function mostrarZoro(){
    var element = document.getElementById("Zoro");
    element.classList.add("mostrar");
}

function esconderZoro(){
    var element = document.getElementById("Zoro");
    element.classList.remove("mostrar");
}
/*Nami*/
function mostrarNami(){
    var element = document.getElementById("nami");
    element.classList.add("mostrarNami");
}

function esconderNami(){
    var element = document.getElementById("nami");
    element.classList.remove("mostrarNami");
}

/*Usopp*/
function mostrarUsopp(){
    var element = document.getElementById("Usopp");
    element.classList.add("mostrarUsopp");
}

function esconderUsopp(){
    var element = document.getElementById("Usopp");
    element.classList.remove("mostrarUsopp");
}

/*Sanji*/
function mostrarSanji(){
    var element = document.getElementById("Sanji");
    element.classList.add("mostrarSanji");
}

function esconderSanji(){
    var element = document.getElementById("Sanji");
    element.classList.remove("mostrarSanji");
}

/*Chopper*/
function mostrarChopper(){
    var element = document.getElementById("Chopper");
    element.classList.add("mostrarChopper");
}

function esconderChopper(){
    var element = document.getElementById("Chopper");
    element.classList.remove("mostrarChopper");
}

/*Robin*/
function mostrarRobin(){
    var element = document.getElementById("Robin");
    element.classList.add("mostrarRobin");
}

function esconderRobin(){
    var element = document.getElementById("Robin");
    element.classList.remove("mostrarRobin");
}

/*Franky*/
function mostrarFranky(){
    var element = document.getElementById("Franky");
    element.classList.add("mostrarFranky");
}

function esconderFranky(){
    var element = document.getElementById("Franky");
    element.classList.remove("mostrarFranky");
}

/*Brook*/
function mostrarBrook(){
    var element = document.getElementById("Brook");
    element.classList.add("mostrarBrook");
}

function esconderBrook(){
    var element = document.getElementById("Brook");
    element.classList.remove("mostrarBrook");
}

/*Jimbe*/
function mostrarJimbe(){
    var element = document.getElementById("Jimbe");
    element.classList.add("mostrarJimbe");
}

function esconderJimbe(){
    var element = document.getElementById("Jimbe");
    element.classList.remove("mostrarJimbe");
}

