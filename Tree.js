/*
Function for the creation of a tree,
Ax is the x coordinate and Az is the z coordinate, they indicate where to create the tree
*/
function Tree(Ax, Ay, Az){
       
	this.trunk=new THREE.Mesh(BOX, MESH.BROWN);
	this.leaf=new THREE.Mesh(BOX, MESH.GREEN);
        
	this.trunk.scale.y = 6;
	this.leaf.scale.x = 3;
	this.leaf.scale.y = 0.5;
	this.leaf.scale.z = 3;

	this.leaf.position.y = 0.5;
	this.trunk.position.x = Ax;
	this.trunk.position.y = Ay + 3;
	this.trunk.position.z = Az;

	this.trunk.add(this.leaf);
}



