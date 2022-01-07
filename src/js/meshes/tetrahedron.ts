import * as THREE from 'three'
import {white, brown, orange, yellow} from './colors'
import TetrahedronTwistedFace from './tetrahedronTwistedFace';

export default class Tetrahedron extends THREE.Mesh {
  constructor(size: number, rotation: number, translation: THREE.Vector2) {
    super()

    const h2=Math.sqrt(3/4*size**2);
    const h3=Math.sqrt(8/9*h2**2);

    const A=new THREE.Vector3(-size/2, -h2/3,  3*h3/4)
    const B=new THREE.Vector3(size/2, -h2/3,  3*h3/4 );
    const C=new THREE.Vector3(0, 2*h2/3,  3*h3/4 );
    const D=new THREE.Vector3(0, 0,  -h3/4 );

    const RA=new THREE.Vector3(A.x*Math.cos(rotation)+A.y*Math.sin(rotation),  -A.x*Math.sin(rotation)+A.y*Math.cos(rotation), A.z)
    const RB=new THREE.Vector3(B.x*Math.cos(rotation)+B.y*Math.sin(rotation),  -B.x*Math.sin(rotation)+B.y*Math.cos(rotation), B.z)
    const RC=new THREE.Vector3(C.x*Math.cos(rotation)+C.y*Math.sin(rotation),  -C.x*Math.sin(rotation)+C.y*Math.cos(rotation), C.z)

    this.add(new TetrahedronTwistedFace(RA, RB, D, white))
    this.add(new TetrahedronTwistedFace(RB, RC, D, orange))
    this.add(new TetrahedronTwistedFace(RC, RA, D, brown))

    this.translateX(translation.x)
    this.translateY(translation.y)

    
  }


}