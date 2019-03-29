class Pino{

    constructor(Ax,Az){
        var verde= new THREE.MeshBasicMaterial({color:0x004400});
        var marrone= new THREE.MeshBasicMaterial({color:0x654321});
        var geometryTronco = new THREE.BoxGeometry(1,2,1);
        var geometryFoglie = new THREE.BoxGeometry(3,1,3);
        
        var Tronco=new THREE.Mesh( geometryTronco, marrone);
        var Foglie=new THREE.Mesh( geometryFoglie, verde);
        var Foglie2=new THREE.Mesh( geometryFoglie, verde);
        var Foglie3=new THREE.Mesh( geometryFoglie, verde);
        Foglie2.scale.x=0.6;
        Foglie2.scale.z=0.6;
        Foglie3.scale.x=0.4;
        Foglie3.scale.z=0.4;
        Tronco.add(Foglie);
        Tronco.add(Foglie2);
        Tronco.add(Foglie3);
        Foglie.position.y=1.5;
        Foglie2.position.y=2.5;
        Foglie3.position.y=3.5;
        Tronco.position.x=Ax;
        Tronco.position.y=1;
        Tronco.position.z=Az;

        scene.add(Tronco);
    }



}