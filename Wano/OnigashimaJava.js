//Otimização do javaScript
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll ('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight *3.5) /4); //constante que verifica a distância da barra de Scroll do topo
    target.forEach(function(element){ //Mostra a distância da barra de scroll do topo de cada elemento
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }

        //console.log(element.offsetTop); Mostra a distância da barra de scroll do topo dos elementos
    })
    
   // console.log(windowTop) //Mostra a distância da barra de scroll do topo
}

animeScroll();

if(target.length) { //se Não tiver objeto animado a função fica desabilitada
window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 100));
}



