
const target = document.querySelectorAll ('[data-anime]');
const animationClass = 'animate';



function startAnimation(){
    var element = document.getElementById("ContentHover2");
    element.classList.add("contentHidden");

    var element = document.getElementById("personagemPng");
    element.classList.add("AnimacaoMoverPng");
    var element = document.getElementById("contenthover");
    element.classList.add("AnimacaoAbrir");
    var element = document.getElementById("contenthover");
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
            var element = document.getElementById("personagemPng");
        element.classList.remove("AnimacaoMoverPng");
        var element = document.getElementById("contenthover");
        element.classList.remove("AnimacaoAbrir");
        
        var element = document.getElementById("personagemPng");
        element.classList.add("AnimacaoVoltarPng");
        var element = document.getElementById("contenthover");
        element.classList.add("AnimacaoFechar");

        setTimeout(function(){
            var element = document.getElementById("contenthover");
        element.classList.remove("contentVisible");
        }, 500);

        setTimeout(function(){
            var element = document.getElementById("personagemPng");
            element.classList.remove('AnimacaoVoltarPng');
            var element = document.getElementById("contenthover");
            element.classList.remove('AnimacaoFechar');
            var element = document.getElementById("personagemPng");
            element.classList.remove("AnimacaoMoverPng");
            var element = document.getElementById("contenthover");
            element.classList.remove("AnimacaoAbrir");
            var element = document.getElementById("ContentHover2");
            element.classList.remove("contentHidden");
        }, 900);
    }, 1000);
    

    

}
