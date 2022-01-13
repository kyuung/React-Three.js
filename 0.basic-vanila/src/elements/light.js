import { DirectionalLight } from 'three';

export default class DiLight {
    constructor(color, intensity) {
        this.color = color;
        this.intensity = intensity;
    }

    get() {
        const light = new DirectionalLight(this.color, this.intensity);
        return light;
    }
}
