

/*
creates the scene:the crossroad, the sidewalk, the grass and the lines in the center of the streets
crossroadRadius is the radius of the crossroad central square
roadLength is the length of the street from the center of the central square
*/
function CrossroadStreet(crossroadRadius, roadLength){
	var laneLineMaterial = new THREE.LineBasicMaterial({color : WHITE, linewidth:10});
	
	var coloreStrada = new THREE.MeshBasicMaterial({color:0x111111});
	var coloreMarciapiede = new THREE.MeshBasicMaterial({color:0x555555});
	var coloreErba = new THREE.MeshBasicMaterial({color:0x35682d});
	var lstrada = (roadLength - crossroadRadius ) ;
	var l=(crossroadRadius + lstrada/2);
   
	//creates the central square of the crossroad
	this.centrale = new THREE.Mesh( box, coloreStrada);
	this.centrale.scale.y=0.1;
	this.centrale.scale.z=crossroadRadius*2;
	this.centrale.scale.x=crossroadRadius*2;


	//creates a road then clones it and moves and rotates it to draw all the streets
	this.StradaSW = new THREE.Mesh( box, coloreStrada);
	this.StradaSW.scale.x = crossroadRadius *0.99;
	this.StradaSW.scale.y = 0.1;
	this.StradaSW.scale.z = lstrada;
	this.StradaSW.position.x = - crossroadRadius /2;
	this.StradaSW.position.z =l;
	this.StradaSE=this.StradaSW.clone();
	this.StradaSE.position.x= crossroadRadius /2 ;
	this.StradaSE.position.z= l ;
	this.StradaES=this.StradaSW.clone();
	this.StradaES.rotation.y= ANGLE_90;
	this.StradaES.position.x= l;
	this.StradaES.position.z= crossroadRadius /2;
	this.StradaEN=this.StradaSW.clone();
	this.StradaEN.rotation.y= ANGLE_90;
	this.StradaEN.position.z= -crossroadRadius /2;
	this.StradaEN.position.x= l;
	this.StradaNE=this.StradaSW.clone();
	this.StradaNE.rotation.y= ANGLE_180;
	this.StradaNE.position.z= -l;
	this.StradaNE.position.x= crossroadRadius /2;
	this.StradaNW=this.StradaSW.clone();
	this.StradaNW.rotation.y= ANGLE_180;
	this.StradaNW.position.z= -l;
	this.StradaNW.position.x= -crossroadRadius /2;
	this.StradaWN=this.StradaSW.clone();
	this.StradaWN.rotation.y= ANGLE_270;
	this.StradaWN.position.z= -crossroadRadius /2;
	this.StradaWN.position.x= -l;
	this.StradaWS=this.StradaSW.clone();
	this.StradaWS.rotation.y= ANGLE_270;
	this.StradaWS.position.z= crossroadRadius /2;
	this.StradaWS.position.x= -l;

    //creates a 
	this.MarciaSW = new THREE.Mesh( box, coloreMarciapiede);
	this.MarciaSW.scale.x=crossroadRadius/2 ;
	this.MarciaSW.scale.z=lstrada - 0.1;
	this.MarciaSW.position.x=-(crossroadRadius + 1.4);
	this.MarciaSW.position.z= l ;
	this.MarciaSE=this.MarciaSW.clone();
	this.MarciaSE.position.x=crossroadRadius + 1.4;
	this.MarciaSE.position.z=l ;
	this.MarciaES=this.MarciaSW.clone();
	this.MarciaES.rotation.y=ANGLE_90;
	this.MarciaES.position.x= l ;
	this.MarciaES.position.z= crossroadRadius + 1.4;
	this.MarciaEN=this.MarciaSW.clone();
	this.MarciaEN.rotation.y=ANGLE_90;
	this.MarciaEN.position.z= -(crossroadRadius + 1.4);
	this.MarciaEN.position.x= l;
	this.MarciaNE=this.MarciaSW.clone();
	this.MarciaNE.rotation.y=ANGLE_180;
	this.MarciaNE.position.z= - l;
	this.MarciaNE.position.x= crossroadRadius + 1.4;
	this.MarciaNW=this.MarciaSW.clone();
	this.MarciaNW.rotation.y=ANGLE_180;
	this.MarciaNW.position.z= -l;
	this.MarciaNW.position.x= -(crossroadRadius + 1.4);
	this.MarciaWN=this.MarciaSW.clone();
	this.MarciaWN.rotation.y=ANGLE_270;
	this.MarciaWN.position.z= -(crossroadRadius + 1.4);
	this.MarciaWN.position.x= -l ;
	this.MarciaWS=this.MarciaSW.clone();
	this.MarciaWS.rotation.y=ANGLE_270;
	this.MarciaWS.position.z= crossroadRadius+ 1.4;
	this.MarciaWS.position.x= -l;


	

    //creates all the lines between in the middle of the streets
    var straightLine = new THREE.Geometry();
    straightLine.vertices.push(
        new THREE.Vector3(0, 0, crossroadRadius),
        new THREE.Vector3(0, 0, roadLength)
    );
    this.laneDividerS = new THREE.Line(straightLine, laneLineMaterial);
	this.laneDividerE = this.laneDividerS.clone();
	this.laneDividerN = this.laneDividerS.clone();
	this.laneDividerW = this.laneDividerS.clone();
	this.laneDividerE.rotation.y = ANGLE_90;
	this.laneDividerN.rotation.y = ANGLE_180;
	this.laneDividerW.rotation.y = ANGLE_270;
	
	//adds every piece to a fictional object 
	this.crossroadCenter = new THREE.Object3D();
	this.crossroadCenter.position.y=-0.15;
	this.crossroadCenter.add(this.laneDividerS);
	this.crossroadCenter.add(this.laneDividerE);
	this.crossroadCenter.add(this.laneDividerN);
	this.crossroadCenter.add(this.laneDividerW);
	this.crossroadCenter.add(this.laneDividerW);
	this.crossroadCenter.add(this.centrale);
	this.crossroadCenter.add(this.StradaSW);
	this.crossroadCenter.add(this.StradaSE);
	this.crossroadCenter.add(this.StradaES);
	this.crossroadCenter.add(this.StradaEN);
	this.crossroadCenter.add(this.StradaNE);
	this.crossroadCenter.add(this.StradaNW);
	this.crossroadCenter.add(this.StradaWN);
	this.crossroadCenter.add(this.StradaWS);
	this.crossroadCenter.add(this.MarciaSW);
	this.crossroadCenter.add(this.MarciaSE);
	this.crossroadCenter.add(this.MarciaES);
	this.crossroadCenter.add(this.MarciaEN);
	this.crossroadCenter.add(this.MarciaNE);
	this.crossroadCenter.add(this.MarciaNW);
	this.crossroadCenter.add(this.MarciaWN);
	this.crossroadCenter.add(this.MarciaWS);
	
	this.streetTerrainX = new THREE.Mesh( box, MESH.BROWN);
	this.streetTerrainZ = this.streetTerrainX.clone();
	this.streetTerrainX.position.y = -5;
	this.streetTerrainX.scale.y=10;
	this.streetTerrainX.scale.x=146;
	this.streetTerrainX.scale.z=20;
	this.streetTerrainZ = this.streetTerrainX.clone();
	this.streetTerrainZ.rotation.y = ANGLE_90;
	this.crossroadCenter.add(this.streetTerrainX);
	this.crossroadCenter.add(this.streetTerrainZ);
	

	this.mainParent = this.crossroadCenter;
}