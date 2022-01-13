import * as THREE from 'three';
import { PCamera, Box, DiLight, phongMaterial } from './src/elements/index.js';

const canvas = document.querySelector('#screen');

const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();

const camera = new PCamera(75, 2, 0.1, 5).get();
camera.position.z = 2;

const light = new DiLight('white', 1).get();
light.position.set(-1, 2, 4);

const makeInstance = (geo, mat, x) => {
    const instance = new THREE.Mesh(geo, mat);
    scene.add(instance);
    instance.position.x = x;
    return instance;
};

const box = new Box(1, 1, 1).get();
const boxs = [makeInstance(box, phongMaterial('red'), -2), makeInstance(box, phongMaterial('green'), 0), makeInstance(box, phongMaterial('blue'), 2)];

scene.add(light);

renderer.render(scene, camera);

function render(time) {
    time *= 0.001;

    boxs.forEach((box) => (box.rotation.x = time));
    boxs.forEach((box) => (box.rotation.y = time));

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
requestAnimationFrame(render);
