let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d'); //Contexto da imagem

let luffybase = new Image(); //Declara nova imagem
luffybase.src = "sprites/luffy-base-sprites-transparente.png"; //Declara o local da imagem
let kaidoBase = new Image();
kaidoBase.src = "sprites/kaido_human.png";

//Luffy
let posSpriteX = 0; //Valor da posiçãoX da imagem
let posSpriteY = 0;
let Lrecorte;
let Arecorte;
let posX = 0;
let posY = 0;
let largura = 85;
let altura = 150;
let sprites = 0;
let movimento = "parado";

//Kaido
let KposSpriteX = 30; //Valor da posiçãoX da imagem
let KposSpriteY = 62;
let KLrecorte =82;
let KArecorte =130;
let KposX = 0;
let KposY = 150;
let Klargura = 150;
let Kaltura = 210;
let Ksprites = 0;
let Kmovimento = "parado";

luffybase.onload = () => { //espera a imagem carregar para depois abri-la
    //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
    ctx.drawImage(luffybase, posSpriteX, 0, 45, 80, posX, posY, 85, 150)
}
    kaidoBase.onload = () =>{
    ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, KposX, KposY, Klargura, Kaltura);
}

let animaAvanco = 0; //Define se o sprite se a animação esta indo ou voltando

function animacaoLuffy(){
    switch (movimento) {
        case 'parado':
            posSpriteX = 0;
            posSpriteY = 0;
            animaAvanco=0;
            var parado = setInterval(() => {
                ctx.clearRect(posX, posY, 85, 150);
                
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
                ctx.drawImage(luffybase, posSpriteX, posSpriteY, 45, 80, posX, posY, 85, 150);

                if (movimento != 'parado') {
                    clearInterval(parado);
                }
            }, 400)
            break

        case 'atacar':
            posSpriteY = 270;
            sprites = 0;
            largura = 85;
            altura = 150;

            let atacar = setInterval(() => {
                ctx.clearRect(posX, posY, largura, altura);

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
                        animacaoLuffy();
                        break;
                }

                sprites++;
                ctx.drawImage(luffybase, posSpriteX, posSpriteY, Lrecorte, Arecorte, posX, posY, largura, 150);
            }, 250)
    }
}
animacaoLuffy();

let KanimaAvanco = 0;

function animacaoKaido(){
        Ksprites = 0;

    var kparado = setInterval(() => {
        ctx.clearRect(KposX, KposY, Klargura, Kaltura);

        if (KanimaAvanco == 0) {
            Ksprites++;
            if (Ksprites==4) {
                KanimaAvanco = 1;
            }
        }else{
            Ksprites--;
            if (Ksprites==0) {
                KanimaAvanco = 0;
            }
        }
        console.log(Ksprites)

        switch(Ksprites){
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

        //imagem, XiniRecorte, YiniRecorte, Lrecorte, Arecorte, Arecorte, posX, posy,Largura, Altura,
        ctx.drawImage(kaidoBase, KposSpriteX, KposSpriteY, KLrecorte, KArecorte, KposX, KposY, Klargura, Kaltura);
    }, 400)
}
animacaoKaido();

function atacar() {
    movimento = "atacar";
    animacaoLuffy();
}