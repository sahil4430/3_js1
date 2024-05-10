import * as THREE from'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene= new THREE .Scene();
// const cubeGeometry= new THREE.BoxGeometry(1,1,1);
// const cubeMaterial =new THREE.MeshBasicMaterial({color: "red"})
// const cubeMesh =  new THREE.Mesh(
//   cubeGeometry,
//   cubeMaterial
// );

const loader = new GLTFLoader();

loader.load('./modal/untitled.glb', function (gltf) {
  console.log(gltf.scene); // Log the gltf.scene object
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});
// console.log(cubeMesh);
// console.log(scene);
scene.add( loader);
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
  //use to render the code
 )
 renderer.setSize(1170,600);
 renderer.render( scene,Camera)

// ANIMATION

//  function animate(){
//   requestAnimationFrame(animate);
//   cubeMesh.rotation.x +=0.01;
//   cubeMesh.rotation.y += 0.02; 
//   renderer.render( scene,Camera)
// }
// animate();
//intialise control
 const control = new OrbitControls(Camera,canvas)
 control.enableDamping = true;
 control.autoRotate = true ;
  const renderloop = ()=>{
    control.update();
    renderer.render( scene,Camera);
    window.requestAnimationFrame(renderloop);
  }
  renderloop()