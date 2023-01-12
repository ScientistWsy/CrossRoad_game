let xCarro = [700, 700, 700, -100, -100, -100]
let yCarro = [40, 96, 150, 210, 266, 320]
let CarSpeed = [-3, -5.5, -7.7, 6.5, 4.5, 3.5]

function MotionCar(){
  for(let i = 0; i < 3; i += 1){
    xCarro[i] += CarSpeed[i];
  }
  for(let i = 5; i > 2; i -= 1){
    xCarro[i] += CarSpeed[i];
  }
  
  switch (pontos){
    case 4:
      CarSpeed = [-5,-7,-9,7,5,4];
      break;
    case 8:
      CarSpeed = [-6,-8,-10,8.5,6,4.5];
      break;
    case 12:
      CarSpeed = [-8,-10,-5,5,9,6.5,6];
      break;
    case 16:
      CarSpeed = [-9,-10.2,-7.5,10,7.5,7];
      break;
    case 20:
      CarSpeed = [-11,-10.7,-8,11,8.5,8];
      break;
    case 24:
      CarSpeed = [-12,-11,-8.5,11.5,9,8.5];
      break;
    case 28:
      CarSpeed = [-11,-12,-13,8,9.13];
      break;
    case 32:
      CarSpeed = [-13,-13,-13,10,10.10];
      break;
  }
  
}

function CheckCar(){
  for(let i = 0; i < 3; i += 1){
    if(xCarro[i]<-100){
      xCarro[i] = 700;
    }
  }
  for(let i = 6; i > 2; i -= 1){
    if(xCarro[i]>700){
      xCarro[i] = -100;
    }
  }
}

function ShowCars(){
  for(let i = 0; i < 3; i += 1){
    image(img_carro[i], xCarro[i], yCarro[i], 50, 40);
  }
  for(let i = 5; i > 2; i -= 1){
    image(img_carro[i], xCarro[i], yCarro[i], 50, 40)
  }
}