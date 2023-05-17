let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); //Contexto da imagem

// Definindo a cor de fundo
var corFundo = '#f1f1f1';
// corFundo = '#000';

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
let luffyPunch = new Image();
luffyPunch.src = "sprites/luffy-punch.png";

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
var invertedX = -KposX - Klargura;

var tempoEspera = 5;

// Definindo as dimensões da barra de vida
var barWidth = 300;
var barHeight = 30;

//Definindo variáveis dos socos
let PposX = 700;
let PposY = 180;
let GPVisible = 'false';
let pframeCount = 0;

luffyPunch.onload = () => {
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    ctx.drawImage(luffyPunch, 0, 0);
}

luffybase.onload = () => { //espera a imagem carregar para depois abri-la
    drawSprite();
}
kaidoBase.onload = () => {
    ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, KposX, KposY, Klargura, Kaltura);
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
    drawHealthBar(ctx, 100, 600, barWidth, barHeight, LhealthPercent, "#008E31");
    drawHealthBar(ctx, 600, 600, barWidth, barHeight, KhealthPercent, "#8C030E");
    if (GPVisible == 'true') {
        ctx.drawImage(luffyPunch, PposX, PposY);
    }
    drawText();

    ctx.scale(-1, 1);
    ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, invertedX,KposY,Klargura,Kaltura);
    // ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, KposX, KposY, Klargura, Kaltura);
    ctx.scale(1, 1);
    
}

function drawText() {
    ctx.fillStyle = '#000';
    ctx.font = "25px Arial";
    ctx.fillText("Luffy", 100, 580);
    ctx.fillText("Kaido", 600, 580);
    ctx.font = "20px Arial";
    ctx.fillText(LhealthPercent + "/100", 205, 620);
    ctx.fillText(KhealthPercent + "/100", 705, 620);
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

function Gatling() {
    movimento = "Gatling";
    animacaoLuffy();
}

function gatling() {
    if (frameCount < tempoEspera) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (sprites) {
            case 0:
                posSpriteX = 12;
                Lrecorte = 45;
                largura = 85;
                Arecorte = 70;
                altura = 140;
                break;
            case 1:
                posSpriteX = 57;
                Lrecorte = 45;
                largura = 83;
                break;
            case 2:
                posSpriteX = 105;
                Lrecorte = 45;
                largura = 88;
                break;
            case 3:
                posSpriteX = 154;
                Lrecorte = 45;
                largura = 88;
                break;
            case 4:
                posSpriteX = 205;
                Lrecorte = 65;
                largura = 108;
                tempoEspera = 70;
                GPVisible = 'true'
                gatlingPunches();
                break;
            case 5:
                posSpriteX = 275;
                Lrecorte = 60;
                largura = 103;
                tempoEspera = 5;
                GPVisible = 'false'
                break;
            case 6:
                posSpriteX = 335;
                Lrecorte = 60;
                largura = 103;
                break;
            case 7:
                posSpriteX = 400;
                Lrecorte = 65;
                largura = 108;
                GPVisible = 'true'
                gatlingPunches();
                tempoEspera = 70;
                break;
            case 8:
                posSpriteX = 468;
                Lrecorte = 65;
                largura = 108;
                tempoEspera = 5;
                GPVisible = 'false'
                break;
            case 9:
                posSpriteX = 535;
                Lrecorte = 65;
                largura = 108;
                break;
            case 10:
                posSpriteX = 600;
                Lrecorte = 45;
                largura = 85;
                break;
            case 11:
                posSpriteX = 650;
                Lrecorte = 45;
                largura = 85;
                break;
            case 12:
                tempoEspera = 5;
                movimento = "parado";
                animacaoLuffy();
                Kresposta();
                break;
        }

        sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (movimento == 'Gatling') {
        requestAnimationFrame(gatling);
    }
}

function Bazooka() {
    movimento = "Bazooka";
    animacaoLuffy();
}

function bazooka() {
    if (frameCount < 3) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (sprites) {
            case 0:
                luffybase.src = "sprites/luffy-base-bazooka.png";
                posSpriteX = 0;
                Lrecorte = 70;
                largura = 110;
                Arecorte = 80;
                break;
            case 1:
                posSpriteX = 80;
                break;
            case 2:
                posSpriteX = 150;
                break;
            case 3:
                posSpriteX = 210;
                Lrecorte = 45;
                largura = 85;
                mover(500);
                break;
            case 4:
                posSpriteX = 255;
                Lrecorte = 70;
                largura = 110;
                break;
            case 5:
                posSpriteX = 320;
                Lrecorte = 65;
                largura = 110;
                break;
            case 6:
                posSpriteX = 385;
                Lrecorte = 100;
                largura = 180;
                break;
            case 7:
                posSpriteX = 485;
                Lrecorte = 65;
                largura = 110;
                break;
            case 8:
                posSpriteX = 550;
                Lrecorte = 120;
                largura = 160;
                break;
            case 9:
                posSpriteX = 670;
                Lrecorte = 105;
                largura = 145;
                break;
            case 10:
                posSpriteX = 775;
                Lrecorte = 105;
                largura = 145;
                break;
            case 11:
                posSpriteY = 73;
                posSpriteX = 0;
                Lrecorte = 105;
                largura = 145;
                break;
            case 12:
                posSpriteY = 73;
                posSpriteX = 105;
                Lrecorte = 50;
                largura = 90;
                break;
            case 13:
                posSpriteY = 73;
                posSpriteX = 153;
                Lrecorte = 40;
                largura = 80;
                break;
            case 14:
                posSpriteY = 73;
                posSpriteX = 193;
                Lrecorte = 40;
                largura = 80;
                break;
            case 15:
                posSpriteY = 73;
                posSpriteX = 233;
                Lrecorte = 40;
                largura = 80;
                break;
            case 16:
                luffybase.src = "sprites/luffy-base-sprites-transparente.png";
                movimento = "parado";
                animacaoLuffy();
                Kresposta();
                voltar();
                break;
        }

        sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (movimento == 'Bazooka') {
        requestAnimationFrame(bazooka);
    }
}

function Tsuchi() {
    movimento = "Tsuchi";
    animacaoLuffy();
}

function tsuchi() {
    if (frameCount < 4) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (sprites) {
            case 0:
                posSpriteX = 0;
                Lrecorte = 50;
                largura = 90;
                break;
            case 1:
                posSpriteX = 50;
                Lrecorte = 20;
                largura = 50;
                mover(500);
                break;
            case 2:
                posSpriteX = 75;
                Lrecorte = 50 + 20;
                largura = 90 + 25;
                break;
            case 3:
                posSpriteX = 145;
                Lrecorte = 50 + 30;
                largura = 90 + 35;
                break;
            case 4:
                posSpriteX = 222;
                Lrecorte = 50 + 30;
                largura = 90 + 35;
                break;
            case 5:
                posSpriteX = 302;
                Lrecorte = 50 + 45;
                largura = 90 + 50;
                break;
            case 6:
                posSpriteX = 395;
                Lrecorte = 50 + 45;
                largura = 90 + 50;
                break;
            case 7:
                posSpriteX = 490;
                Lrecorte = 50 + 35;
                largura = 90 + 40;
                break;
            case 8:
                posSpriteX = 578;
                Lrecorte = 50 + 25;
                largura = 90 + 30;
                break;
            case 9:
                posSpriteX = 655;
                Lrecorte = 50 + 30;
                largura = 90 + 35;
                break;
            case 10:
                luffybase.src = "sprites/luffy-base-sprites-transparente.png";
                movimento = "parado";
                animacaoLuffy();
                Kresposta();
                voltar();
                break;

        }

        sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (movimento == 'Tsuchi') {
        requestAnimationFrame(tsuchi);
    }
}


function gatlingPunches() {
    if (pframeCount < 5) {
        pframeCount++;
    } else {
        PposX = Math.floor(Math.random() * (800 - 675 + 1)) + 675;
        PposY = Math.floor(Math.random() * (180 - 400 + 1)) + 400;
        pframeCount = 0;
    }
    drawSprite();

    if (GPVisible == 'true') {
        requestAnimationFrame(gatlingPunches);
    }
}

function mover(valor) {
    posX = valor;
}

function voltar() {
    posX -= 40;
    drawSprite();

    if (posX > 150) {
        requestAnimationFrame(voltar);
    } else {
        posX = 150;
    }
}

function animacaoLuffy() {
    switch (movimento) {
        case 'parado':
            posSpriteX = 0;
            posSpriteY = 0;
            animaAvanco = 0;
            Lrecorte = 45;
            largura = 85;
            Arecorte = 80;
            parado();
            break

        case 'Pistol':
            posSpriteY = 270;
            sprites = 0;
            largura = 85;
            altura = 150;
            pistol();
            break;

        case 'Gatling':
            largura = 85;
            altura = 150;
            posSpriteY = 1185;
            sprites = 0;
            gatling();
            break;

        case 'Bazooka':
            sprites = 0;
            posSpriteX = 0;
            posSpriteY = 0;
            luffybase.src = "sprites/luffy-base-bazooka.png";
            Lrecorte = 70;
            largura = 110;
            Arecorte = 80;
            bazooka();
            break;

        case 'Tsuchi':
            sprites = 0;
            posSpriteX = 0;
            posSpriteY = 0;
            luffybase.src = "sprites/luffy-base-tsuchi.png";
            tsuchi();
            break;
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

function kMover() {
    KposX -= 20;
    invertedX = -KposX - Klargura;

    drawSprite();
    if (KposX > 200) {
        requestAnimationFrame(kMover);
    }
}

function kVoltar() {
    KposX += 20;
    invertedX = -KposX - Klargura;

    drawSprite();
    if (KposX < 700) {
        requestAnimationFrame(kVoltar);
    } else {
        KposX == 700;
    }
}

animacaoKaido();
var kOpcoes = ['Kattack1'];
var kopcaoAleatoria = Math.floor(Math.random() * 1);
var wait = 0;

function Kresposta() {
    if (wait < 50) {
        wait++;
    } else {
        Kmovimento = kOpcoes[kopcaoAleatoria];
        console.log(kopcaoAleatoria);
        console.log(Kmovimento);
        animacaoKaido();
        wait++;
    }
    if (wait <= 50) {
        requestAnimationFrame(Kresposta);
    }
    if (wait == 51) {
        wait = 0;
    }
}

//************************Funções de Audio **************************** */

// Obtém uma referência para o elemento de áudio
var meuAudio = document.getElementById("meuAudio");
meuAudio.volume = 0.05;

// Função para reproduzir o som
function reproduzirSom() {
    meuAudio.play();
}
function pararSom() {
    meuAudio.pause();
}

// função para reproduzir o som
// reproduzirSom();

function alterarVolume(volume) {
    meuAudio.volume = volume;
}