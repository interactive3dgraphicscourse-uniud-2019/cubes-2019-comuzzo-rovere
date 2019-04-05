
//definiion for the state of the traffic light
const TRAFFIC_LIGHT_STATES = {GREEN: {VAL: 1, COLOR_ON: 0x00ff00, COLOR_OFF: 0x005500},
	YELLOW: {VAL: 2, COLOR_ON: 0xffff00, COLOR_OFF: 0x555500},
	RED: {VAL: 3, COLOR_ON: 0xff0000, COLOR_OFF: 0x550000}};

function trafficLight(posX, posZ, rotY){
	
	//generating the vertical and horizontal pole for the traffic light
	this.poleVertical = new THREE.Mesh( box, MESH.GREY);
	this.poleVertical.scale.x=0.3;
	this.poleVertical.scale.y=6;
	this.poleVertical.scale.z=0.3;
	this.poleVertical.position.y = 3;
	this.poleVertical.position.x = posX;
	this.poleVertical.position.z = posZ;
	this.poleVertical.rotation.y = rotY;

	this.poleHorizontal = new THREE.Mesh(box, MESH.GREY);
	this.poleHorizontal.scale.x=10;
	this.poleHorizontal.scale.y=0.3/6;
	this.poleHorizontal.position.x = -1.5/0.3;
	this.poleHorizontal.position.y = 2.85/6;

	//generating the black box that contains the lights
	this.lightSupport = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: BLACK}));
	this.lightSupport.position.x= -1.5 * 0.3;
	this.lightSupport.scale.z=3;
	this.lightSupport.scale.y=9;
	this.lightSupport.scale.x=0.4;
	

	//generating and moving all the lights
	this.greenLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.GREEN.COLOR_OFF}));
	this.greenLight.scale.x=0.4;
	this.greenLight.scale.y=0.15;
	this.greenLight.scale.z=0.4;
	this.greenLight.position.y = -0.3;
	this.greenLight.position.z = 0.5;
	
	this.yellowLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.YELLOW.COLOR_OFF}));
	this.yellowLight.scale.x=0.4;
	this.yellowLight.scale.y=0.15;
	this.yellowLight.scale.z=0.4;
	this.yellowLight.position.z = 0.5;

	this.redLight = new THREE.Mesh(box, new THREE.MeshBasicMaterial({color: TRAFFIC_LIGHT_STATES.RED.COLOR_OFF}));
	this.redLight.scale.x=0.6;
	this.redLight.scale.y=0.25;
	this.redLight.scale.z=0.6;
	this.redLight.position.y = 0.3;
	this.redLight.position.z = 0.5;


	
	this.setState = function(state){
		// turn off all lights
		this.greenLight.material.color.setHex(TRAFFIC_LIGHT_STATES.GREEN.COLOR_OFF);
		this.yellowLight.material.color.setHex(TRAFFIC_LIGHT_STATES.YELLOW.COLOR_OFF);
		this.redLight.material.color.setHex(TRAFFIC_LIGHT_STATES.RED.COLOR_OFF);
		// turn on the light corresponding to state
		switch(state){
				case TRAFFIC_LIGHT_STATES.GREEN.VAL:
					this.greenLight.material.color.setHex(TRAFFIC_LIGHT_STATES.GREEN.COLOR_ON);
					break;
				case TRAFFIC_LIGHT_STATES.YELLOW.VAL:
					this.yellowLight.material.color.setHex(TRAFFIC_LIGHT_STATES.YELLOW.COLOR_ON);
					break;
				case TRAFFIC_LIGHT_STATES.RED.VAL:
					this.redLight.material.color.setHex(TRAFFIC_LIGHT_STATES.RED.COLOR_ON);
					break;
			}
	}
	
	//adding all the pieces to a fictional object called mainParent
	this.poleVertical.add(this.poleHorizontal);
	this.poleHorizontal.add(this.lightSupport);
	this.lightSupport.add(this.greenLight);
	this.lightSupport.add(this.yellowLight);
	this.lightSupport.add(this.redLight);
	this.mainParent = this.poleVertical;
}