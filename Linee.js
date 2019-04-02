function CrossroadStreet(crossroadRadius, roadLength){
	var laneLineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, linewidth:10});
	
	var coloreStrada = new THREE.MeshBasicMaterial({color:0x111111});
	var coloreMarciapiede = new THREE.MeshBasicMaterial({color:0x555555});
	var coloreErba = new THREE.MeshBasicMaterial({color:0x35682d});
	var lstrada = (roadLength - crossroadRadius ) ;
	var l=(crossroadRadius + lstrada/2);
   
	this.centrale = new THREE.Mesh( box, coloreStrada);
	this.centrale.scale.y=0.1;
	this.centrale.scale.z=crossroadRadius*2;
	this.centrale.scale.x=crossroadRadius*2;


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
	this.StradaES.rotation.y=90 * Math.PI/180;
	this.StradaES.position.x= l;
	this.StradaES.position.z= crossroadRadius /2;
	this.StradaEN=this.StradaSW.clone();
	this.StradaEN.rotation.y=90 * Math.PI/180;
	this.StradaEN.position.z= -crossroadRadius /2;
	this.StradaEN.position.x= l;
	this.StradaNE=this.StradaSW.clone();
	this.StradaNE.rotation.y=180 * Math.PI/180;
	this.StradaNE.position.z= -l;
	this.StradaNE.position.x= crossroadRadius /2;
	this.StradaNW=this.StradaSW.clone();
	this.StradaNW.rotation.y=180 * Math.PI/180;
	this.StradaNW.position.z= -l;
	this.StradaNW.position.x= -crossroadRadius /2;
	this.StradaWN=this.StradaSW.clone();
	this.StradaWN.rotation.y=270 * Math.PI/180;
	this.StradaWN.position.z= -crossroadRadius /2;
	this.StradaWN.position.x= -l;
	this.StradaWS=this.StradaSW.clone();
	this.StradaWS.rotation.y=270 * Math.PI/180;
	this.StradaWS.position.z= crossroadRadius /2;
	this.StradaWS.position.x= -l;

	this.MarciaSW = new THREE.Mesh( box, coloreMarciapiede);

	this.MarciaSW.scale.x=crossroadRadius/2;
	this.MarciaSW.scale.z=lstrada;
	
	this.MarciaSW.position.x=-(crossroadRadius + 1.4);
	this.MarciaSW.position.z= l ;
	this.MarciaSE=this.MarciaSW.clone();
	this.MarciaSE.position.x=crossroadRadius + 1.4;
	this.MarciaSE.position.z=l ;
	this.MarciaES=this.MarciaSW.clone();
	this.MarciaES.rotation.y=90 * Math.PI/180;
	this.MarciaES.position.x= l ;
	this.MarciaES.position.z= crossroadRadius + 1.4;
	this.MarciaEN=this.MarciaSW.clone();
	this.MarciaEN.rotation.y=90 * Math.PI/180;
	this.MarciaEN.position.z= -(crossroadRadius + 1.4);
	this.MarciaEN.position.x= l;
	this.MarciaNE=this.MarciaSW.clone();
	this.MarciaNE.rotation.y=180 * Math.PI/180;
	this.MarciaNE.position.z= - l;
	this.MarciaNE.position.x= crossroadRadius + 1.4;
	this.MarciaNW=this.MarciaSW.clone();
	this.MarciaNW.rotation.y=180 * Math.PI/180;
	this.MarciaNW.position.z= -l;
	this.MarciaNW.position.x= -(crossroadRadius + 1.4);
	this.MarciaWN=this.MarciaSW.clone();
	this.MarciaWN.rotation.y=270 * Math.PI/180;
	this.MarciaWN.position.z= -(crossroadRadius + 1.4);
	this.MarciaWN.position.x= -l ;
	this.MarciaWS=this.MarciaSW.clone();
	this.MarciaWS.rotation.y=270 * Math.PI/180;
	this.MarciaWS.position.z= crossroadRadius+ 1.4;
	this.MarciaWS.position.x= -l;



	this.ErbaSW = new THREE.Mesh( box, coloreErba);
	this.ErbaSW.scale.x = lstrada - crossroadRadius/2;
	this.ErbaSW.scale.z = lstrada - crossroadRadius/2;
	this.ErbaSW.scale.y = 0.5;
	this.ErbaSW.position.x = -(1.2*crossroadRadius+ lstrada/2);
	this.ErbaSW.position.z = (1.2*crossroadRadius+ lstrada/2);
	this.ErbaSE = this.ErbaSW.clone();
	this.ErbaSW.position.x = (1.2*crossroadRadius+ lstrada/2);
	this.ErbaSW.position.z = (1.2*crossroadRadius+ lstrada/2);
	this.ErbaNE = this.ErbaSW.clone();
	this.ErbaNE.position.x = (1.2*crossroadRadius+ lstrada/2);
	this.ErbaNE.position.z = -(1.2*crossroadRadius+ lstrada/2);
	this.ErbaNW = this.ErbaSW.clone();
	this.ErbaNW.position.x = -(1.2*crossroadRadius+ lstrada/2);
	this.ErbaNW.position.z = -(1.2*crossroadRadius+ lstrada/2);

    
    var straightLine = new THREE.Geometry();
    straightLine.vertices.push(
        new THREE.Vector3(0,  0, crossroadRadius),
        new THREE.Vector3(0, 0, roadLength)
    );
    this.laneDividerS = new THREE.Line(straightLine, laneLineMaterial);
	this.laneDividerE = this.laneDividerS.clone();
	this.laneDividerN = this.laneDividerS.clone();
	this.laneDividerW = this.laneDividerS.clone();
	this.laneDividerE.rotation.y = ANGLE_90;
	this.laneDividerN.rotation.y = ANGLE_180;
	this.laneDividerW.rotation.y = ANGLE_270;
	
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
	this.crossroadCenter.add(this.ErbaSW);
	this.crossroadCenter.add(this.ErbaSE);
	this.crossroadCenter.add(this.ErbaNE);
	this.crossroadCenter.add(this.ErbaNW);

	this.mainParent = this.crossroadCenter;
}