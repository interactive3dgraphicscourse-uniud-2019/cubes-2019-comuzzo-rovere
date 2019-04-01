function CarQueue(roadLength, segmentSize, crossroadRadius, scene, street){
	this.segmentNumber = Math.floor(roadLength/segmentSize);
	this.segmentSize = segmentSize;
	this.crossroadRadius = crossroadRadius;
	this.scene = scene;
	this.street = street;
	this.queue = [];
	for(var i = 0; i < this.segmentNumber; i++){
		this.queue[i] = 0;
	}


	this.endTick = function(spawnProb){
		
		var head = this.queue[0];
		
		if(head != 0 && head.isMoving ){
			this.queue[0] = 0;
		}
		
		for(var i = 1; i < this.segmentNumber; i++){
			var previous = this.queue[i-1];
			if(previous === 0){
				var current = this.queue[i];
				if(current !== 0){
				current.setDistFromOrigin(this.segmentSize * (i-1) + this.crossroadRadius + 2);
				current.isMoving = false;
				this.queue[i-1] = current;
				this.queue[i] = 0;
				} else if(i == this.segmentNumber - 1 && Math.random() < spawnProb){
					var spawnedCar = new Car(this.street, Math.floor(Math.random() * 3));
					spawnedCar.setDistFromOrigin(this.segmentSize * this.segmentNumber + 2);
					spawnedCar.setDistRightFromOrigin(3.5);
					spawnedCar.posX = spawnedCar.mainParent.position.x;
					spawnedCar.posZ = spawnedCar.mainParent.position.z;
					if(this.street == STREETS.EAST || this.street == STREETS.WEST){
						spawnedCar.mainParent.rotation.y = ANGLE_90;
					}
					this.scene.add(spawnedCar.pivot);
					this.queue[this.segmentNumber - 1] = spawnedCar;
				}
			}
		}
		if(this.canGo){
		return head;
		}else{return 0;}
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
	
	this.update = function(perc){
		
			var head = this.queue[0];
			if(head != 0 && head.isMoving){
				switch(head.turnDir){
				case TURN_DIR.STRAIGHT:
					head.setDistFromOrigin(( this.crossroadRadius - this.segmentSize * perc) + 2);	
				break;
				case TURN_DIR.LEFT:
						head.pivot.rotation.y = ANGLE_90 * perc;
				break;
				case TURN_DIR.RIGHT:
						head.pivot.rotation.y = ANGLE_90 * -perc;
				break;
			}
		}
		
		for(var i = 1; i < this.segmentNumber; i++){
			if(this.queue[i] !== 0){
				var car = this.queue[i];
				if(car.isMoving){
					car.setDistFromOrigin((this.segmentSize * (i) + this.crossroadRadius - this.segmentSize * perc) + 2);
				}	
			}
		}
	}

	this.getHead = function(){
		return this.queue[0];
	}

}

function OutQueue(roadLength, segmentSize, crossroadRadius, scene){
	this.segmentNumber = Math.floor(roadLength/segmentSize);
	this.segmentSize = segmentSize;
	this.crossroadRadius = crossroadRadius;
	this.crossedQueue = [];
	this.scene = scene;
	
	this.add = function(car){
		car.outSegment = 0;
		if(car.turnDir==TURN_DIR.STRAIGHT){
			car.outSegment = 1;
		}
		
		this.crossedQueue.push(car);
	}
	
	this.update = function(perc){
		for(var i = 0; i < this.crossedQueue.length; i++){
			var car = this.crossedQueue[i];
			car.setDistFromOrigin((this.segmentSize * car.outSegment - this.crossroadRadius - 2 + this.segmentSize * perc) * -1);
		}
	}
	
	this.endTick = function(){
		while(this.crossedQueue.length > 0 && this.crossedQueue[0].outSegment == this.segmentNumber){
			var car = this.crossedQueue.shift();
			this.scene.remove(car.pivot);
		}
		for(var i = 0; i < this.crossedQueue.length; i++){
			this.crossedQueue[i].outSegment += 1;
		}
	}
	
}