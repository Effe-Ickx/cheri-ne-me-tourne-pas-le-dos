import * as THREE from 'three'
 
export default class BasicLights extends THREE.Group {
  constructor() {
    super();

    // this.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );
    this.add( new THREE.AmbientLight( 0x808080 ) );            
    // this.add( new THREE.DirectionalLight( 0xffffff, 1 ) );            

    const point = new THREE.PointLight(0xFFFFFF, 1, 10, 1);
    point.position.set(0, 0, 2);

    this.add(point);

  }
}