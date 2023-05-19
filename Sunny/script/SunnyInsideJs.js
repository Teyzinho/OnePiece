
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function startAnimation() {
    var element = document.getElementById("ContentHover");
    element.classList.add("contentHidden");

    var element = document.getElementById("luffy");
    element.classList.add("AnimacaoMoverPng");

    var element = document.getElementById("luffypngHover");
    element.classList.add("AnimacaoAbrir");

    var element = document.getElementById("luffypngHover");
    element.classList.add("contentVisible");

    setTimeout(function () {

        target.forEach(function (element) {
            element.classList.add(animationClass);
        }
        )
    }, 1000);

}

function returnAnimation() {

    target.forEach(function (element) {
        element.classList.remove(animationClass);
    }
    )

    setTimeout(function () {
        var element = document.getElementById("luffy");
        element.classList.remove("AnimacaoMoverPng");
        var element = document.getElementById("luffypngHover");
        element.classList.remove("AnimacaoAbrir");

        var element = document.getElementById("luffy");
        element.classList.add("AnimacaoVoltarPng");
        var element = document.getElementById("luffypngHover");
        element.classList.add("AnimacaoFechar");

        setTimeout(function () {
            var element = document.getElementById("luffypngHover");
            element.classList.remove("contentVisible");
        }, 500);

        setTimeout(function () {
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


function changeBackground(clickedButton) {
    const mapaDiv = document.querySelector('.mapa');
    const buttons = document.querySelectorAll('.menu button');
    const playButtons = document.querySelectorAll('.play-buttons button');
    const textConfirm = document.querySelector('.textConfirm');



    let isAnyButtonActive = false;

    // Verificar se o botão já possui a classe 'active'
    const isActive = clickedButton.classList.contains('button-active');

    // Remover a classe 'active' de todos os botões
    buttons.forEach(button => {
        button.classList.remove('button-active');
    });

    playButtons.forEach(playButton => {
        playButton.style.display = 'none';
    });

    // Adicionar a classe 'active' somente ao botão clicado, caso não esteja ativo
    if (!isActive) {
        clickedButton.classList.add('button-active');
    }

    // Verificar se algum botão está ativo
    buttons.forEach(button => {
        if (button.classList.contains('button-active')) {
            isAnyButtonActive = true;
        }
    });

    // Verificar qual botão foi clicado e alterar a imagem de acordo
    if (clickedButton.classList.contains('wano-btn')) {
        mapaDiv.classList.toggle('wano-active');
        mapaDiv.classList.remove('mapHover');
        mapaDiv.classList.remove('dressrosa-active');
        playButtons.forEach(playButton => {
            playButton.style.display = 'none';
        });
        document.querySelector('.play-button-wano').style.display = 'block';

        mapaDiv.addEventListener('click', MostrarAnimacao);

    } else if (clickedButton.classList.contains('dressrosa-btn')) {
        mapaDiv.classList.toggle('dressrosa-active');
        mapaDiv.classList.remove('wano-active');
        mapaDiv.classList.remove('mapHover');
        playButtons.forEach(playButton => {
            playButton.style.display = 'none';
        });
        document.querySelector('.play-button-dressrosa').style.display = 'block';
        mapaDiv.removeEventListener('click', MostrarAnimacao);
    }

    if (!isAnyButtonActive) {
        mapaDiv.classList.remove('wano-active');
        mapaDiv.classList.remove('dressrosa-active');
        mapaDiv.classList.add('mapHover');
        mapaDiv.removeEventListener('click', MostrarAnimacao);

        playButtons.forEach(playButton => {
            playButton.style.display = 'none';
          });
          textConfirm.style.display= 'none';
    }else{
        textConfirm.style.display= 'block';
    }
}

function playWano(){
    const mapaDiv = document.querySelector('.mapa');

    mapaDiv.classList.add('wano-animation');
}

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
    var url = "../Wano/Onigashima.html";
  
    setTimeout(function(){
      window.location = url;
    }, tempo);
}

function AlertMsg(){
    alert("não disponível no momento");
}

