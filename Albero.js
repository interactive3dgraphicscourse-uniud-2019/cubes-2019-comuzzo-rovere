/*
        Function for the creation of a tree,
        Ax is the x coordinate and Az is the z coordinate, they indicate where to create the tree
*/
    function Albero(Ax,Az){
       
        this.Tronco=new THREE.Mesh( box, MARRONE_MESH);
        this.Foglie=new THREE.Mesh( box, VERDE_MESH);
        
        this.Tronco.scale.y=6;
        this.Foglie.scale.x=3;
        this.Foglie.scale.y=0.5;
        this.Foglie.scale.z=3;

        this.Foglie.position.y=0.5;
        this.Tronco.position.x=Ax;
        this.Tronco.position.y=3;
        this.Tronco.position.z=Az;

        this.Tronco.add(this.Foglie);

    }



