function CarQueue(scene, street){
	this.segmentNumber = Math.floor(ROAD_LENGTH/SEGMENT_SIZE);
	this.segmentSize = SEGMENT_SIZE;
	this.crossroadRadius = CROSSROAD_RADIUS;
	this.pivotDist = PIVOT_DIST;

	this.scene = scene;
	this.street = street;
	this.queue = [];
	for(let i = 0; i < this.segmentNumber; i++){
		this.queue[i] = 0;
	}

	this.endTick = function(spawnProb){
		var crossedCar = 0;
		var head = this.queue[0];
		if(head != 0 && head.isMoving){
			crossedCar = head;
			this.queue[0] = 0;
		}
		for(let i = 1; i < this.segmentNumber; i++){
			let prev = this.queue[i-1];
			if(prev == 0){
				let curr = this.queue[i];
				if(curr != 0){
					curr.setDistFromOrigin(this.segmentSize * (i-1) + this.crossroadRadius + (this.pivotDist - this.crossroadRadius));
					curr.isMoving = false;
					this.queue[i-1] = curr;
					this.queue[i] = 0;
				} else if(i == this.segmentNumber - 1 && Math.random() < spawnProb){
					let spawnedCar = new Car(this.street, Math.floor(Math.random() * 3),
								CARS_MESH[Math.floor(Math.random() * CARS_MESH.length)]);
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
					if(spawnedCar.turnDir == TURN_DIR.STRAIGHT){
						this.scene.add(spawnedCar.mainParent);
					} else {
						this.scene.add(spawnedCar.pivot);
					}
					this.queue[this.segmentNumber - 1] = spawnedCar;
				}
			}
		}

		return crossedCar;
	}
	
	this.startTick = function(canGo){
		if(canGo){
			let head = this.queue[0];
			if(head != 0){
				head.isMoving = true;
			}
		}
		for(let i = 1; i < this.segmentNumber; i++){

				let prev = this.queue[i-1];
				let curr = this.queue[i];
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
		for(let i = 1; i < this.segmentNumber; i++){
			let car = this.queue[i];
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

function OutQueue(scene){
	this.segmentNumber = Math.floor(ROAD_LENGTH/SEGMENT_SIZE);
	this.segmentSize = SEGMENT_SIZE;
	this.crossroadRadius = CROSSROAD_RADIUS;
	this.pivotDist = PIVOT_DIST;
	this.crossedQueue = [];
	this.scene = scene;
	this.crossingLength = CROSSROAD_RADIUS + (PIVOT_DIST - CROSSROAD_RADIUS);
	
	this.add = function(car){
		car.outSegment = 0;
		this.crossedQueue.push(car);
	}
	
	this.update = function(percentage){
		for(let i = 0; i < this.crossedQueue.length; i++){
			let car = this.crossedQueue[i];
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
				== this.segmentNumber -2){
			let car = this.crossedQueue.shift();
			if(car.turnDir == TURN_DIR.STRAIGHT){
				this.scene.remove(car.mainParent);
			} else {
				this.scene.remove(car.pivot);
				
			}
		}
		for(var i = 0; i < this.crossedQueue.length; i++){
			this.crossedQueue[i].outSegment += 1;
		}
	}
} // OutQueue
