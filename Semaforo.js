

TRAFFIC_LIGHT_STATES = {GREEN: {VAL: 1, COLOR_ON: 0x00ff00, COLOR_OFF: 0x005500},
	YELLOW: {VAL: 2, COLOR_ON: 0xffff00, COLOR_OFF: 0x555500},
	RED: {VAL: 3, COLOR_ON: 0xff0000, COLOR_OFF: 0x550000}};

function trafficLight(posX, posZ, rotY){
	var stato;
	
	this.poleVertical = new THREE.Mesh( box, GRIGIO_MESH);
	this.poleVertical.scale.x=0.3;
	this.poleVertical.scale.y=6;
	this.poleVertical.scale.z=0.3;
	this.poleVertical.position.y = 3;

	this.poleHorizontal = new THREE.Mesh(box, GRIGIO_MESH);
	this.poleHorizontal.scale.x=10;
	this.poleHorizontal.scale.y=0.3/6;
	this.poleHorizontal.position.x = -1.5/0.3;
	this.poleHorizontal.position.y = 2.85/6;

	this.lightSupport = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1),
		new THREE.MeshBasicMaterial({color: BLACK}));
	
	
	this.lightSupport.position.x= -1.5 * 0.3;
	this.lightSupport.scale.z=3;
	this.lightSupport.scale.y=3;
	this.lightSupport.scale.x=0.4;
	
	
	this.greenLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.GREEN.COLOR_OFF}));
	this.greenLight.scale.x=0.4;
	this.greenLight.scale.y=0.5;
	this.greenLight.scale.z=0.4;
	this.yellowLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.YELLOW.COLOR_OFF}));
	this.yellowLight.scale.x=0.4;
	this.yellowLight.scale.y=0.5;
	this.yellowLight.scale.z=0.4;
	this.redLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.RED.COLOR_OFF}));
	this.redLight.scale.x=0.6;
	this.redLight.scale.y=0.7;
	this.redLight.scale.z=0.6;
	
	
	this.greenLight.position.y = -0.8;
	this.greenLight.position.z = 0.5;
	this.yellowLight.position.z = 0.5;
	this.redLight.position.y = 0.8;
	this.redLight.position.z = 0.5;
	this.poleVertical.position.x = posX;
	this.poleVertical.position.z = posZ;
	this.poleVertical.rotation.y = rotY;
	
	this.setState = function(state){
		// turn off all lights
		this.greenLight.material.color.setHex(TRAFFIC_LIGHT_STATES.GREEN.COLOR_OFF);
		this.yellowLight.material.color.setHex(TRAFFIC_LIGHT_STATES.YELLOW.COLOR_OFF);
		this.redLight.material.color.setHex(TRAFFIC_LIGHT_STATES.RED.COLOR_OFF);
		// turn on the light corresponding to state
		switch(state){
				case TRAFFIC_LIGHT_STATES.GREEN.VAL:
					this.greenLight.material.color.setHex(TRAFFIC_LIGHT_STATES.GREEN.COLOR_ON);
					this.stato='G';
					break;
				case TRAFFIC_LIGHT_STATES.YELLOW.VAL:
					this.yellowLight.material.color.setHex(TRAFFIC_LIGHT_STATES.YELLOW.COLOR_ON);
					this.stato='Y';
					break;
				case TRAFFIC_LIGHT_STATES.RED.VAL:
					this.redLight.material.color.setHex(TRAFFIC_LIGHT_STATES.RED.COLOR_ON);
					this.stato='R';
					break;
			}
	}
	
	this.poleVertical.add(this.poleHorizontal);
	this.poleHorizontal.add(this.lightSupport);
	this.lightSupport.add(this.greenLight);
	this.lightSupport.add(this.yellowLight);
	this.lightSupport.add(this.redLight);
	this.mainParent = this.poleVertical;
}