import * as THREE from 'three';
import Building from './src/building';
import Ground from './src/ground';

const canvas = document.querySelector('#screen');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
