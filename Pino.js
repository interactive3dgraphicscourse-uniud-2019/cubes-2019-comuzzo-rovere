function Pino(Ax,Az){

        this.Tronco=new THREE.Mesh(  new THREE.BoxGeometry(1,2,1), new THREE.MeshBasicMaterial({color:0x654321}));
        var t=new THREE.BoxGeometry(3,1,3);
        this.Foglie=new THREE.Mesh( t , new THREE.MeshBasicMaterial({color:0x004400}));
        this.Foglie2=new THREE.Mesh(  t, new THREE.MeshBasicMaterial({color:0x004400}));
        this.Foglie3=new THREE.Mesh(  t, new THREE.MeshBasicMaterial({color:0x004400}));
        this.Foglie4=new THREE.Mesh(  t, new THREE.MeshBasicMaterial({color:0x004400}));
        this.Foglie5=new THREE.Mesh(  t, new THREE.MeshBasicMaterial({color:0x004400}));
        this.Foglie2.scale.x=0.8;
        this.Foglie2.scale.z=0.8;
        this.Foglie3.scale.x=0.6;
        this.Foglie3.scale.z=0.6;
        this.Foglie4.scale.x=0.4;
        this.Foglie4.scale.z=0.4;
        this.Foglie5.scale.x=0.2;
        this.Foglie5.scale.z=0.2;

        this.Tronco.add(this.Foglie);
        this.Tronco.add(this.Foglie2);
        this.Tronco.add(this.Foglie3);
        this.Tronco.add(this.Foglie4);
        this.Tronco.add(this.Foglie5);
        this.Foglie.position.y=1.5;
        this.Foglie2.position.y=2.5;
        this.Foglie3.position.y=3.5;
        this.Foglie4.position.y=4.5;
        this.Foglie5.position.y=5.5;
        this.Tronco.position.x=Ax;
        this.Tronco.position.y=1;
        this.Tronco.position.z=Az;

        
}
