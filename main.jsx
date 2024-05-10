import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load('./modal/untitled.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});


const Camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 50);
Camera.position.set(0, 0, 5);
scene.add(Camera);
// Add light from the top
const toplight = new THREE.DirectionalLight(0xffffff, 10);
toplight.position.set(300, 300, 300);
toplight.castShadow = true;
scene.add(toplight);

// Add light from the opposite side (bottom)
const bottomlight = new THREE.DirectionalLight(0xffffff, 10);
bottomlight.position.set(-300, -300, -300);
bottomlight.castShadow = true;
scene.add(bottomlight);

const canvas = document.querySelector('canvas.three_js');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(1170, 600);

const control = new OrbitControls(Camera, canvas);
control.enableDamping = true;
control.autoRotate = true;

const renderloop = () => {
    control.update();
    renderer.render(scene, Camera);
    window.requestAnimationFrame(renderloop);
};
renderloop();

// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Earth from '../First3d/public/Earth'; // Assuming Earth is default exported from 'Earth.jsx'

// function App() {
//     const scene = new THREE.Scene();

//     const loader = new GLTFLoader();

//     loader.load('./modal/earth 2.glb', function (gltf) {
//         scene.add(gltf.scene);
//     }, undefined, function (error) {
//         console.error(error);
//     });

//     const Camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 50);
//     Camera.position.set(0, 0, 5);
//     scene.add(Camera);

//     const toplight = new THREE.DirectionalLight(0xffffff, 10);
//     toplight.position.set(300, 300, 300);
//     toplight.castShadow = true;
//     scene.add(toplight);

//     return (
//         <Canvas>
//             <ambientLight />
//             <Suspense fallback={null}>
//                 <Earth />
//             </Suspense>
//             <OrbitControls />
//         </Canvas>
//     );
// }

// export default App;


