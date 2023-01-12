//Variável Personagens

let xPlayer = 100;
let yPlayer = 367;

let collide = false;

//Variável Pontos do Jogo:

let pontos = 0;
let checkPontos;

function Player(){
  if(keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPlayer += 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xPlayer += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xPlayer -= 3;
  }
  
  //Limites da Tela X e Y:
  
  if(yPlayer>height-30){
    yPlayer = height-30;
  }
  if(yPlayer<0){
    yPlayer=0;
  }
  if(xPlayer<0){
    xPlayer=0;
  }
  if(xPlayer>width-30){
    xPlayer=width-30;
  }
}

function CheckCollide(){
  for(let i = 0; i < img_carro.length; i++){
    collide = collideRectRect(xCarro[i], yCarro[i], 50, 40, xPlayer, yPlayer, 15, 15)
    if(collide){
      //Collide();
      
      pontos -= 1;
      
      if(pontos<1){
        pontos = 0;
      }
      
      if((pontos%2)==0){
        xPlayer = 100;
        yPlayer = 367;
      }
      else{
        xPlayer = 100;
        yPlayer = 5;
      }
      
      if(pontos<5){
        CarSpeed = [-3, -5.5, -7.7, 6.5, 4.5, 3.5]
      }
      
      somBatida.play();
    }
  }
}

function Collide(){
  yPlayer = 367;
  xPlayer = 100;
}

function Placar(){
  textSize(20);
  textAlign(CENTER);
  fill("blue");
  text(pontos, 550,25);
}

function Marcar(){
  
  checkPontos = pontos%2;
  
  if(yPlayer<10){
    
    if(checkPontos<1){
      pontos += 1;
      soundPonto();
    }
  }
  
  if(yPlayer>350){
    
    if(checkPontos>0){
      pontos += 1;
      soundPonto();
    }
  }
}

