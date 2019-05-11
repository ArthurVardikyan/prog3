var matrix = [];
var x = 50;
var y = 50;
var side = 19
for(var i = 0;i<y;i++){
  matrix[i] = [];
  for(var j = 0;j<x;j++){
    matrix[i][j] = 0;
  }
}

for(var z = 0 ; z < 1700 ; z++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 1;
  }
  else{
    z--;
  }
}
for(var z = 0 ; z < 500 ; z++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 2;
  }
  else{
    z--;
  }
}
for(var z = 0 ; z < 30 ; z++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 3;
  }
  else{
    z--;
  }
}
for(var z = 0 ; z < 100 ; z++){
  var xx = Math.floor(Math.random()*x);
  var yy = Math.floor(Math.random()*y);
  if(matrix[yy][xx] == 0){
    matrix[yy][xx] = 4;
  }
  else{
    z--;
  }
}
var frame = 0
var xotArr = [];
var kovArr = [];
var lionArr = [];
var mardArr =[];
function setup() {
    frameRate(60);
    createCanvas(x * side, y * side);
    background('#acacac');

    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          var xotik  = new Grass(j, i, 1);
          xotArr.push(xotik);
        }
        if(matrix[i][j] == 2){
          var kovik  = new Cow(j, i, 1);
          kovArr.push(kovik);

        }
        if(matrix[i][j] == 3){
          var lionik  = new Lion (j, i, 1);
          lionArr.push(lionik);

        }
		if(matrix[i][j] == 4){
          var marduk  = new Mard (j, i, 1);
          mardArr.push(marduk);

        }
      }
    }    
}
function draw() {
  frame++
  background('#acacac');
  for(var i in xotArr){
    xotArr[i].mul();
  }
  for(var i in kovArr){
    kovArr[i].mul();
    kovArr[i].eat();
   // kovArr[i].die();

  }
  for(var i in lionArr){
    lionArr[i].eat();


  }
for(var i in mardArr){
 
    mardArr[i].eat();
   

  }
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2){
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 3){
        fill("red");
        rect(j * side, i * side, side, side);
      }
	  else if(matrix[i][j] == 4){
        fill("black");
        rect(j * side, i * side, side, side);
      }
    }
  }
}