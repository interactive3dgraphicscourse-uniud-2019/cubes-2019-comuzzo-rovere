function CrossroadStreet(crossroadRadius, roadLength){
	var sideLineMaterial = new THREE.LineBasicMaterial({color: BLACK});
	var laneLineMaterial = new THREE.LineBasicMaterial({color: BLACK, linewidth: 3});
	
    var rightAngle = new THREE.Geometry();
    rightAngle.vertices.push(
		new THREE.Vector3(roadLength, 0, crossroadRadius),
        new THREE.Vector3(crossroadRadius,  0, crossroadRadius),
        new THREE.Vector3(crossroadRadius, 0, roadLength),
    );
    this.rightAngleSE = new THREE.Line(rightAngle, sideLineMaterial);
    this.rightAngleNE = this.rightAngleSE.clone();
	this.rightAngleNW = this.rightAngleSE.clone();
	this.rightAngleSW = this.rightAngleSE.clone();
	this.rightAngleNE.rotation.y = ANGLE_90;
	this.rightAngleNW.rotation.y = ANGLE_180;
	this.rightAngleSW.rotation.y = ANGLE_270;
    
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
	this.crossroadCenter.add(this.rightAngleSE);
	this.crossroadCenter.add(this.rightAngleNE);
	this.crossroadCenter.add(this.rightAngleNW);
	this.crossroadCenter.add(this.rightAngleSW);
	this.crossroadCenter.add(this.laneDividerS);
	this.crossroadCenter.add(this.laneDividerE);
	this.crossroadCenter.add(this.laneDividerN);
	this.crossroadCenter.add(this.laneDividerW);
	
	this.mainParent = this.crossroadCenter;
}