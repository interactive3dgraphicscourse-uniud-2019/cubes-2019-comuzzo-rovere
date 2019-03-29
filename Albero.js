class Albero{

    constructor(Ax,Az){
        var verde= new THREE.MeshBasicMaterial({color:0x009900});
        var marrone= new THREE.MeshBasicMaterial({color:0x654321});
        var geometryTronco = new THREE.BoxGeometry(1,6,1);
        var geometryFoglie = new THREE.BoxGeometry(3,3,3);
        var Tronco=new THREE.Mesh( geometryTronco, marrone);
        var Foglie=new THREE.Mesh( geometryFoglie, verde);
        Tronco.add(Foglie);
        Foglie.position.y=3;
        Tronco.position.x=Ax;
        Tronco.position.y=3;
        Tronco.position.z=Az;

        scene.add(Tronco);
    }



}