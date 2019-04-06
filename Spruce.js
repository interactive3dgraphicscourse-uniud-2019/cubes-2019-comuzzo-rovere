/*
Function for the creation of a spruce,
Ax is the x coordinate and Az is the z coordinate, they indicate where to create the spruce
*/
function Spruce(Ax, Ay, Az){

	this.trunk = new THREE.Mesh(box, MESH.BROWN);
    this.leaf = new THREE.Mesh(box, MESH.DARK_GREEN);
    this.leaf2 = this.leaf.clone();
    this.leaf3 = this.leaf.clone();
    this.leaf4 = this.leaf.clone();
    this.leaf5 = this.leaf.clone();

    this.trunk.scale.y = 3;
    this.trunk.position.x = Ax;
    this.trunk.position.y = Ay + 1.5;
    this.trunk.position.z = Az;

    this.leaf.scale.x = 3;
    this.leaf.scale.z = 3;
    this.leaf.scale.y = 0.3;
    this.leaf2.scale.x = 2.4;
    this.leaf2.scale.z = 2.4;
    this.leaf2.scale.y = 0.3;
    this.leaf3.scale.x = 1.8;
    this.leaf3.scale.z = 1.8;
    this.leaf3.scale.y = 0.3;
    this.leaf4.scale.x = 1.2;
    this.leaf4.scale.z = 1.2;
    this.leaf4.scale.y = 0.3;
    this.leaf5.scale.x = 0.6;
    this.leaf5.scale.z = 0.6;
    this.leaf5.scale.y = 0.3;

    this.leaf.position.y = 0.5;
    this.leaf2.position.y = 0.75;
    this.leaf3.position.y = 1;
    this.leaf4.position.y = 1.25;
    this.leaf5.position.y = 1.5;
        
    this.trunk.add(this.leaf);
    this.trunk.add(this.leaf2);
    this.trunk.add(this.leaf3);
    this.trunk.add(this.leaf4);
    this.trunk.add(this.leaf5);  
}
