import * as THREE from 'three'
import Lights from './lights'
import TetrahedronsPlane from './meshes/tetrahedronsPlane';
import {tetrahedronSize, tetrahedronsPlaneWidth, tetrahedronsPlaneHeight} from './parameters'

export default class Scene extends THREE.Scene {
  

  constructor() {
    super();

    this.add(new TetrahedronsPlane())
    this.add(new Lights())      
  
  }
}