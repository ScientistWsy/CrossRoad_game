let trilha;
let batida;
let ponto;

function preLoad(){
  somTrilha = loadSound("sounds/trilha.mp3");
  somBatida = loadSound("sounds/batida.mp3");
  somPonto = loadSound("sounds/ponto.mp3");
}


function soundPonto(){
  somPonto.play();
}
