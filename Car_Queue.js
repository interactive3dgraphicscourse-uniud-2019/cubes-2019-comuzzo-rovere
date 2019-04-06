/** class for representing the enqueuing of cars before a traffic light
 * street: the street where the cars are travelling
 */
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
	
	/** MODIFIES scene, this.queue, position and isMoving of cars in this.queue
	 * spawnProb: probabilty of spawning a new car at the start of the road
	 * updates the position of the cars belonging to this.queue in the scene and
	 * in the queue according to the state of the preceding segment 
	 * sets the field isMoving to false for all the cars in this.queue it will
	 * be updated within startTick
	 * with probability spawnProb creates a new car at the start of the road and
	 * adds it to the scene
	 * if the head completed the crossing it is removed from the queue and returned
	 */
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
					curr.setDistFromOrigin(this.segmentSize * (i-1) 
							+ this.crossroadRadius 
							+ (this.pivotDist - this.crossroadRadius));
					curr.isMoving = false;
					this.queue[i-1] = curr;
					this.queue[i] = 0;
				} else if(i == this.segmentNumber - 1 && Math.random() < spawnProb){
					let spawnedCar = new Car(this.street, 
						Math.floor(Math.random() * 3),
						CARS_MESH[Math.floor(Math.random() * CARS_MESH.length)]);
					spawnedCar.setDistFromOrigin(this.segmentSize 
						* this.segmentNumber + (this.pivotDist - this.crossroadRadius));
					switch(spawnedCar.turnDir){
						case TURN_DIR.LEFT:
							spawnedCar.setDistRightFromOrigin(this.crossroadRadius/3.5);
							break;
						case TURN_DIR.STRAIGHT:
							spawnedCar.setDistRightFromOrigin(this.crossroadRadius/2);
							break;
						case TURN_DIR.RIGHT:
							spawnedCar.setDistRightFromOrigin(this.crossroadRadius/1.6);
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
	
	/** MODIFIES field isMoving of cars belonging to this.queue
	 * canGo: boolean indicating if the head can cross the crossroad
	 * sets isMoving of head to canGo and update the field isMoving of the cars
	 * according to the state of the preceding segment (true if the preceding is
	 * empty or isMoving, false otherwise)
	 */
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
	
	/** MODIFIES this.queue, position and rotation of cars in this.queue
	 * percentage: % of segment covered at current time
	 * updates the position of moving cars in this.queue according to
	 * percentage and car.outSegment
	 * if the head of the queue isMoving implements its crossing of the crossroad
	 */
	this.update = function(percentage){
		var head = this.queue[0];
		if(head != 0 && head.isMoving){
			switch(head.turnDir){
				case TURN_DIR.STRAIGHT:
					if(percentage < 0.5){
						head.setDistFromOrigin((0.5 - percentage) * 2 
								* (this.crossroadRadius + 2));
					} else {
						head.setDistFromOrigin((percentage - 0.5) * 2 
								* (this.crossroadRadius + 2) * -1);
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
						- this.segmentSize * percentage) 
						+ (this.pivotDist - this.crossroadRadius));
			}
		}
	}
	
	this.getHead = function(){
		return this.queue[0];
	}
} // CarQueue

/** class for a FIFO-like queue for managing the cars that have already crossed
 * the crossroad
 */
function OutQueue(scene){
	this.segmentNumber = Math.floor(ROAD_LENGTH/SEGMENT_SIZE);
	this.segmentSize = SEGMENT_SIZE;
	this.crossroadRadius = CROSSROAD_RADIUS;
	this.pivotDist = PIVOT_DIST;
	this.crossedQueue = [];
	this.scene = scene;
	this.crossingLength = CROSSROAD_RADIUS + (PIVOT_DIST - CROSSROAD_RADIUS);
	
	/** MODIFIES crossedQueue
	 * adds car to the end of this.crossedQueue
	 */
	this.add = function(car){
		car.outSegment = 0;
		this.crossedQueue.push(car);
	}
	
	/** MODIFIES position of cars belonging to this.crossedQueue
	 * percentage: % of segment covered at current time
	 * updates the position of the cars in this.crossedQueue according to
	 * percentage and car.outSegment
	 */
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
	
	/** MODIFY scene, cars belonging to this.crossedQueue
	 * removes from the scene the cars at the end of the road and increments
	 *  the field outSegment, for position calculation, on the others
	 */
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
