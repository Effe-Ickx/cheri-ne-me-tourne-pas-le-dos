import * as THREE from 'three'
import Tetrahedron from './tetrahedron';
import {tetrahedronSize, tetrahedronsPlaneWidth, tetrahedronsPlaneHeight} from '../parameters'

export default class TetrahedronsPlane extends THREE.Group {
  constructor() {
    super()

    const h=Math.sqrt(3/4*tetrahedronSize**2)

    for(let y=0; y<tetrahedronsPlaneHeight; y++) {    
      for(let x=0; x<tetrahedronsPlaneWidth; x++) {
        let tetrahedron=new Tetrahedron(
          tetrahedronSize, 
          x%2*(Math.PI/3)*6/2, 
          new THREE.Vector2((x-tetrahedronsPlaneWidth/2)*tetrahedronSize/2+y%2*tetrahedronSize/2, h*(y-tetrahedronsPlaneHeight/2)+(x%2)*h/3)
        )
        this.add(tetrahedron)
      }
    }
  }
}
