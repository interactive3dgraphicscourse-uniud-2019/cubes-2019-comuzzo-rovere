
class Car{
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

move(c){
    switch(c){
        case 'N':
            this.Corpo.position.z-=0.1;
            break
        case 'S':
            this.Corpo.position.x+=0.1;
            break
        case 'E':
            this.Corpo.position.x+=0.1;
            break
        case 'W':
            this.Corpo.position.x-=0.1;
            break
    }     
}

 rotateLeft(dummy){
    
    if(dummy.rotation.y <89 * Math.PI/180){
        dummy.rotation.y+=0.01;
        }
 }

 rotateRigth(dummy){
    
    if(dummy.rotation.y >-90 * Math.PI/180){
        dummy.rotation.y-=0.01;
        }
 }



PercorsoStoW(dummySW, VerdeSud){
    if(this.Corpo.position.z >= 0 && dummySW.rotation.y==0){
        this.move('N',0.1);
    }
    if(this.Corpo.position.z <= 0 && (VerdeSud=='G' ||dummySW.rotation.y > 0* Math.PI/180)){
        this.rotateLeft(dummySW);
    }
    if(dummySW.rotation.y >= 89 * Math.PI/180){
        this.move('N',0.1);
    }
}

PercorsoStoE(dummySE, VerdeSud){
    if(this.Corpo.position.z >= 0 && dummySE.rotation.y==0 ){
        this.move('N',0.1);
    }
    if(this.Corpo.position.z <=  0 && (VerdeSud=='G' || dummySE.rotation.y < 0 * Math.PI/180)){
        this.rotateRigth(dummySE);
    }  
    if(dummySE.rotation.y <= -89 * Math.PI/180){
        this.move('N',0.1);
    }
}

PercorsoEtoS(dummySE, VerdeEst){
    if(this.Corpo.position.x >= 0 && dummySE.rotation.y==0){
        this.move('W',0.1);
    }
    if(this.Corpo.position.x <= 0 && (VerdeEst=='G' || dummySE.rotation.y > 0 * Math.PI/180 )){
        this.rotateLeft(dummySE);
    }
    if(dummySE.rotation.y >= 89 * Math.PI/180){
        this.move('W',0.1);
    }
}

PercorsoEtoN(dummyNE, VerdeEst){
    if(this.Corpo.position.x >= 0  && dummyNE.rotation.y==0){
        this.move('W',0.1);
    }
    if(this.Corpo.position.x <= 0 && (VerdeEst=='G' || dummyNE.rotation.y < 0 * Math.PI/180)){
        this.rotateRigth(dummyNE);
    }
    if(dummyNE.rotation.y <= -89 * Math.PI/180){
        this.move('W',0.1);
    }
}

PercorsoNtoE(dummyNE, VerdeNord){
    if(this.Corpo.position.z <= 0 && dummyNE.rotation.y==0){
        this.move('S',0.1);
    }
    if(this.Corpo.position.z >= 0 && (VerdeNord=='G' || dummyNE.rotation.y > 0 * Math.PI/180)){
        this.rotateLeft(dummyNE);
    }
    if(dummyNE.rotation.y >= 89 * Math.PI/180){
        this.move('S',0.1);
    }
}

PercorsoNtoW(dummyNW, VerdeNord){
    if(this.Corpo.position.z <= 0 && dummyNW.rotation.y==0){
        this.move('S',0.1);
    }
    if(this.Corpo.position.z >= 0 && (VerdeNord=='G' || dummyNW.rotation.y < 0 * Math.PI/180)){
        this.rotateRigth(dummyNW);
    }
    if(dummyNW.rotation.y <= -89 * Math.PI/180){
        this.move('S',0.1);
    }
}

PercorsoWtoN(dummyNW, VerdeWest){
    if(this.Corpo.position.x <= 0 && dummyNW.rotation.y==0){
        this.move('E',0.1);
    }
    if(this.Corpo.position.x >= 0 && (VerdeWest=='G' || dummyNW.rotation.y > 0)){
        this.rotateLeft(dummyNW);
    }
    if(dummyNW.rotation.y >= 89 * Math.PI/180 ){
        this.move('E',0.1);
    }
}

PercorsoWtoS(dummySW, VerdeWest){
    if(this.Corpo.position.x <= 0 && dummySW.rotation.y==0){
        this.move('E',0.1);
    }
    if(this.Corpo.position.x >= 0 && (VerdeWest=='G' || dummySW.rotation.y < 0 * Math.PI/180)){
        this.rotateRigth(dummySW);
    }
    if(dummySW.rotation.y <= -89 * Math.PI/180){
        this.move('E',0.1);
    }
}


}
