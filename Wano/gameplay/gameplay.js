let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); //Contexto da imagem

let imagem = new Image(); //Declara nova imagem
imagem.src = "sprites/luffy-base-sprites-transparente.png"; //Declara o local da imagem
let posSpriteX = 0; //Valor da posiçãoX da imagem
let posSpriteY = 0;
let Lrecorte;
let Arecorte;
let posX = 0;
let posY = 0;
let largura;
let altura;
let sprites = 0;
let movimento = "parado";

imagem.onload = () => { //espera a imagem carregar para depois abri-la
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    ctx.drawImage(imagem, posSpriteX, 0, 45, 80, posX, posY, 85, 150)
}

let animaAvanco = 0; //Define se o sprite se a animação esta indo ou voltando

function animacao() {
    switch (movimento) {
        case 'parado':
            posSpriteX = 0;
            posSpriteY = 0;
            var parado = setInterval(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if (animaAvanco == 0) {
                    posSpriteX += 43;
                    if (posSpriteX >= 129) {
                        animaAvanco = 1;
                    }
                }
                if (animaAvanco == 1) {
                    posSpriteX -= 43;
                    if (posSpriteX <= 0) {
                        animaAvanco = 0;
                    }
                }
                ctx.drawImage(imagem, posSpriteX, posSpriteY, 45, 80, posX, posY, 85, 150);

                if (movimento != 'parado') {
                    clearInterval(parado);
                }
            }, 400)
            break

        case 'atacar':
            posSpriteY = 270;
            sprites = 0;

            let atacar = setInterval(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                switch (sprites) {
                    case 0:
                        posSpriteX = 5;
                        Lrecorte = 35;
                        Arecorte = 80;
                        largura = 78;
                        break;
                    case 1:
                        posSpriteX = 43;
                        break;
                    case 2:
                        posSpriteX = 81;
                        break;
                    case 3:
                        posSpriteX = 119;
                        Lrecorte = 27;
                        Arecorte = 80;
                        largura = 67;
                        break;
                    case 4:
                        posSpriteX = 145;
                        Lrecorte = 58;
                        Arecorte = 80;
                        largura = 98;
                        break;
                    case 5:
                        posSpriteX = 203;
                        Lrecorte = 58;
                        break;
                    case 6:
                        posSpriteX = 267;
                        Lrecorte = 58;
                        break;
                    case 7:
                        posSpriteX = 330;
                        Lrecorte = 60;
                        largura = 100;
                        break;
                    case 8:
                        posSpriteX = 400;
                        largura = 100;
                        break;
                    case 9:
                        posSpriteX = 462;
                        Lrecorte = 58;
                        largura = 98;
                        break;
                    case 10:
                        posSpriteX = 520;
                        Lrecorte = 45;
                        largura = 80;
                        break;
                    case 11:
                        movimento = "parado";
                        clearInterval(atacar);
                        animacao();
                        break;
                }

                sprites++;
                ctx.drawImage(imagem, posSpriteX, posSpriteY, Lrecorte, Arecorte, posX, posY, largura, 150);
            }, 250)
    }

}
animacao();

function atacar() {
    movimento = "atacar";
    animacao();
}