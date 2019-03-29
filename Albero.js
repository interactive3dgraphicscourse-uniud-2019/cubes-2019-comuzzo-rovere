

    function Albero(Ax,Az){
        var verde= new THREE.MeshBasicMaterial({color:0x009900});
        var marrone= new THREE.MeshBasicMaterial({color:0x654321});
        var geometryTronco = new THREE.BoxGeometry(1,6,1);
        var geometryFoglie = new THREE.BoxGeometry(3,3,3);
        this.Tronco=new THREE.Mesh( geometryTronco, marrone);
        this.Foglie=new THREE.Mesh( geometryFoglie, verde);
        this.Tronco.add(this.Foglie);
        this.Foglie.position.y=3;
        this.Tronco.position.x=Ax;
        this.Tronco.position.y=3;
        this.Tronco.position.z=Az;
    }



