var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1,car2,car3,car4,cars;
var track,car1Img,car2Img,car3Img,car4Img;

function preload(){
  track = loadImage("C:\Users\Nikhil\Desktop\CARS\track.jpg");
  car1Img = loadImage("C:\Users\Nikhil\Desktop\CARS\car1.png");
  car2Img = loadImage("C:\Users\Nikhil\Desktop\CARS\car2.png");
  car3Img = loadImage("C:\Users\Nikhil\Desktop\CARS\car3.png");
  car4Img = loadImage("C:\Users\Nikhil\Desktop\CARS\car4.png");
  ground = loadImage("C:\Users\Nikhil\Desktop\CARS\ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if(gameState === 2){
  game.end();

}
}
