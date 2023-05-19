function MostrarAnimacao(){
    var fundoOnda = document.getElementById("fundoOnda");
    fundoOnda.classList.add("mostrar");

    var element = document.getElementById("rodar1");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar2");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar3");
    element.classList.add("rodarAnimacao");
    var element = document.getElementById("rodar4");
    element.classList.add("rodarAnimacao");
}

function removerLoading(){
    var fundoOnda = document.getElementById("fundoOnda");
    fundoOnda.classList.remove("mostrar");
}


window.onload = function() {
    var isFirstVisit = localStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
        setTimeout(function() {
            // Simula o carregamento atrasado dos arquivos
            removerLoading();
          }, 7500);
        localStorage.setItem('isFirstVisit', 'false');
      } else {
        setTimeout(function() {
            // Simula o carregamento atrasado dos arquivos
            removerLoading();
          }, 1500);
      }
    
  };
  
  // Evento DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function() {
    // O conteúdo HTML foi carregado, mas imagens e estilos ainda podem estar sendo baixados
    MostrarAnimacao();
  });

