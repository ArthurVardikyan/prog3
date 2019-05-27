class Grass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	mul(){
		this.multiply++;
		if(this.multiply == 2){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				
			}
			this.multiply = 0;
		}
	}


}
class Cow{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 5;
		this.por = 5 ;
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
move(){
	this.por--;
	this.energy--;
	var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);

			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 2;
				matrix[this.y][this.x] = 0;
				this.x = x
				this.y = y
		}
}
	mul(){
		
		if(this.por == 8 ){
			var emptyCord = this.getDirections(0);
var emptyCord = this.getDirections(1);
			var cord = random(emptyCord);

			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norKov = new Cow(x,y,this.index);
				kovArr.push(norKov);


				matrix[y][x] = 2;
				this.por = 5
				
			}    
		}
	}
eat(){
 this.por++ ;
 this.energy++;
 var xotCord = this.getDirections(1);
  var xot = random(xotCord);
  if(xot){
  	var x = xot[0]
  	var y = xot[1]
  	matrix[this.y][this.x] = 0
  	matrix[y][x] = 2
	for(var i in xotArr){
		if(x == xotArr[i].x && xotArr[i].y == y){
			xotArr.splice(i,1);
		}
	}
	this.x = x
	this.y = y
	
  }
  else 
  {
		this.move();
	    this.por--;
		this.energy--;
		if(this.por == 1 || this.energy == 1){
			this.die();
		}
	}   
}
	die(){

{

		matrix[this.y][this.x] = 1;
		var xotik = new Grass(this.y,this.x,1);
		xotArr.push(xotik);
			for(var i in kovArr){

				if(this.x == kovArr[i].x && this.y == kovArr[i].y){
				kovArr.splice(i,1);
				//console.log("2-")
				}
			}
		}
	}
}
class Lion{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 50;
		this.canMul = 0;
		this.bazmanal = 1;
		this.bazmanal1 = 0;
		
	}

	newDirections(){
		this.directions = [
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x    , this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x + 2, this.y - 1],
			[this.x - 2, this.y    ],
			[this.x - 1, this.y    ],
			[this.x    , this.y    ],
			[this.x + 1, this.y    ],
			[this.x + 2, this.y    ],
			[this.x - 2, this.y + 1],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1],
			[this.x + 2, this.y + 1],
			[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x    , this.y + 2],
			[this.x + 1, this.y + 2],
			[this.x + 2, this.y + 2],
		];

	}
	
	newDirections1(){
		this.directionsMul = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y    ],
			[this.x + 1, this.y    ],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}

	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[1].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	getDirections1(t){
		this.newDirections1();
		var found = [];

		for(var i in this.directionsMul){
			var x = this.directionsMul[i][0];
			var y = this.directionsMul[i][1];
			if(x >= 0 && x < matrix[1].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directionsMul[i]);
				}
			}
		}
		return found;
	}


	mul(){
			if(lionArr.length <= 31){
			var emptyCord = this.getDirections1(0);

			var cord1 = random(emptyCord);
	
			if(cord1)
			{
				var x = cord1[0];
				var y = cord1[1];

				matrix[y][x] = 3;

				var a = new Lion(x,y);
				lionArr.push(a);
				

			}

					if(this.bazmanal1 == 1){
						this.bazmanal--;
						if(this.bazmanal==0){
						this.die();
							}
					}
	}
	if(kovArr.length < 1){
		this.die();
	}
}
	mul1(){
		this.canMul++;
		this.bazmanal1++;
		var emptyCord = this.getDirections1(3);

		if(emptyCord.length!=0 && this.canMul>=10)
		{
			this.canMul=0;
			this.mul();

		}

	}

	move(){
			var emptyCord = this.getDirections(1);

			var cord1 = random(emptyCord);
			

			if(cord1){
				var x = cord1[0];
				var y = cord1[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;


				this.x = x;
				this.y = y;
				for(var i in xotArr){
					if(xotArr[i].x == this.x && xotArr[i].y == this.y){
						xotArr.splice(i,1);
					}
				}

				}

			else {
				this.move1();
			}
		}


	move1(){
			this.energy--;
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
		 
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;


				this.x = x;
				this.y = y;
				}
	}


		
	eat(){
		this.mul1();
		var emptyCord = this.getDirections(4);

		var cord = random(emptyCord);

		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;


			this.x = x;
			this.y = y;

			  for(var i in mardArr){
					if(x == mardArr[i].x && y == mardArr[i].y){
					 mardArr.splice(i, 1);
						
								
						}
					}
				}
		else{
			var emptyCord = this.getDirections(2);

		var cord = random(emptyCord);

		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;


			this.x = x;
			this.y = y;

			  for(var i in kovArr){
					if(x == kovArr[i].x && y == kovArr[i].y){
					 kovArr.splice(i, 1);
						
								
						}
					}
				}
		else{
		  	this.move();
			  		this.energy--;
					if(this.energy==1){
						this.die();
					}

		  	
					}


		}
		this.mul1();
		}
		
	die(){
		
		matrix[this.y][this.x] = 0;

		for(var i in lionArr){
			if(lionArr[i].x == this.x && lionArr[i].y == this.y){
				lionArr.splice(i, 1);
			}
		}
	}
}
class Mard{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 20;
		this.por = 4 ;
	}

	newDirections(){
		this.directions = [
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x    , this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x + 2, this.y - 1],
			[this.x - 2, this.y    ],
			[this.x - 1, this.y    ],
			[this.x    , this.y    ],
			[this.x + 1, this.y    ],
			[this.x + 2, this.y    ],
			[this.x - 2, this.y + 1],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1],
			[this.x + 2, this.y + 1],
			[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x    , this.y + 2],
			[this.x + 1, this.y + 2],
			[this.x + 2, this.y + 2]
		];

	}

	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	
	move(){
			var emptyCord = this.getDirections(1);

			var cord1 = random(emptyCord);
			

			if(cord1){
				var x = cord1[0];
				var y = cord1[1];

				matrix[y][x] = 4;
				matrix[this.y][this.x] = 0;


				this.x = x;
				this.y = y;
				
				}

			else {
				this.move1();
			}
		}

move1(){
			this.energy--;
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
		 
			if(cord){
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 4;
				matrix[this.y][this.x] = 0;


				this.x = x;
				this.y = y;
				}
	}
	mul(){
		
			var emptyCord = this.getDirections(0);
            
			var cord = random(emptyCord);

			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norMard = new Mard(x,y,this.index);
				mardArr.push(norMard);
                console.log("4+")
				matrix[y][x] = 4;
				this.por = 4
			}
			
		}
	
eat(){
 
  var xotCord = this.getDirections(1);
  var xot = random(xotCord);
  if(xot){	
  	this.por++;
  	var x = xot[0]
  	var y = xot[1]
  	matrix[this.y][this.x] = 0
  	matrix[y][x] = 4
	for(var i in xotArr){
		if(x == xotArr[i].x && xotArr[i].y == y){
			xotArr.splice(i,1);
			
				if(this.por == 8){
	            this.mul();
		}
	}
	}
	this.x = x
	this.y = y

		
  }
  else 
  {
		var kovCord = this.getDirections(2);
  var kov = random(kovCord);
  if(kov){
  	var x = kov[0]
  	var y = kov[1]
  	matrix[this.y][this.x] = 0
  	matrix[y][x] = 4
	for(var i in kovArr){
		if(x == kovArr[i].x && kovArr[i].y == y){
			kovArr.splice(i,1);
		    this.por++
	        if(this.por == 8){
	        this.mul();
		}
	}
	this.x = x
	this.y = y
	
	
}

  }
  else 
  {

		this.move();
		this.por--;
					if(this.por == 2){
						this.die();
					}
	}   
					
	}   
	
}


	die(){

		matrix[this.y][this.x] = 0;
			for(var i in mardArr){

				if(this.x == mardArr[i].x && this.y == mardArr[i].y){
				mardArr.splice(i,1);
				console.log("4-")
				}
			}
		
	}
}
	