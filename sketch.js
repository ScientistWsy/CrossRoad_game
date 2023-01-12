let soundLoop = 0;

function setup() {
  createCanvas(600, 400);
  preLoad();
}

function draw() {
  background(img_estrada);
  imagens();
  ShowCars();
  MotionCar();
  CheckCar();
  Placar();
  Player();
  CheckCollide();
  Marcar();
  
  if(soundLoop==10){
    somTrilha.loop();
  }
  soundLoop += 1;
  
}




