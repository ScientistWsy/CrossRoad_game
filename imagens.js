//Variáveis das Imagens

let img_estrada;
let img_ator;
let img_carro1;
let img_carro2;
let img_carro3;
let img_superCar;
let img_chicken;
let img_people;
let img_person;

//Função de pré-carregamento das imagens

function preload(){
  img_estrada = loadImage("imagens/estrada.png")
  img_ator = loadImage("imagens/ator-1.png")
  img_carro1 = loadImage("imagens/carro-1.png")
  img_carro2 = loadImage("imagens/carro-2.png")
  img_carro3 = loadImage("imagens/carro-3.png")
  img_superCar = loadImage("imagens/SuperCar.png")
  img_people = loadImage("imagens/People.png")
  img_person = loadImage("imagens/Person.png")
  img_chicken = loadImage("imagens/Chicken.png")
  img_carro = [img_carro1,img_carro2,img_carro3,img_superCar,img_superCar,img_superCar]
}

function imagens(){
  image(img_chicken, xPlayer, yPlayer, 30, 30)
}