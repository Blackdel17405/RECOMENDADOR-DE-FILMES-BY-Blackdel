//ficção, aventura, ação

//clube da luta, +18, ação, aventura
//scarface, +18, ação, aventura
//os vingadores, 12, açõa. ficção
//homem aranha no aranhaverso, 10, ficção, aventura
//Cidade de Deus, +18, ação, aventura 
//Coringa, 16, ação, aventura 

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de Filmes by:BLACKDEL")
  createSpan("Sua idade:")
  campoIdade = createInput("16");
  campoFantasia = createCheckbox("gosta de Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  
  fill(color(255,0,0));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura){
  if (idade >= 16) {
    if(idade >= 18) {
      return "Cidade de Deus"
    } else {
      if (idade >= 14){
        if (gostaDeFantasia || gostaDeAventura) {
          return "Deadpool"
        } else {
          return "Enola Holmes"
        }
      }else {
        if (idade >=14) {
            return "homem aranha no aranha  verso"
          } else {
        }
        if(gostaDeFantasia) {
          return "Harry potter";
        } else {
          return "Clube da luta";
        }
      }
    }
    
  } else {
    if(gostaDeFantasia || gostaDeAventura) {
      return "Os vingadores";
    } else{
      return "Forrest Gump";
    }
    
  }
}