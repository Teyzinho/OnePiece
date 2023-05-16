let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); //Contexto da imagem

// Definindo a cor de fundo
var corFundo = '#f1f1f1';

//Contador de frames
var frameCount = 0;
var KframeCount = 0;
// Preencher o fundo com a cor especificada
// ctx.fillStyle = corFundo;
// ctx.fillRect(0, 0, canvas.width, canvas.height);


let luffybase = new Image(); //Declara nova imagem
luffybase.src = "sprites/luffy-base-sprites-transparente.png"; //Declara o local da imagem
let kaidoBase = new Image();
kaidoBase.src = "sprites/kaido_human_transparente.png";

//Luffy
let posSpriteX = 0; //Valor da posiçãoX da imagem
let posSpriteY = 0;
let Lrecorte;
let Arecorte;
let posX = 150;
let posY = 200;
let largura = 85;
let altura = 150;
let sprites = 0;
let movimento = "parado";

//Kaido
let KposSpriteX = 30; //Valor da posiçãoX da imagem
let KposSpriteY = 62;
let KLrecorte = 82;
let KArecorte = 130;
let KposX = 700;
let KposY = 180;
let Klargura = 150;
let Kaltura = 210;
let Ksprites = 0;
let Kmovimento = "parado";
let KanimaAvanco = 0;

// Definindo as dimensões da barra de vida
var barWidth = 300;
var barHeight = 30;

luffybase.onload = () => { //espera a imagem carregar para depois abri-la
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    drawSprite();
}
kaidoBase.onload = () => {
    drawSprite();
}

// Definindo a porcentagem inicial da barra de vida
var LhealthPercent = 100;
var KhealthPercent = 100;

// Desenhar a barra de vida inicial
ctx.font = "30px Arial";
drawHealthBar(ctx, 100, 600, barWidth, barHeight, LhealthPercent, "#008E31");
drawHealthBar(ctx, 600, 600, barWidth, barHeight, KhealthPercent, "#8C030E");

// Função de Vida
function drawHealthBar(ctx, x, y, width, height, percent, color) {
    // Desenhar o fundo da barra
    ctx.fillStyle = '#ccc';
    ctx.fillRect(x, y, width, height);

    // Desenhar a barra de vida atual
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width * (percent / 100), height);
}

let animaAvanco = 0; //Define se o sprite se a animação esta indo ou voltando

function drawSprite() {
    ctx.fillStyle = corFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(luffybase, posSpriteX, posSpriteY, Lrecorte, Arecorte, posX, posY, largura, 150);
    ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, KposX, KposY, Klargura, Kaltura);
    drawHealthBar(ctx, 100, 600, barWidth, barHeight, LhealthPercent, "#008E31");
    drawHealthBar(ctx, 600, 600, barWidth, barHeight, KhealthPercent, "#8C030E");
    drawText();
}

function drawText(){
    ctx.fillStyle = '#000';
    ctx.font = "25px Arial";
    ctx.fillText("Luffy", 100, 580);
    ctx.fillText("Kaido", 600, 580);
    ctx.font = "20px Arial";
    ctx.fillText(LhealthPercent+"/100", 205, 620);
    ctx.fillText(KhealthPercent+"/100", 705, 620);
}

// Animações Luffy
function parado() {
    if (frameCount < 30) {
        frameCount++;
    } else {
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

        drawSprite();

        frameCount = 0;
    }
    if (movimento == 'parado') {
        requestAnimationFrame(parado);
    }
}

function Pistol() {
    movimento = "Pistol";
    animacaoLuffy();
}

function pistol() {
    if (frameCount < 5) {
        frameCount++;
    } else {
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
                mover(500);
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
                voltar();
                //Diminui a vida
                KhealthPercent -= 5;
                break;
            case 11:
                movimento = "parado";
                animacaoLuffy();
                Kresposta();
                break;
        }

        sprites++;

        drawSprite();

        frameCount = 0;
    }
    if (movimento == 'Pistol') {
        requestAnimationFrame(pistol);
    }
}

function mover(valor){
    posX = valor;
}

function voltar(){
    posX-=40;
    drawSprite();

    if(posX>150){
        requestAnimationFrame(voltar);
    }else{
        posX=150;
    }
}

function animacaoLuffy() {
    switch (movimento) {
        case 'parado':
            posSpriteX = 0;
            posSpriteY = 0;
            animaAvanco = 0;
            Lrecorte = 45;
            Arecorte = 80;
            largura = 85;
            parado();
            break

        case 'Pistol':
            posSpriteY = 270;
            sprites = 0;
            largura = 85;
            altura = 150;
            pistol();
    }
}
animacaoLuffy();

//  **************************** Animação Kaido *******************************
function kParado() {
    if (KframeCount < 30) {
        KframeCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (KanimaAvanco == 0) {
            Ksprites++;
            if (Ksprites == 3) {
                KanimaAvanco = 1;
            }
        } else {
            Ksprites = 0;
            if (Ksprites == 0) {
                KanimaAvanco = 0;
            }
        }

        switch (Ksprites) {
            case 0:
                KposSpriteX = 32;
                break;
            case 1:
                KposSpriteX = 150;
                break;
            case 2:
                KposSpriteX = 263;
                break;
            case 3:
                KposSpriteX = 370;
                break;

        }
        drawSprite();
        KframeCount = 0;
    }
    if (Kmovimento == 'parado') {
        requestAnimationFrame(kParado);
    }
}

function Kattack1() {
    if (KframeCount < 8) {
        KframeCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (Ksprites) {
            case 0:
                KposSpriteX = 110;
                KposSpriteY = 760;
                KLrecorte = 122;
                Klargura = 190;
                Ksprites = 1;
                kMover();
                break;
            case 1:
                KposSpriteX = 245;
                KposSpriteY = 760;
                KLrecorte = 165; //largura do Recorte
                Klargura = 255; //largura da imagem
                Ksprites = 2;
                break;
            case 2:
                KposSpriteX = 425;
                KposSpriteY = 760;
                KLrecorte = 150; //largura do Recorte
                Klargura = 240; //largura da imagem
                Ksprites = 3;
                break;
            case 3:
                KposSpriteX = 565;
                KposSpriteY = 760;
                KLrecorte = 160; //largura do Recorte
                Klargura = 250; //largura da imagem
                Ksprites = 4;
                break;
            case 4:
                KposSpriteX = 735;
                KposSpriteY = 760;
                KLrecorte = 145; //largura do Recorte
                Klargura = 235; //largura da imagem
                Ksprites = 5;
                break;
            case 5:
                KposSpriteX = 875;
                KposSpriteY = 760;
                KLrecorte = 122;
                Klargura = 190;
                Ksprites = 6;
                break;
            case 6:
                kVoltar();
                Kmovimento = 'parado';
                animacaoKaido();
                break;
        }
        drawSprite();
        KframeCount = 0;
    }
    if (Kmovimento == "Kattack1") {
        requestAnimationFrame(Kattack1);
    }
}

function animacaoKaido() {
    switch (Kmovimento) {
        case 'parado':
            KposSpriteX = 30;
            KposSpriteY = 62;
            Ksprites = 0;
            KLrecorte = 82;
            KArecorte = 130;
            Klargura = 150;
            Kaltura = 210;
            kParado();
            break;
        case 'Kattack1':
            Ksprites = 0;
            Kattack1();
            break;
        case 'dano':
            break;
    }
}

function kMover(){
    KposX -= 20;

    drawSprite();
    if(KposX>200){
        requestAnimationFrame(kMover);
    }
}

function kVoltar(){
    KposX += 20;

    drawSprite();
    if(KposX<700){
        requestAnimationFrame(kVoltar);
    }else{
        KposX ==700;
    }
}

animacaoKaido();
var kOpcoes = ['Kattack1'];
var kopcaoAleatoria = Math.floor(Math.random() * 1);
var wait = 0;

function Kresposta(){
    if(wait < 50){
        wait ++;
    }else{
        Kmovimento = kOpcoes[kopcaoAleatoria];
        console.log(kopcaoAleatoria);
        console.log(Kmovimento);
        animacaoKaido();
        wait ++;
    }
    if(wait <= 50){
        requestAnimationFrame(Kresposta);
    }
    if(wait == 51){
        wait = 0;
    }
}

function teste() {
    Kmovimento = 'Kattack1';
    animacaoKaido();
}