let x_Bola = 300;
let y_Bola = 40;
let diametro = 20;

let velocidadeXBola = 6;
let velocidadeYBola = 4;

let raio =  diametro / 2;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(x_Bola,y_Bola,diametro);
  
  x_Bola += velocidadeXBola ;
  
  y_Bola += velocidadeYBola ;
  
  
  
  if(x_Bola + raio > width || x_Bola - raio < 0){
    velocidadeXBola *= -1;
  }
  
  if(y_Bola  + raio > height || y_Bola - raio  < 0){
    velocidadeYBola *= -1;
  }
  
}