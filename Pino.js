/*
        Function for the creation of a pine,
        Ax is the x coordinate and Az is the z coordinate, they indicate where to create the pine
*/
function Pino(Ax,Az){

        this.Tronco=new THREE.Mesh( box,MARRONE_MESH);
        this.Foglie=new THREE.Mesh( box , VERDE_SCURO_MESH);
        this.Foglie2=new THREE.Mesh(  box, VERDE_SCURO_MESH);
        this.Foglie3=new THREE.Mesh(  box, VERDE_SCURO_MESH);
        this.Foglie4=new THREE.Mesh(  box, VERDE_SCURO_MESH);
        this.Foglie5=new THREE.Mesh(  box, VERDE_SCURO_MESH);

        this.Tronco.scale.y=3;
        this.Foglie.scale.x=3;
        this.Foglie.scale.z=3;
        this.Foglie.scale.y=0.3;
        this.Foglie2.scale.x=2.4;
        this.Foglie2.scale.z=2.4;
        this.Foglie2.scale.y=0.3;
        this.Foglie3.scale.x=1.8;
        this.Foglie3.scale.z=1.8;
        this.Foglie3.scale.y=0.3;
        this.Foglie4.scale.x=1.2;
        this.Foglie4.scale.z=1.2;
        this.Foglie4.scale.y=0.3;
        this.Foglie5.scale.x=0.6;
        this.Foglie5.scale.z=0.6;
        this.Foglie5.scale.y=0.3;

        this.Foglie.position.y=0.5;
        this.Foglie2.position.y=0.75;
        this.Foglie3.position.y=1;
        this.Foglie4.position.y=1.25;
        this.Foglie5.position.y=1.5;
        this.Tronco.position.x=Ax;
        this.Tronco.position.y=1.3;
        this.Tronco.position.z=Az;

        this.Tronco.add(this.Foglie);
        this.Tronco.add(this.Foglie2);
        this.Tronco.add(this.Foglie3);
        this.Tronco.add(this.Foglie4);
        this.Tronco.add(this.Foglie5);
     
}
