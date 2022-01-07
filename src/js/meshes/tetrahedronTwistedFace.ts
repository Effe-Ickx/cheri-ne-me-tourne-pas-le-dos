import * as THREE from 'three'
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js'
import {tetrahedronSegments} from '../parameters'

export default class TetrahedronTwistedFace extends THREE.Mesh {
  
  
  constructor(
    private A:THREE.Vector3, 
    private B:THREE.Vector3, 
    private C:THREE.Vector3, 
    color: THREE.Color, 
  ) {
    super()

    this.material = new THREE.MeshLambertMaterial( { 
      color,
    })

    this.geometry = new ParametricGeometry( this.parametricGeometryFunction.bind(this), tetrahedronSegments, tetrahedronSegments );
  }

  parametricGeometryFunction(u: number, v:number, target: THREE.Vector3) {   
    const x=(this.A.x+u*(this.B.x-this.A.x))*(1-v) 
    const y=(this.A.y+u*(this.B.y-this.A.y))*(1-v)
    const z=this.A.z+v**3*(this.C.z-this.A.z)
    
    const alpha=Math.PI/2*(v**1.7); 
    const rx=x*Math.cos(alpha)+y*Math.sin(alpha)
    const ry=-x*Math.sin(alpha)+y*Math.cos(alpha)


    target.set(rx, ry, z)
 }
}