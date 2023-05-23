
const messages = [
  { text: " 'Em Onigashima' ", image: "narrativaImgs/22.png", audio: "" },
  { text: "Kaido: Que persistência, Chapeu-de-palha está morto, ele não virá!", image: "narrativaImgs/23.png", audio: "" },
  { text: "Yamato: Luffy com certeza virá.", image: "narrativaImgs/35.png", audio: "" },
  { text: "Yamato: E enquanto isso.", image: "narrativaImgs/2.png", audio: "" },
  { text: "Yamato: Eu vou te segurar aqui!", image: "narrativaImgs/21.png", audio: "" },
  { text: "*Raios*", image: "narrativaImgs/24.png", audio: "" },
  { text: "Luffy: Olha, Momo!", image: "narrativaImgs/1.png", audio: "" },
  { text: "Luffy: Achei ele.", image: "narrativaImgs/7.png", audio: "" },
  { text: "Luffy: Kaido!", image: "narrativaImgs/8.png", audio: "" },
  { text: "Luffy: Desça la Momo.", image: "narrativaImgs/25.png", audio: "" },
  { text: "**", image: "narrativaImgs/26.png", audio: "" },
  { text: "Luffy: Gear 4!", image: "narrativaImgs/28.png", audio: "" },
  { text: "**", image: "narrativaImgs/27.png", audio: "" },
  { text: "**", image: "narrativaImgs/29.png", audio: "" },
  { text: "Luffy: SNAKE MAN!!!", image: "narrativaImgs/30.png", audio: "" },
  { text: "Yamato: SHINSOKU!", image: "narrativaImgs/31.png", audio: "" },
  { text: "Yamato: HAKUJAKU!!", image: "narrativaImgs/32.png", audio: "" },
  { text: "**", image: "narrativaImgs/33.png", audio: "" },
  { text: "Luffy: GOMU GOMU NO!!", image: "narrativaImgs/3.png", audio: "" },
  { text: "Luffy: JET CULVERIN!!", image: "narrativaImgs/6.png", audio: "" },
  { text: "Kaido: Oque?", image: "narrativaImgs/9.png", audio: "" },
  { text: "**", image: "narrativaImgs/34.png", audio: "" },
  { text: "**", image: "narrativaImgs/12.png", audio: "" },
  { text: "**", image: "narrativaImgs/13.png", audio: "" },
  { text: "**", image: "narrativaImgs/14.png", audio: "" },
  { text: "**", image: "narrativaImgs/15.png", audio: "" },
  { text: "**", image: "narrativaImgs/16.png", audio: "" },
  { text: "**", image: "narrativaImgs/17.png", audio: "" },
  { text: "Luffy: Foi mal, Atrasei Porque presisava comer!", image: "narrativaImgs/10.png", audio: "" },
  { text: "Luffy: Deixa que eu cuido do resto!", image: "narrativaImgs/11.png", audio: "" },

];

let currentMessageIndex = 0;
const messageBox = document.getElementById("messageBox");
const imageBox = document.getElementById("imageBox");
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("nextButton");
let audioElement = null;

let currentCharIndex = 0;
let typingInterval = 15; // Ajuste da velocidade da animação de digitação
let isTyping = false;

function showMessage() {
  const message = messages[currentMessageIndex];
  messageElement.textContent = "";
  currentCharIndex = 0;
  isTyping = true;
  animateText(message.text);
  imageBox.src = message.image;

  // // Transição Imagens
  // imageBox.classList.remove('show');

  // // Aguarde um pequeno intervalo antes de atualizar o src para dar tempo para a transição ocorrer
  // setTimeout(function() {
  //   imageBox.src = message.image;

  //   // Adicione a classe CSS 'show' para mostrar a nova imagem com transição
  //   setTimeout(function() {
  //     imageBox.classList.add('show');
  //   }, 10);
  // }, 300); 

  if (message.audio) {
    if (audioElement) {
      audioElement.pause();
    }
    audioElement = new Audio(message.audio);
    audioElement.play();
  }
}

function animateText(text) {
  if (currentCharIndex < text.length) {
    messageElement.textContent += text.charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(function () {
      animateText(text);
    }, typingInterval);
  } else {
    isTyping = false;
    nextButton.disabled = false;
  }
}

function nextMessage() {
  if (isTyping) {
    return;
  }

  currentMessageIndex++;
  if (currentMessageIndex >= messages.length) {
    var url = "gameplay.html";
    window.location = url;
  }
  nextButton.disabled = true;
  showMessage();
}

nextButton.addEventListener("click", nextMessage);

showMessage();

//************************Funções de Audio **************************** */


var musica = document.getElementById("musica");
musica.volume = 0.05;

// Função para reproduzir o som
function reproduzirSom() {
  if (musica.paused) {
    musica.play()
      .catch(function (error) {
        console.error("Erro ao reproduzir som:", error);
      });
  }
}

function alterarVolume(volume) {
  musica.volume = volume;
}

document.addEventListener("click", reproduzirSom);


function removerLoading() {
  const loading = document.querySelector('.loading');
  loading.style.opacity ="0";
  setTimeout(function() {
      document.body.removeChild(loading);
    }, 300);
}
window.onload = function() {
  showMessage();
  setTimeout(function() {
    // Simula o carregamento atrasado dos arquivos
    removerLoading();
  }, 500);
};


