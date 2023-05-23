//Mostrar Mapa
function mostrarMapa(){
    var element = document.getElementById("logPose");
    element.classList.add("mostrarMapa");
}
function esconderMapa(){
    var element = document.getElementById("logPose");
    element.classList.remove("mostrarMapa");
}

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


// Function Modal
  const closeBtn = document.getElementById('close-btn');
  const modal = document.querySelector('.infoModal');

  function mostrarModal() {
    modal.style.display = 'flex';
  }

  closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
  })

  
//   loading Function
  function removerLoading() {
    const loading = document.querySelector('.loading');
    loading.style.opacity ="0";
    setTimeout(function() {
        document.body.removeChild(loading);
      }, 300);
  }
  window.onload = function() {
    setTimeout(function() {
      // Simula o carregamento atrasado dos arquivos
      removerLoading();
    }, 500);
  };
  