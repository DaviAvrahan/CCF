var jardim,coelho,maca,folha,laranja;
var imagemdojardim,imagemdocoelho,imagemdamaca,imagemdafolha,imagemdalaranja;
var macaG,folhaG,laranjaG;




function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
  imagemdamaca = loadImage("apple.png");
  imagemdafolha = loadImage("leaf.png");
  imagemdalaranja = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);

// Criando o menino corredor
coelho = createSprite(180,340,30,30);
coelho.scale =0.09;
coelho.addImage(imagemdocoelho);
  
macaG=new Group();
folhaG=new Group();
laranjaG=new Group();

}


function draw() {
  background(0);
  
 // edges= createEdgeSprites();
  //coelho.collide(edges);
  
  bordas= createEdgeSprites();
  coelho.collide(bordas);
  
  coelho.x = World.mouseX;
  
  criarmaca();
  criarfolhas();
  criarlaranjas();
  
  if (macaG.isTouching(coelho)){
    macaG.destroyEach();    
  }
  if (folhaG.isTouching(coelho)){
    folhaG.destroyEach();    
  }
  if(laranjaG.isTouching(coelho)){
    laranjaG.destroyEach();
  }

  drawSprites();
}
function criarmaca(){
  if (World.frameCount % 200 == 0){
  var maca = createSprite(Math.round(random(50, 350),40, 10, 10));
  maca.addImage(imagemdamaca);
  maca.scale = 0.05;
  maca.velocityY = 3;
  maca.lifetime = 150;
  macaG.add(maca);
  }
}
function criarfolhas(){
if (World.frameCount % 100 == 0){
  var folha = createSprite(Math.round(random(50, 350),40, 10, 10));
  folha.addImage(imagemdafolha);
  folha.scale = 0.05;
  folha.velocityY = 3;
  folha.lifetime = 150;
  folhaG.add(folha);
  }
}
function criarlaranjas(){
if (World.frameCount % 50 == 0){
  var laranja = createSprite(Math.round(random(50, 350),40, 10, 10));
  laranja.addImage(imagemdalaranja);
  laranja.scale = 0.05;
  laranja.velocityY = 4;
  laranja.lifetime = 150;
  laranjaG.add(laranja);
  }
}