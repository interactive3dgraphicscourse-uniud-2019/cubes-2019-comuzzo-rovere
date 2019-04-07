/*
creates the scene:the crossroad, the sidewalk, the grass and the lines in the center of the streets
CROSSROAD_RADIUS is the radius of the crossroad central square
ROAD_LENGTH is the length of the street from the center of the central square
*/
function CrossroadStreet(){
	const streetMesh = new THREE.MeshBasicMaterial({color:0x111111});
	const sidewalkMesh = new THREE.MeshBasicMaterial({color:0x555555});
	const lenFromTrafficLight = ROAD_LENGTH - CROSSROAD_RADIUS;
	const streetCenter = CROSSROAD_RADIUS + lenFromTrafficLight/2;
   
	//creates the central square of the crossroad
	this.center = new THREE.Mesh(BOX, streetMesh);
	this.center.scale.y = 0.1;
	this.center.scale.z = CROSSROAD_RADIUS*2;
	this.center.scale.x = CROSSROAD_RADIUS*2;

	//creates a road then clones it and moves and rotates it to draw all the streets
	this.streetSW = new THREE.Mesh(BOX, streetMesh);
	this.streetSW.scale.x = CROSSROAD_RADIUS * 0.94;
	this.streetSW.scale.y = 0.1;
	this.streetSW.scale.z = lenFromTrafficLight;
	this.streetSW.position.x = -CROSSROAD_RADIUS/2;
	this.streetSW.position.z =streetCenter;
	this.streetSE = this.streetSW.clone();
	this.streetSE.position.x = CROSSROAD_RADIUS/2 ;
	this.streetSE.position.z = streetCenter ;
	this.streetES = this.streetSW.clone();
	this.streetES.rotation.y = ANGLE_90;
	this.streetES.position.x = streetCenter;
	this.streetES.position.z = CROSSROAD_RADIUS/2;
	this.streetEN = this.streetSW.clone();
	this.streetEN.rotation.y = ANGLE_90;
	this.streetEN.position.z = -CROSSROAD_RADIUS/2;
	this.streetEN.position.x = streetCenter;
	this.streetNE = this.streetSW.clone();
	this.streetNE.rotation.y = ANGLE_180;
	this.streetNE.position.z = -streetCenter;
	this.streetNE.position.x = CROSSROAD_RADIUS/2;
	this.streetNW = this.streetSW.clone();
	this.streetNW.rotation.y = ANGLE_180;
	this.streetNW.position.z = -streetCenter;
	this.streetNW.position.x = -CROSSROAD_RADIUS/2;
	this.streetWN = this.streetSW.clone();
	this.streetWN.rotation.y = ANGLE_270;
	this.streetWN.position.z = -CROSSROAD_RADIUS/2;
	this.streetWN.position.x = -streetCenter;
	this.streetWS = this.streetSW.clone();
	this.streetWS.rotation.y = ANGLE_270;
	this.streetWS.position.z = CROSSROAD_RADIUS/2;
	this.streetWS.position.x = -streetCenter;

	this.sidewalkSW = new THREE.Mesh(BOX, sidewalkMesh);
	this.sidewalkSW.scale.x = CROSSROAD_RADIUS/2 ;
	this.sidewalkSW.scale.z = lenFromTrafficLight - 0.1;
	this.sidewalkSW.position.x = -(CROSSROAD_RADIUS + 1.4);
	this.sidewalkSW.position.z = streetCenter;
	this.sidewalkSE = this.sidewalkSW.clone();
	this.sidewalkSE.position.x = CROSSROAD_RADIUS + 1.4;
	this.sidewalkSE.position.z = streetCenter;
	this.sidewalkES = this.sidewalkSW.clone();
	this.sidewalkES.rotation.y = ANGLE_90;
	this.sidewalkES.position.x = streetCenter ;
	this.sidewalkES.position.z = CROSSROAD_RADIUS + 1.4;
	this.sidewalkEN = this.sidewalkSW.clone();
	this.sidewalkEN.rotation.y = ANGLE_90;
	this.sidewalkEN.position.z = -(CROSSROAD_RADIUS + 1.4);
	this.sidewalkEN.position.x = streetCenter;
	this.sidewalkNE = this.sidewalkSW.clone();
	this.sidewalkNE.rotation.y = ANGLE_180;
	this.sidewalkNE.position.z = -streetCenter;
	this.sidewalkNE.position.x = CROSSROAD_RADIUS + 1.4;
	this.sidewalkNW = this.sidewalkSW.clone();
	this.sidewalkNW.rotation.y = ANGLE_180;
	this.sidewalkNW.position.z = -streetCenter;
	this.sidewalkNW.position.x = -(CROSSROAD_RADIUS + 1.4);
	this.sidewalkWN = this.sidewalkSW.clone();
	this.sidewalkWN.rotation.y = ANGLE_270;
	this.sidewalkWN.position.z = -(CROSSROAD_RADIUS + 1.4);
	this.sidewalkWN.position.x = -streetCenter ;
	this.sidewalkWS = this.sidewalkSW.clone();
	this.sidewalkWS.rotation.y = ANGLE_270;
	this.sidewalkWS.position.z = CROSSROAD_RADIUS + 1.4;
	this.sidewalkWS.position.x = -streetCenter;

    //creates all the lines in the middle of the streets
    this.laneDividerS = new THREE.Mesh(BOX, new THREE.MeshBasicMaterial({color:WHITE}));
	this.laneDividerS.scale.x = 0.4;
	this.laneDividerS.scale.y = 0.1;
	this.laneDividerS.scale.z = lenFromTrafficLight;
	this.laneDividerE = this.laneDividerS.clone();
	this.laneDividerN = this.laneDividerS.clone();
	this.laneDividerW = this.laneDividerS.clone();
	this.laneDividerS.position.z = streetCenter;
	this.laneDividerE.position.x = streetCenter;
	this.laneDividerN.position.z = -streetCenter;
	this.laneDividerW.position.x = -streetCenter;
	this.laneDividerE.rotation.y = ANGLE_90;
	this.laneDividerN.rotation.y = ANGLE_180;
	this.laneDividerW.rotation.y = ANGLE_270;
	
	//adds every piece to a fictional object 
	this.crossroadCenter = new THREE.Object3D();
	this.crossroadCenter.position.y = -0.15;
	this.crossroadCenter.add(this.laneDividerS);
	this.crossroadCenter.add(this.laneDividerE);
	this.crossroadCenter.add(this.laneDividerN);
	this.crossroadCenter.add(this.laneDividerW);
	this.crossroadCenter.add(this.laneDividerW);
	this.crossroadCenter.add(this.center);
	this.crossroadCenter.add(this.streetSW);
	this.crossroadCenter.add(this.streetSE);
	this.crossroadCenter.add(this.streetES);
	this.crossroadCenter.add(this.streetEN);
	this.crossroadCenter.add(this.streetNE);
	this.crossroadCenter.add(this.streetNW);
	this.crossroadCenter.add(this.streetWN);
	this.crossroadCenter.add(this.streetWS);
	this.crossroadCenter.add(this.sidewalkSW);
	this.crossroadCenter.add(this.sidewalkSE);
	this.crossroadCenter.add(this.sidewalkES);
	this.crossroadCenter.add(this.sidewalkEN);
	this.crossroadCenter.add(this.sidewalkNE);
	this.crossroadCenter.add(this.sidewalkNW);
	this.crossroadCenter.add(this.sidewalkWN);
	this.crossroadCenter.add(this.sidewalkWS);
	
	this.streetTerrainX = new THREE.Mesh( BOX, MESH.BROWN);
	this.streetTerrainX.position.y = -5;
	this.streetTerrainX.scale.y = 10;
	this.streetTerrainX.scale.x = 146;
	this.streetTerrainX.scale.z = 20;
	this.streetTerrainZ = this.streetTerrainX.clone();
	this.streetTerrainZ.rotation.y = ANGLE_90;
	this.crossroadCenter.add(this.streetTerrainX);
	this.crossroadCenter.add(this.streetTerrainZ);
	
	this.mainParent = this.crossroadCenter;
}