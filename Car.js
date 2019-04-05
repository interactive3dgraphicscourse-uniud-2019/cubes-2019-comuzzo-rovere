const STREETS = {NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3};
const TURN_DIR = {LEFT: 0, STRAIGHT: 1, RIGHT: 2};

function Car(street, turn, mesh){
	this.street = street;
	this.turnDir = turn;
	this.mesh = mesh;
	if(this.turnDir != TURN_DIR.STRAIGHT){
		this.pivot = new THREE.Object3D();
		switch(turn){
			case TURN_DIR.LEFT:
				switch(street){
					case STREETS.NORTH:
						this.pivot.position.x = PIVOT_DIST;
						this.pivot.position.z = -PIVOT_DIST;
						break;
					case STREETS.SOUTH:
						this.pivot.position.x = -PIVOT_DIST;
						this.pivot.position.z = PIVOT_DIST;
						break;
					case STREETS.EAST:
						this.pivot.position.x = PIVOT_DIST;
						this.pivot.position.z = PIVOT_DIST;
						break;
					case STREETS.WEST:
						this.pivot.position.x = -PIVOT_DIST;
						this.pivot.position.z = -PIVOT_DIST;
						break;
				}
				break;
			case TURN_DIR.RIGHT:
				switch(street){
					case STREETS.NORTH:
						this.pivot.position.x = -PIVOT_DIST;
						this.pivot.position.z = -PIVOT_DIST;
						break;
					case STREETS.SOUTH:
						this.pivot.position.x = PIVOT_DIST;
						this.pivot.position.z = PIVOT_DIST;
						break;
					case STREETS.EAST:
						this.pivot.position.x = PIVOT_DIST;
						this.pivot.position.z = -PIVOT_DIST;
						break;
					case STREETS.WEST:
						this.pivot.position.x = -PIVOT_DIST;
						this.pivot.position.z = PIVOT_DIST;
						break;
				}
				break;
		}
	}
	
	let bodyCube = new THREE.Mesh(box , this.mesh);
	let wheelCube = new THREE.Mesh(box, MESH.BLACK);
    this.carBody = bodyCube.clone();
	this.carBody.position.y = 11.2;
	this.carBody.scale.x = 2;
	this.carBody.scale.z = 4;

	this.cockpit = bodyCube.clone();
	this.cockpit.scale.y=0.7;
	this.cockpit.scale.z=0.75
	this.cockpit.scale.x=0.5
    this.cockpit.position.y=0.7;
	this.wheelBL = wheelCube.clone();
	this.wheelBL.scale.x=0.4;
	this.wheelBL.scale.z=0.2;
	this.wheelBR = wheelCube.clone();
	this.wheelBR.scale.x=0.4;
	this.wheelBR.scale.z=0.2;
	this.wheelFL = wheelCube.clone();
	this.wheelFL.scale.x=0.4;
	this.wheelFL.scale.z=0.2;
	this.wheelFR = wheelCube.clone();
	this.wheelFR.scale.x=0.4;
	this.wheelFR.scale.z=0.2;
	
	// for Queues
	this.isMoving = false;
	this.outSegment = 0;
	this.mainParent = this.carBody;
	
	this.setDistFromOrigin = function(dist){
		var offsetX = 0;
		var offsetZ = 0;
		if(this.turnDir != TURN_DIR.STRAIGHT){
			offsetX = this.pivot.position.x;
			offsetZ = this.pivot.position.z;
		}
		switch(this.street){
			case STREETS.NORTH:
				this.mainParent.position.z = -dist - offsetZ;
				break;
			case STREETS.SOUTH:
				this.mainParent.position.z = dist - offsetZ;
				break;
			case STREETS.EAST:
				this.mainParent.position.x = dist - offsetX;
				break;
			case STREETS.WEST:
				this.mainParent.position.x = -dist - offsetX;
				break;
		}
	}
	
	this.setDistRightFromOrigin = function(dist){
		var offsetX = 0;
		var offsetZ = 0;
		if(this.turnDir != TURN_DIR.STRAIGHT){
			offsetX = this.pivot.position.x;
			offsetZ = this.pivot.position.z;
		}
		switch(this.street){
			case STREETS.NORTH:
				this.mainParent.position.x = -dist - offsetX;
				break;
			case STREETS.SOUTH:
				this.mainParent.position.x = dist - offsetX;
				break;
			case STREETS.EAST:
				this.mainParent.position.z = -dist - offsetZ;
				break;
			case STREETS.WEST:
				this.mainParent.position.z = dist - offsetZ;
				break;
		}
	}
    this.carBody.add(this.cockpit);
    this.carBody.add(this.wheelFL);
    this.carBody.add(this.wheelBL);
    this.carBody.add(this.wheelFR);
    this.carBody.add(this.wheelBR);
	
	if(this.turnDir != TURN_DIR.STRAIGHT){
		this.pivot.add(this.carBody);
	}
	
    this.wheelFL.position.x= -0.5;
    this.wheelFL.position.z= -0.25;
    this.wheelFL.position.y=-0.75 ;
    this.wheelBL.position.x= -0.5;
    this.wheelBL.position.z= 0.25;
    this.wheelBL.position.y=-0.75 ;
    this.wheelFR.position.x= 0.5;
    this.wheelFR.position.z= -0.25;
    this.wheelFR.position.y=-0.75 ;
    this.wheelBR.position.x= 0.5;
    this.wheelBR.position.z= 0.25;
    this.wheelBR.position.y=-0.75 ;
}


