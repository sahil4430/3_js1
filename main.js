import * as THREE from'three';
const scene= new THREE .Scene();
const cubeGeometry= new THREE.BoxGeometry(1,1,1);
const cubeMaterial =new THREE.MeshBasicMaterial({color: "red"})
const cubeMesh =  new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);
// console.log(cubeMesh);
// console.log(scene);
scene.add( cubeMesh);
// scene.add( cubeMesh);
//initialise Camera
console.log( window.innerWidth, window.innerHeight);
const Camera = new THREE.PerspectiveCamera( 60,innerWidth/innerHeight, 1, 50);
 scene.add(
  Camera
 );
 Camera.position.z = 5;
 // initiallise the render
 const canvas= document.querySelector('canvas.three_js');
 console.log(canvas);
 const renderer = new THREE.WebGLRenderer(
  {
    canvas:canvas
  }
 )
 renderer.setSize(1000,500);
//  renderer.render( scene,Camera)
 function animate(){
  requestAnimationFrame(animate);
  cubeMesh.rotation.x +=0.01;
  cubeMesh.rotation.y += 0.02; 
  renderer.render( scene,Camera)
}
animate();