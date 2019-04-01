STREETS = {NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3};
TURN_DIR = {LEFT: 0, STRAIGHT: 1, RIGHT: 2};
PIVOT_DIST = 9;
BLUE = 0x0000ff;

function Car(street, turn){
	this.street = street;
	this.turnDir = turn;
	this.pivot = new THREE.Object3D();
	if(turn == TURN_DIR.LEFT){
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
	} else if(turn == TURN_DIR.RIGHT){
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
	}

	var mainMaterial = new THREE.MeshBasicMaterial({color: BLUE});
    this.carBody = new THREE.Mesh(new THREE.BoxGeometry(2,1,4), mainMaterial);
    this.carBody.position.y = 1;
    this.cockpit = new THREE.Mesh(new THREE.BoxGeometry(1,0.7,3), mainMaterial);
    this.cockpit.position.y=0.7;
    var blackMaterial = new THREE.MeshBasicMaterial({color:BLACK});
    var wheel = new THREE.BoxGeometry(0.5,0.8,0.8);
    this.wheelBL=new THREE.Mesh( wheel, blackMaterial);
    this.wheelBR=new THREE.Mesh( wheel, blackMaterial);
    this.wheelFL=new THREE.Mesh( wheel, blackMaterial);
    this.wheelFR=new THREE.Mesh( wheel, blackMaterial);
	
	this.isMoving = false;
	this.mainParent = this.carBody;
	
	this.setDistFromOrigin = function(dist){
		switch(this.street){
			case STREETS.NORTH:
				this.mainParent.position.z = -dist - this.pivot.position.z;
				break;
			case STREETS.SOUTH:
				this.mainParent.position.z = dist - this.pivot.position.z;
				break;
			case STREETS.EAST:
				this.mainParent.position.x = dist - this.pivot.position.x;
				break;
			case STREETS.WEST:
				this.mainParent.position.x = -dist - this.pivot.position.x;
				break;
		}
	}
	
	
	this.setDistRightFromOrigin = function(dist){
		switch(this.street){
			case STREETS.NORTH:
				this.mainParent.position.x = -dist - this.pivot.position.x;
				break;
			case STREETS.SOUTH:
				this.mainParent.position.x = dist - this.pivot.position.x;
				break;
			case STREETS.EAST:
				this.mainParent.position.z = -dist - this.pivot.position.z;
				break;
			case STREETS.WEST:
				this.mainParent.position.z = dist - this.pivot.position.z;
				break;
		}
	}
	
    this.carBody.add(this.cockpit);
    this.carBody.add(this.wheelFL);
    this.carBody.add(this.wheelBL);
    this.carBody.add(this.wheelFR);
    this.carBody.add(this.wheelBR);
	
	this.pivot.add(this.carBody);

    this.wheelFL.position.x= -1;
    this.wheelFL.position.z= -1;
    this.wheelFL.position.y=-0.75 ;
    this.wheelBL.position.x= -1;
    this.wheelBL.position.z= 1;
    this.wheelBL.position.y=-0.75 ;
    this.wheelFR.position.x= 1;
    this.wheelFR.position.z= -1;
    this.wheelFR.position.y=-0.75 ;
    this.wheelBR.position.x= 1;
    this.wheelBR.position.z= 1;
    this.wheelBR.position.y=-0.75 ;
}


