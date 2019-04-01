

function CarQueue(roadLength, segmentSize, crossroadRadius, pivotDist, scene, street){
	this.segmentNumber = Math.floor(roadLength/segmentSize);
	this.segmentSize = segmentSize;
	this.crossroadRadius = crossroadRadius;
	this.pivotDist = pivotDist;

	this.scene = scene;
	this.street = street;
	this.queue = [];
	for(var i = 0; i < this.segmentNumber; i++){
		this.queue[i] = 0;
	}

	
	this.endTick = function(spawnProb){
		var crossedCar = 0;
		var head = this.queue[0];
		if(head != 0 && head.isMoving){
			crossedCar = head;
			this.queue[0] = 0;
		}
		for(var i = 1; i < this.segmentNumber; i++){
			var prev = this.queue[i-1];
			if(prev == 0){
				var curr = this.queue[i];
				if(curr != 0){
					curr.setDistFromOrigin(this.segmentSize * (i-1) + this.crossroadRadius + (this.pivotDist - this.crossroadRadius));
					curr.isMoving = false;
					this.queue[i-1] = curr;
					this.queue[i] = 0;
				} else if(i == this.segmentNumber - 1 && Math.random() < spawnProb){
					var spawnedCar = new Car(this.street, Math.floor(Math.random() * 3));
					spawnedCar.setDistFromOrigin(this.segmentSize * this.segmentNumber + (this.pivotDist - this.crossroadRadius));
					switch(spawnedCar.turnDir){
						case TURN_DIR.LEFT:
							spawnedCar.setDistRightFromOrigin(2);
							break;
						case TURN_DIR.STRAIGHT:
							spawnedCar.setDistRightFromOrigin(3.5);
							break;
						case TURN_DIR.RIGHT:
							spawnedCar.setDistRightFromOrigin(4.5);
							break;
					}

					if(this.street == STREETS.EAST || this.street == STREETS.WEST){
						spawnedCar.mainParent.rotation.y = ANGLE_90;
					}
					this.scene.add(spawnedCar.pivot);
					this.queue[this.segmentNumber - 1] = spawnedCar;
				}
			}
		}

		return crossedCar;
	}

	
	this.startTick = function(canGo){
		if(canGo){
			var head = this.queue[0];
			if(head != 0){
				head.isMoving = true;
			}
		}

		for(var i = 1; i < this.segmentNumber; i++){

				var prev = this.queue[i-1];
				var curr = this.queue[i];
				if(curr != 0){
					if(prev == 0 || prev.isMoving){
					this.queue[i].isMoving = true;
					}
				}
		}
	}
	
	this.update = function(percentage){
		var head = this.queue[0];
		if(head != 0 && head.isMoving){
			switch(head.turnDir){
				case TURN_DIR.STRAIGHT:
					if(percentage < 0.5){
						head.setDistFromOrigin((0.5 - percentage) * 2 * (this.crossroadRadius + 2));
					} else {
						head.setDistFromOrigin((percentage - 0.5) * 2 * (this.crossroadRadius + 2) * -1);
					}
				break;
				case TURN_DIR.LEFT:
					head.pivot.rotation.y = ANGLE_90 * percentage;
				break;
				case TURN_DIR.RIGHT:
					
					head.pivot.rotation.y = -ANGLE_90 * percentage;
				break;
			}
		}
		for(var i = 1; i < this.segmentNumber; i++){
			var car = this.queue[i];
			if(car != 0 && car.isMoving){
				car.setDistFromOrigin((this.segmentSize * (i) + this.crossroadRadius
				- this.segmentSize * percentage) + (this.pivotDist - this.crossroadRadius));
			}
		}
	}
	
	this.getHead = function(){
		return this.queue[0];
	}
} // CarQueue

function OutQueue(roadLength, segmentSize, crossroadRadius, pivotDist, scene){
	this.segmentNumber = Math.floor(roadLength/segmentSize);
	this.segmentSize = segmentSize;
	this.crossroadRadius = crossroadRadius;
	this.pivotDist = pivotDist;
	this.crossedQueue = [];
	this.scene = scene;
	this.crossingLength = crossroadRadius + (pivotDist - crossroadRadius);
	
	this.add = function(car){
		car.outSegment = 0;
		this.crossedQueue.push(car);
	}
	
	this.update = function(percentage){
		for(var i = 0; i < this.crossedQueue.length; i++){
			var car = this.crossedQueue[i];
			if(car.turnDir == TURN_DIR.STRAIGHT){
				car.setDistFromOrigin((this.segmentSize * car.outSegment 
					+ this.crossingLength + this.segmentSize * percentage) * -1);
			} else {
				car.setDistFromOrigin((this.segmentSize * car.outSegment 
					- this.crossingLength + this.segmentSize * percentage) * -1);
			}
		}
	}
	
	this.endTick = function(){
		while(this.crossedQueue.length > 0 && this.crossedQueue[0].outSegment 
				== this.segmentNumber){
			var car = this.crossedQueue.shift();
			this.scene.remove(car.pivot);
		}
		for(var i = 0; i < this.crossedQueue.length; i++){
			this.crossedQueue[i].outSegment += 1;
		}
	}
} // OutQueue
