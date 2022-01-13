import { MeshBasicMaterial, MeshPhongMaterial } from 'three';

const basicMaterial = (color) => new MeshBasicMaterial({ color: color });
const phongMaterial = (color) => new MeshPhongMaterial({ color: color });

export { basicMaterial, phongMaterial };
