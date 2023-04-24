import * as THREE from './three.js-master/three.js-master/build/three.module.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
console.log(THREE)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
//scene.add( directionalLight );
light.add(directionalLight)
directionalLight.position.set(1,2,3)
scene.add( light );
//export default light

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const loader = new GLTFLoader();

loader.load( 'bitcoin_blue_02.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


/****3D Model Test Start********/
/**
let loader = new THREE.GLTFLoader();
loader.load('scene.gltf', function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

init();**/

/** 
const gltfLoader = new GLTFLoader();
gltfLoader.load('assets/bitcoin_blue_02.glb', (gltfScene) => {
scene.add(gltfScene.scene);
});
**/

/****3D Model Test Finish********/



/***
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x3f7b9d } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//camera.position.z = 5;
camera.position.set(0, 0, 2);
camera.lookAt(cube.position)

/**
function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
**/


/** 
function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
  
        const fov = 75;
      const aspect = 2;  // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;
  
      const scene = new THREE.Scene();

      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      renderer.render(scene, camera);

  }
**/