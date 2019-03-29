TRAFFIC_LIGHT_STATES = {GREEN: {VAL: 1, COLOR_ON: 0x00ff00, COLOR_OFF: 0x005500},
	YELLOW: {VAL: 2, COLOR_ON: 0xffff00, COLOR_OFF: 0x555500},
	RED: {VAL: 3, COLOR_ON: 0xff0000, COLOR_OFF: 0x550000}};
	
SEMAPHORE_GREY = 0xcccccc;
BLACK = 0x000000;
	
function trafficLight(posX, posZ, rotY){
	var stato;
	var mainMaterial = new THREE.MeshBasicMaterial({ color: SEMAPHORE_GREY});
	this.poleVertical = new THREE.Mesh(new THREE.BoxGeometry(0.3, 6, 0.3), mainMaterial);
	this.poleHorizontal = new THREE.Mesh(new THREE.BoxGeometry(3, 0.3, 0.3), mainMaterial);
	this.lightSupport = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1),
		new THREE.MeshBasicMaterial({color: BLACK}));
	
	this.poleVertical.position.y = 3;
	this.poleHorizontal.position.x = -1.5;
	this.poleHorizontal.position.y = 2.85;
	this.lightSupport.position.x= -1.5;
	
	var smallLight = new THREE.BoxGeometry(0.4, 0.4, 0.4);
	this.greenLight = new THREE.Mesh(smallLight, new THREE.MeshBasicMaterial(
		{color: TRAFFIC_LIGHT_STATES.GREEN.COLOR_OFF}));
	this.yellowLight = new THREE.Mesh(smallLight, new THREE.MeshBasicMaterial(
		{color: TRAFFIC_LIGHT_STATES.YELLOW.COLOR_OFF}));
	this.redLight = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6),
		new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.RED.COLOR_OFF}));
		
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