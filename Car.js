
class Car{
     Corpo;
    constructor(){
    
    var geometryTuboX = new THREE.BoxGeometry(2,1,4);
    var materialTubo = new THREE.MeshBasicMaterial( { color: 0x000ff } );
    this.Corpo = new THREE.Mesh( geometryTuboX, materialTubo);
    this.Corpo.position.y=1;
    var geometryTubo= new THREE.BoxGeometry(1,0.7,3);
    var abit = new THREE.Mesh( geometryTubo, materialTubo);
    abit.position.y=0.7;
    var nero= new THREE.MeshBasicMaterial({color:0x000000});
    var geometryRuota = new THREE.BoxGeometry(0.5,0.8,0.8);
    var RuotaSW=new THREE.Mesh( geometryRuota, nero);
    var RuotaSE=new THREE.Mesh( geometryRuota, nero);
    var RuotaNW=new THREE.Mesh( geometryRuota, nero);
    var RuotaNE=new THREE.Mesh( geometryRuota, nero);

    scene.add(RuotaSW);
    scene.add(RuotaSE);
    scene.add(RuotaNW);
    scene.add(RuotaNE);

    this.Corpo.add(abit);
    this.Corpo.add(RuotaNW);
    this.Corpo.add(RuotaSW);
    this.Corpo.add(RuotaNE);
    this.Corpo.add(RuotaSE);

    RuotaNW.position.x= -1;
    RuotaNW.position.z= -1;
    RuotaNW.position.y=-0.75 ;
    RuotaSW.position.x= -1;
    RuotaSW.position.z= 1;
    RuotaSW.position.y=-0.75 ;
    RuotaNE.position.x= 1;
    RuotaNE.position.z= -1;
    RuotaNE.position.y=-0.75 ;
    RuotaSE.position.x= 1;
    RuotaSE.position.z= 1;
    RuotaSE.position.y=-0.75 ;
 
    scene.add(this.Corpo);
}

move(c, l){
    switch(c){
        case 'N':
            this.Corpo.position.z-=l;
            break
        case 'S':
            this.Corpo.position.z+=l;
            break
        case 'E':
            this.Corpo.position.x+=l;
            break
        case 'W':
            this.Corpo.position.x-=l;
            break
    }     
}

 rotateCounterClockwise(dummy){
    dummy.add( this.Corpo );
    if(dummy.rotation.y <89 * Math.PI/180){
        dummy.rotation.y+=0.01;
        }
 }
 rotateClockwise(dummy){
    dummy.add( this.Corpo );
    if(dummy.rotation.y >-90 * Math.PI/180){
        dummy.rotation.y-=0.01;
        }

 }

}
