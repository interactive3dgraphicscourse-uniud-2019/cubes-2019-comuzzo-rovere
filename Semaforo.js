
function Semaforo(a,b,c,d){
var geometryTuboY = new THREE.BoxGeometry(0.3,6,0.3);
			var geometryTuboX = new THREE.BoxGeometry(3,0.3,0.3);
			var materialTubo = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
		
			var TuboX = new THREE.Mesh( geometryTuboX, materialTubo);
			//TuboX.rotation.x=90 * Math.PI/180;
			TuboX.position.y=2.85;
			TuboX.position.x=-1.5;
			scene.add( TuboX );
		
			var TuboY = new THREE.Mesh( geometryTuboY, materialTubo );
			TuboY.position.y=3;
			TuboY.add(TuboX);
			scene.add(TuboY);

			var geoScatola=new THREE.BoxGeometry(1,2.5,1);
			var nero= new THREE.MeshBasicMaterial({color:0x000000});
			var Scatola= new THREE.Mesh(geoScatola,nero);
			Scatola.position.x=-1.5;
			scene.add(Scatola);
			TuboX.add(Scatola);
						
			
			var via=true;
			var geoVerde=new THREE.BoxGeometry(0.4,0.4,0.4);
			var verde= new THREE.MeshBasicMaterial({color:0x00ff00});
			var Verde=new THREE.Mesh(geoVerde,verde);

			var geoRosso=new THREE.BoxGeometry(0.6,0.6,0.6);
			var rosso= new THREE.MeshBasicMaterial({color:0xff0000});
			var Rosso=new THREE.Mesh(geoRosso,rosso);

			var geoGiallo=new THREE.BoxGeometry(0.4,0.4,0.4);
			var giallo= new THREE.MeshBasicMaterial({color:0xffff00});
			var Giallo=new THREE.Mesh(geoGiallo,giallo);

			Verde.position.z=0.5;
			Verde.position.y=-0.8;
			Rosso.position.z=0.5;
			Rosso.position.y=0.8;
			Giallo.position.z=0.5;

			if(d==0){
				Verde.material.color.setHex(0x005500);
				scene.add(Verde);
                Scatola.add(Verde);
			   
				Giallo.material.color.setHex(0x555500);
				scene.add(Giallo);
				Scatola.add(Giallo);
				
				Rosso.material.color.setHex(0xff0000);
				scene.add(Rosso);
				Scatola.add(Rosso);

			}else if(d==1){
				Verde.material.color.setHex(0x005500);
				scene.add(Verde);
                Scatola.add(Verde);
				
				Giallo.material.color.setHex(0xffff00);
				scene.add(Giallo);
				Scatola.add(Giallo);

				Rosso.material.color.setHex(0x550000);
				scene.add(Rosso);
				Scatola.add(Rosso);

			}else{
				Verde.material.color.setHex(0x00ff00);
				scene.add(Verde);
                Scatola.add(Verde);
				
				Giallo.material.color.setHex(0x555500);
				scene.add(Giallo);
				Scatola.add(Giallo);

				Rosso.material.color.setHex(0x550000);
				scene.add(Rosso);
				Scatola.add(Rosso);

			}
            TuboY.position.x=a;
            TuboY.position.z=b;
            TuboY.rotation.y=c;
        }