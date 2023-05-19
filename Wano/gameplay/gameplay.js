let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); //Contexto da imagem

// Definindo a cor de fundo
var corFundo = '#f1f1f1';

//Contador de frames
var frameCount = 0;
var KframeCount = 0;

let luffybase = new Image(); //Declara nova imagem
luffybase.src = "sprites/luffy-base-sprites-transparente.png"; //Declara o local da imagem
let kaidoBase = new Image();
kaidoBase.src = "sprites/kaido_human_transparente.png";
let luffyPunch = new Image();
luffyPunch.src = "sprites/luffy-punch.png";

var luffy = {
    posSpriteX: 0,
    posSpriteY: 0,
    Lrecorte: undefined,
    Arecorte: undefined,
    posX: 150,
    posY: 200,
    largura: 85,
    altura: 150,
    sprites: 0,
    movimento: "parado",
    health:100
};

var kaido = {
    posSpriteX: 30,
    posSpriteY: 62,
    Lrecorte: 82,
    Arecorte: 130,
    posX: 700,
    posY: 180,
    largura: 150,
    altura: 210,
    sprites: 0,
    movimento: "parado",
    animaAvanco: 0,
    invertedX: undefined,
    health: 100
};
kaido.invertedX = -kaido.posX - kaido.largura;

var tempoEspera = 5;

//Definindo variáveis dos socos
let PposX = 700;
let PposY = 180;
let GPVisible = 'false';
let pframeCount = 0;

luffybase.onload = () => { //espera a imagem carregar para depois abri-la
    drawSprite();
}

// Definindo as dimensões da barra de vida
var barWidth = 300;
var barHeight = 30;

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
    ctx.drawImage(luffybase, luffy.posSpriteX, luffy.posSpriteY, luffy.Lrecorte, luffy.Arecorte, luffy.posX, luffy.posY, luffy.largura, 150);
    //Desenha Barra de vida
    drawHealthBar(ctx, 100, 600, barWidth, barHeight, luffy.health, "#008E31");
    drawHealthBar(ctx, 600, 600, barWidth, barHeight, kaido.health, "#8C030E");
    if (GPVisible == 'true') {
        ctx.drawImage(luffyPunch, PposX, PposY);
    }
    drawText();

    ctx.scale(-1, 1);
    ctx.drawImage(kaidoBase, kaido.posSpriteX, kaido.posSpriteY, kaido.Lrecorte, kaido.Arecorte, kaido.invertedX, kaido.posY, kaido.largura, kaido.altura);
    // ctx.drawImage(kaidoBase, kaido.posSpriteX, kaido.posSpriteY, kaido.Lrecorte, kaido.Arecorte, kaido.posX, kaido.posY, kaido.largura, kaido.altura);
    ctx.scale(1, 1);

}

function drawText() {
    ctx.fillStyle = '#000';
    ctx.font = "25px Arial";
    ctx.fillText("Luffy", 100, 580);
    ctx.fillText("Kaido", 600, 580);
    ctx.font = "20px Arial";
    ctx.fillText(luffy.health + "/100", 205, 620);
    ctx.fillText(kaido.health + "/100", 705, 620);
}

// **********************************Animações Luffy*****************************
function parado() {
    if (frameCount < 30) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (animaAvanco == 0) {
            luffy.posSpriteX += 43;
            if (luffy.posSpriteX >= 129) {
                animaAvanco = 1;
            }
        }
        if (animaAvanco == 1) {
            luffy.posSpriteX -= 43;
            if (luffy.posSpriteX <= 0) {
                animaAvanco = 0;
            }
        }

        drawSprite();

        frameCount = 0;
    }
    if (luffy.movimento == 'parado') {
        requestAnimationFrame(parado);
    }
}

function Pistol() {
    luffy.movimento = "Pistol";
    animacaoLuffy();
}

function pistol() {
    if (frameCount < 5) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (luffy.sprites) {
            case 0:
                luffy.posSpriteX = 5;
                luffy.Lrecorte = 35;
                luffy.Arecorte = 80;
                luffy.largura = 78;
                break;
            case 1:
                luffy.posSpriteX = 43;
                break;
            case 2:
                luffy.posSpriteX = 81;
                break;
            case 3:
                luffy.posSpriteX = 119;
                luffy.Lrecorte = 27;
                luffy.Arecorte = 80;
                luffy.largura = 67;
                mover(500);
                break;
            case 4:
                luffy.posSpriteX = 145;
                luffy.Lrecorte = 58;
                luffy.Arecorte = 80;
                luffy.largura = 98;
                break;
            case 5:
                luffy.posSpriteX = 203;
                luffy.Lrecorte = 58;
                break;
            case 6:
                luffy.posSpriteX = 267;
                luffy.Lrecorte = 58;
                break;
            case 7:
                luffy.posSpriteX = 330;
                luffy.Lrecorte = 60;
                luffy.largura = 100;
                break;
            case 8:
                luffy.posSpriteX = 400;
                luffy.largura = 100;
                break;
            case 9:
                luffy.posSpriteX = 462;
                luffy.Lrecorte = 58;
                luffy.largura = 98;
                break;
            case 10:
                luffy.posSpriteX = 520;
                luffy.Lrecorte = 45;
                luffy.largura = 80;
                voltar();
                //Diminui a vida
                kaido.health -= 5;
                break;
            case 11:
                luffy.movimento = "parado";
                animacaoLuffy();
                Kresposta();
                break;
        }

        luffy.sprites++;

        drawSprite();

        frameCount = 0;
    }
    if (luffy.movimento == 'Pistol') {
        requestAnimationFrame(pistol);
    }
}

function Gatling() {
    luffy.movimento = "Gatling";
    animacaoLuffy();
}

function gatling() {
    if (frameCount < tempoEspera) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (luffy.sprites) {
            case 0:
                luffy.posSpriteX = 12;
                luffy.Lrecorte = 45;
                luffy.largura = 85;
                luffy.Arecorte = 70;
                luffy.altura = 140;
                break;
            case 1:
                luffy.posSpriteX = 57;
                luffy.Lrecorte = 45;
                luffy.largura = 83;
                break;
            case 2:
                luffy.posSpriteX = 105;
                luffy.Lrecorte = 45;
                luffy.largura = 88;
                break;
            case 3:
                luffy.posSpriteX = 154;
                luffy.Lrecorte = 45;
                luffy.largura = 88;
                break;
            case 4:
                luffy.posSpriteX = 205;
                luffy.Lrecorte = 65;
                luffy.largura = 108;
                tempoEspera = 70;
                GPVisible = 'true'
                gatlingPunches();
                break;
            case 5:
                luffy.posSpriteX = 275;
                luffy.Lrecorte = 60;
                luffy.largura = 103;
                tempoEspera = 5;
                GPVisible = 'false'
                break;
            case 6:
                luffy.posSpriteX = 335;
                luffy.Lrecorte = 60;
                luffy.largura = 103;
                break;
            case 7:
                luffy.posSpriteX = 400;
                luffy.Lrecorte = 65;
                luffy.largura = 108;
                GPVisible = 'true'
                gatlingPunches();
                tempoEspera = 70;
                break;
            case 8:
                luffy.posSpriteX = 468;
                luffy.Lrecorte = 65;
                luffy.largura = 108;
                tempoEspera = 5;
                GPVisible = 'false'
                break;
            case 9:
                luffy.posSpriteX = 535;
                luffy.Lrecorte = 65;
                luffy.largura = 108;
                break;
            case 10:
                luffy.posSpriteX = 600;
                luffy.Lrecorte = 45;
                luffy.largura = 85;
                break;
            case 11:
                luffy.posSpriteX = 650;
                luffy.Lrecorte = 45;
                luffy.largura = 85;
                break;
            case 12:
                tempoEspera = 5;
                luffy.movimento = "parado";
                animacaoLuffy();
                Kresposta();
                break;
        }

        luffy.sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (luffy.movimento == 'Gatling') {
        requestAnimationFrame(gatling);
    }
}

function Bazooka() {
    luffy.movimento = "Bazooka";
    animacaoLuffy();
}

function bazooka() {
    if (frameCount < 3) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (luffy.sprites) {
            case 0:
                luffybase.src = "sprites/luffy-base-bazooka.png";
                luffy.posSpriteX = 0;
                luffy.Lrecorte = 70;
                luffy.largura = 110;
                luffy.Arecorte = 80;
                break;
            case 1:
                luffy.posSpriteX = 80;
                break;
            case 2:
                luffy.posSpriteX = 150;
                break;
            case 3:
                luffy.posSpriteX = 210;
                luffy.Lrecorte = 45;
                luffy.largura = 85;
                mover(500);
                break;
            case 4:
                luffy.posSpriteX = 255;
                luffy.Lrecorte = 70;
                luffy.largura = 110;
                break;
            case 5:
                luffy.posSpriteX = 320;
                luffy.Lrecorte = 65;
                luffy.largura = 110;
                break;
            case 6:
                luffy.posSpriteX = 385;
                luffy.Lrecorte = 100;
                luffy.largura = 180;
                break;
            case 7:
                luffy.posSpriteX = 485;
                luffy.Lrecorte = 65;
                luffy.largura = 110;
                break;
            case 8:
                luffy.posSpriteX = 550;
                luffy.Lrecorte = 120;
                luffy.largura = 160;
                break;
            case 9:
                luffy.posSpriteX = 670;
                luffy.Lrecorte = 105;
                luffy.largura = 145;
                break;
            case 10:
                luffy.posSpriteX = 775;
                luffy.Lrecorte = 105;
                luffy.largura = 145;
                break;
            case 11:
                luffy.posSpriteY = 73;
                luffy.posSpriteX = 0;
                luffy.Lrecorte = 105;
                luffy.largura = 145;
                break;
            case 12:
                luffy.posSpriteY = 73;
                luffy.posSpriteX = 105;
                luffy.Lrecorte = 50;
                luffy.largura = 90;
                break;
            case 13:
                luffy.posSpriteY = 73;
                luffy.posSpriteX = 153;
                luffy.Lrecorte = 40;
                luffy.largura = 80;
                break;
            case 14:
                luffy.posSpriteY = 73;
                luffy.posSpriteX = 193;
                luffy.Lrecorte = 40;
                luffy.largura = 80;
                break;
            case 15:
                luffy.posSpriteY = 73;
                luffy.posSpriteX = 233;
                luffy.Lrecorte = 40;
                luffy.largura = 80;
                break;
            case 16:
                luffybase.src = "sprites/luffy-base-sprites-transparente.png";
                luffy.movimento = "parado";
                animacaoLuffy();
                Kresposta();
                voltar();
                break;
        }

        luffy.sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (luffy.movimento == 'Bazooka') {
        requestAnimationFrame(bazooka);
    }
}

function Tsuchi() {
    luffy.movimento = "Tsuchi";
    animacaoLuffy();
}

function tsuchi() {
    if (frameCount < 4) {
        frameCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (luffy.sprites) {
            case 0:
                luffy.posSpriteX = 0;
                luffy.Lrecorte = 50;
                luffy.largura = 90;
                break;
            case 1:
                luffy.posSpriteX = 50;
                luffy.Lrecorte = 20;
                luffy.largura = 50;
                mover(500);
                break;
            case 2:
                luffy.posSpriteX = 75;
                luffy.Lrecorte = 50 + 20;
                luffy.largura = 90 + 25;
                break;
            case 3:
                luffy.posSpriteX = 145;
                luffy.Lrecorte = 50 + 30;
                luffy.largura = 90 + 35;
                break;
            case 4:
                luffy.posSpriteX = 222;
                luffy.Lrecorte = 50 + 30;
                luffy.largura = 90 + 35;
                break;
            case 5:
                luffy.posSpriteX = 302;
                luffy.Lrecorte = 50 + 45;
                luffy.largura = 90 + 50;
                break;
            case 6:
                luffy.posSpriteX = 395;
                luffy.Lrecorte = 50 + 45;
                luffy.largura = 90 + 50;
                break;
            case 7:
                luffy.posSpriteX = 490;
                luffy.Lrecorte = 50 + 35;
                luffy.largura = 90 + 40;
                break;
            case 8:
                luffy.posSpriteX = 578;
                luffy.Lrecorte = 50 + 25;
                luffy.largura = 90 + 30;
                break;
            case 9:
                luffy.posSpriteX = 655;
                luffy.Lrecorte = 50 + 30;
                luffy.largura = 90 + 35;
                break;
            case 10:
                luffybase.src = "sprites/luffy-base-sprites-transparente.png";
                luffy.movimento = "parado";
                animacaoLuffy();
                Kresposta();
                voltar();
                break;

        }

        luffy.sprites++;
        drawSprite();
        frameCount = 0;
    }
    if (luffy.movimento == 'Tsuchi') {
        requestAnimationFrame(tsuchi);
    }
}

//Animação socos
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
//mover personagem
function mover(valor) {
    luffy.posX = valor;
}

function voltar() {
    luffy.posX -= 40;
    drawSprite();

    if (luffy.posX > 150) {
        requestAnimationFrame(voltar);
    } else {
        luffy.posX = 150;
    }
}
//escolhe a nimação a ser reproduzida e zera os valores
function animacaoLuffy() {
    switch (luffy.movimento) {
        case 'parado':
            luffy.posSpriteX = 0;
            luffy.posSpriteY = 0;
            animaAvanco = 0;
            luffy.Lrecorte = 45;
            luffy.largura = 85;
            luffy.Arecorte = 80;
            parado();
            break

        case 'Pistol':
            luffy.posSpriteY = 270;
            luffy.sprites = 0;
            luffy.largura = 85;
            luffy.altura = 150;
            pistol();
            disableBtn()
            break;

        case 'Gatling':
            luffy.largura = 85;
            luffy.altura = 150;
            luffy.posSpriteY = 1185;
            luffy.sprites = 0;
            gatling();
            disableBtn()
            break;

        case 'Bazooka':
            luffy.sprites = 0;
            luffy.posSpriteX = 0;
            luffy.posSpriteY = 0;
            luffybase.src = "sprites/luffy-base-bazooka.png";
            luffy.Lrecorte = 70;
            luffy.largura = 110;
            luffy.Arecorte = 80;
            bazooka();
            disableBtn()
            break;

        case 'Tsuchi':
            luffy.sprites = 0;
            luffy.posSpriteX = 0;
            luffy.posSpriteY = 0;
            luffybase.src = "sprites/luffy-base-tsuchi.png";
            tsuchi();
            disableBtn()
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
        if (kaido.animaAvanco == 0) {
            kaido.sprites++;
            if (kaido.sprites == 3) {
                kaido.animaAvanco = 1;
            }
        } else {
            kaido.sprites = 0;
            if (kaido.sprites == 0) {
                kaido.animaAvanco = 0;
            }
        }

        switch (kaido.sprites) {
            case 0:
                kaido.posSpriteX = 32;
                break;
            case 1:
                kaido.posSpriteX = 150;
                break;
            case 2:
                kaido.posSpriteX = 263;
                break;
            case 3:
                kaido.posSpriteX = 370;
                break;

        }
        drawSprite();
        KframeCount = 0;
    }
    if (kaido.movimento == 'parado') {
        requestAnimationFrame(kParado);
    }
}

function Kattack1() {
    if (KframeCount < 8) {
        KframeCount++;
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch (kaido.sprites) {
            case 0:
                kaido.posSpriteX = 110;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 122;
                kaido.largura = 190;
                kaido.sprites = 1;
                kMover();
                break;
            case 1:
                kaido.posSpriteX = 245;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 165; //luffy.largura do Recorte
                kaido.largura = 255; //luffy.largura da imagem
                kaido.sprites = 2;
                break;
            case 2:
                kaido.posSpriteX = 425;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 150; //luffy.largura do Recorte
                kaido.largura = 240; //luffy.largura da imagem
                kaido.sprites = 3;
                break;
            case 3:
                kaido.posSpriteX = 565;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 160; //luffy.largura do Recorte
                kaido.largura = 250; //luffy.largura da imagem
                kaido.sprites = 4;
                break;
            case 4:
                kaido.posSpriteX = 735;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 145; //luffy.largura do Recorte
                kaido.largura = 235; //luffy.largura da imagem
                kaido.sprites = 5;
                break;
            case 5:
                kaido.posSpriteX = 875;
                kaido.posSpriteY = 760;
                kaido.Lrecorte = 122;
                kaido.largura = 190;
                kaido.sprites = 6;
                break;
            case 6:
                kVoltar();
                enableBtn();
                kaido.movimento = 'parado';
                animacaoKaido();
                break;
        }
        drawSprite();
        KframeCount = 0;
    }
    if (kaido.movimento == "Kattack1") {
        requestAnimationFrame(Kattack1);
    }
}

function animacaoKaido() {
    switch (kaido.movimento) {
        case 'parado':
            kaido.posSpriteX = 30;
            kaido.posSpriteY = 62;
            kaido.sprites = 0;
            kaido.Lrecorte = 82;
            kaido.Arecorte = 130;
            kaido.largura = 150;
            kaido.altura = 210;
            kParado();
            break;
        case 'Kattack1':
            kaido.sprites = 0;
            Kattack1();
            break;
        case 'dano':
            break;
    }
}

function kMover() {
    kaido.posX -= 20;
    kaido.invertedX = -kaido.posX - kaido.largura;

    drawSprite();
    if (kaido.posX > 200) {
        requestAnimationFrame(kMover);
    }
}

function kVoltar() {
    kaido.posX += 20;
    kaido.invertedX = -kaido.posX - kaido.largura;

    drawSprite();
    if (kaido.posX < 700) {
        requestAnimationFrame(kVoltar);
    } else {
        kaido.posX == 700;
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
        kaido.movimento = kOpcoes[kopcaoAleatoria];
        console.log(kopcaoAleatoria);
        console.log(kaido.movimento);
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

// Função desabilitar botões

function disableBtn(){
    var botoes = document.getElementsByClassName("golpes")[0].getElementsByTagName("button");

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
    }
}

function enableBtn(){
    var botoes = document.getElementsByClassName("golpes")[0].getElementsByTagName("button");

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = false;
    }
}
