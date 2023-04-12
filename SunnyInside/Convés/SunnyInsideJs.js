
const target = document.querySelectorAll ('[data-anime]');
const animationClass = 'animate';



function startAnimation(){
    var element = document.getElementById("ContentHover");
    element.classList.add("contentHidden");

    var element = document.getElementById("luffy");
    element.classList.add("AnimacaoMoverPng");

    var element = document.getElementById("luffypngHover");
    element.classList.add("AnimacaoAbrir");

    var element = document.getElementById("luffypngHover");
    element.classList.add("contentVisible");
    

    setTimeout(function(){

        target.forEach(function(element){
            element.classList.add(animationClass);
            }
        )
    }, 1000);
    
}



function returnAnimation(){
    
    target.forEach(function(element){
        element.classList.remove(animationClass);
        }
    )


    setTimeout(function(){
            var element = document.getElementById("luffy");
        element.classList.remove("AnimacaoMoverPng");
        var element = document.getElementById("luffypngHover");
        element.classList.remove("AnimacaoAbrir");
        
        var element = document.getElementById("luffy");
        element.classList.add("AnimacaoVoltarPng");
        var element = document.getElementById("luffypngHover");
        element.classList.add("AnimacaoFechar");

        setTimeout(function(){
            var element = document.getElementById("luffypngHover");
        element.classList.remove("contentVisible");
        }, 500);

        setTimeout(function(){
            var element = document.getElementById("luffy");
            element.classList.remove('AnimacaoVoltarPng');
            var element = document.getElementById("luffypngHover");
            element.classList.remove('AnimacaoFechar');
            var element = document.getElementById("luffy");
            element.classList.remove("AnimacaoMoverPng");
            var element = document.getElementById("luffypngHover");
            element.classList.remove("AnimacaoAbrir");
            var element = document.getElementById("ContentHover");
            element.classList.remove("contentHidden");
        }, 900);
    }, 1000);
    

    

}
