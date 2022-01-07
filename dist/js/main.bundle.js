(()=>{"use strict";var e,t={812:()=>{},922:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(212));class s extends a.PerspectiveCamera{constructor(e){super(75,e.width/e.height,.1,100),this.position.x=0,this.position.y=0,this.position.z=8}}t.default=s},805:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(212));class s extends a.Group{constructor(){super(),this.add(new a.AmbientLight(8421504));const e=new a.PointLight(16777215,1,10,1);e.position.set(0,0,2),this.add(e)}}t.default=s},490:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.orange=t.brown=t.yellow=t.white=t.blue=t.green=t.red=t.black=void 0;const a=o(n(212));t.black=new a.Color(0,0,0),t.red=new a.Color(1,0,0),t.green=new a.Color(0,1,0),t.blue=new a.Color(0,0,1),t.white=new a.Color(1,1,1),t.yellow=new a.Color(1,1,0),t.brown=new a.Color("rgb(142,22,0)"),t.orange=new a.Color(16028942)},405:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(212)),u=n(490),c=a(n(26));class l extends s.Mesh{constructor(e,t,n){super();const r=Math.sqrt(3/4*e**2),i=Math.sqrt(8/9*r**2),o=new s.Vector3(-e/2,-r/3,3*i/4),a=new s.Vector3(e/2,-r/3,3*i/4),l=new s.Vector3(0,2*r/3,3*i/4),d=new s.Vector3(0,0,-i/4),h=new s.Vector3(o.x*Math.cos(t)+o.y*Math.sin(t),-o.x*Math.sin(t)+o.y*Math.cos(t),o.z),f=new s.Vector3(a.x*Math.cos(t)+a.y*Math.sin(t),-a.x*Math.sin(t)+a.y*Math.cos(t),a.z),_=new s.Vector3(l.x*Math.cos(t)+l.y*Math.sin(t),-l.x*Math.sin(t)+l.y*Math.cos(t),l.z);this.add(new c.default(h,f,d,u.white)),this.add(new c.default(f,_,d,u.orange)),this.add(new c.default(_,h,d,u.brown)),this.translateX(n.x),this.translateY(n.y)}}t.default=l},26:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=o(n(212)),s=n(400),u=n(966);class c extends a.Mesh{constructor(e,t,n,r){super(),this.A=e,this.B=t,this.C=n,this.material=new a.MeshLambertMaterial({color:r}),this.geometry=new s.ParametricGeometry(this.parametricGeometryFunction.bind(this),u.tetrahedronSegments,u.tetrahedronSegments)}parametricGeometryFunction(e,t,n){const r=(this.A.x+e*(this.B.x-this.A.x))*(1-t),i=(this.A.y+e*(this.B.y-this.A.y))*(1-t),o=this.A.z+t**3*(this.C.z-this.A.z),a=Math.PI/2*t**1.7,s=r*Math.cos(a)+i*Math.sin(a),u=-r*Math.sin(a)+i*Math.cos(a);n.set(s,u,o)}}t.default=c},721:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(212)),u=a(n(405)),c=n(966);class l extends s.Group{constructor(){super();const e=Math.sqrt(3/4*c.tetrahedronSize**2);for(let t=0;t<c.tetrahedronsPlaneHeight;t++)for(let n=0;n<c.tetrahedronsPlaneWidth;n++){let r=new u.default(c.tetrahedronSize,n%2*(Math.PI/3)*6/2,new s.Vector2((n-c.tetrahedronsPlaneWidth/2)*c.tetrahedronSize/2+t%2*c.tetrahedronSize/2,e*(t-c.tetrahedronsPlaneHeight/2)+n%2*e/3));this.add(r)}}}t.default=l},966:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tetrahedronSegments=t.tetrahedronsPlaneHeight=t.tetrahedronsPlaneWidth=t.tetrahedronSize=void 0,t.tetrahedronSize=2,t.tetrahedronsPlaneWidth=40,t.tetrahedronsPlaneHeight=20,t.tetrahedronSegments=10},872:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(212)),u=n(365),c=a(n(922)),l=a(n(494)),d={width:window.innerWidth,height:window.innerHeight};class h extends s.WebGLRenderer{constructor(e){super(e),this.camera=new c.default(d),this.scene=new l.default,this.clock=new s.Clock,this.controls=new u.OrbitControls(this.camera,this.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate(),document.body.appendChild(this.domElement)}resize(){d.width=window.innerWidth,d.height=window.innerHeight,this.camera.aspect=d.width/d.height,this.camera.updateProjectionMatrix(),this.setSize(d.width,d.height),this.setPixelRatio(Math.min(window.devicePixelRatio,2))}animate(){const e=this.clock.getElapsedTime();this.camera.position.y=3*Math.cos(e/2),this.camera.position.x=4*Math.sin(e/2),this.camera.position.z=6+Math.sin(e)/4,this.camera.rotation.z=e/2,this.render(this.scene,this.camera),window.requestAnimationFrame(this.animate.bind(this))}}t.default=h},494:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=o(n(212)),u=a(n(805)),c=a(n(721));class l extends s.Scene{constructor(){super(),this.add(new c.default),this.add(new u.default)}}t.default=l},519:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});new(r(n(872)).default)({antialias:!0})}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,i,o]=e[l],s=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,s,u]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var l=u(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;return r.O(l)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[799],(()=>r(519)));var i=r.O(void 0,[799],(()=>r(812)));i=r.O(i)})();