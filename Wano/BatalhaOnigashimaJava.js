
const EsconderClass='esconder';

const target = document.querySelectorAll ('[data-anime]');
const animationClass = 'animate';

esconderTimeout = setTimeout(function Esconder(){
    var element = document.getElementById("entrada");
    element.classList.add(EsconderClass);
}, 5500);

esconderTimeout = setTimeout(function Esconder(){
    var element = document.getElementById("transition");
    element.classList.add(animationClass);
}, 5600);




