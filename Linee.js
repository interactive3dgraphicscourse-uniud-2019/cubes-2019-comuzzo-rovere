function Linee(crossroadRadius, roadLength){
    //South lines
    var materialLinee = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var geometrySE = new THREE.Geometry();
    geometrySE.vertices.push(
        new THREE.Vector3( crossroadRadius,  0, crossroadRadius ),
        new THREE.Vector3( crossroadRadius, 0, roadLength ),
    );
    var lineSE = new THREE.Line( geometrySE , materialLinee  );
    scene.add(lineSE);
    
    var geometrySC = new THREE.Geometry();
    geometrySC.vertices.push(
        new THREE.Vector3( 0,  0, crossroadRadius),
        new THREE.Vector3( 0, 0, roadLength ),
    );
    var lineSC = new THREE.Line( geometrySC , materialLinee  );
    scene.add(lineSC);

    var geometrySW = new THREE.Geometry();
    geometrySW.vertices.push(
        new THREE.Vector3( -crossroadRadius,  0, crossroadRadius ),
        new THREE.Vector3( -crossroadRadius, 0, roadLength ),
    );
    var lineSW = new THREE.Line( geometrySW , materialLinee  );
    scene.add(lineSW);


    //East lines
    var geometryES = new THREE.Geometry();
    geometryES.vertices.push(
        new THREE.Vector3( crossroadRadius, 0, crossroadRadius),
        new THREE.Vector3( roadLength, 0, crossroadRadius ),
    );
    var lineES = new THREE.Line( geometryES , materialLinee  );
    scene.add(lineES);
    
    var geometryEC = new THREE.Geometry();
    geometryEC.vertices.push(
        new THREE.Vector3( crossroadRadius,  0, 0 ),
        new THREE.Vector3( roadLength, 0, 0 ),
    );
    var lineEC = new THREE.Line( geometryEC , materialLinee  );
    scene.add(lineEC);

    var geometryEN = new THREE.Geometry();
    geometryEN.vertices.push(
        new THREE.Vector3( crossroadRadius,  0, -crossroadRadius ),
        new THREE.Vector3( roadLength, 0, -crossroadRadius ),
    );
    var lineEN = new THREE.Line( geometryEN , materialLinee  );
    scene.add(lineEN);


    //North lines
    var geometryNE = new THREE.Geometry();
    geometryNE.vertices.push(
        new THREE.Vector3( crossroadRadius, 0, -crossroadRadius),
        new THREE.Vector3( crossroadRadius, 0, -roadLength ),
    );
    var lineNE = new THREE.Line( geometryNE , materialLinee  );
    scene.add(lineNE);
    
    var geometryNC = new THREE.Geometry();
    geometryNC.vertices.push(
        new THREE.Vector3( 0,  0, -crossroadRadius ),
        new THREE.Vector3( 0, 0, -roadLength ),
    );
    var lineNC = new THREE.Line( geometryNC , materialLinee  );
    scene.add(lineNC);

    var geometryNW = new THREE.Geometry();
    geometryNW.vertices.push(
        new THREE.Vector3( -crossroadRadius,  0, -crossroadRadius ),
        new THREE.Vector3( -crossroadRadius, 0, -roadLength ),
    );
    var lineNW = new THREE.Line( geometryNW , materialLinee  );
    scene.add(lineNW);


    //West lines
    var geometryWS = new THREE.Geometry();
    geometryWS.vertices.push(
        new THREE.Vector3( -crossroadRadius, 0, crossroadRadius),
        new THREE.Vector3( -roadLength, 0, crossroadRadius ),
    );
    var lineWS = new THREE.Line( geometryWS , materialLinee  );
    scene.add(lineWS);
    
    var geometryWC = new THREE.Geometry();
    geometryWC.vertices.push(
        new THREE.Vector3( -crossroadRadius,  0, 0 ),
        new THREE.Vector3( -roadLength, 0, 0 ),
    );
    var lineWC = new THREE.Line( geometryWC , materialLinee  );
    scene.add(lineWC);

    var geometryWN = new THREE.Geometry();
    geometryWN.vertices.push(
        new THREE.Vector3( -crossroadRadius,  0, -crossroadRadius ),
        new THREE.Vector3( -roadLength, 0, -crossroadRadius ),
    );
    var lineWN = new THREE.Line( geometryWN , materialLinee  );
    scene.add(lineWN);
}