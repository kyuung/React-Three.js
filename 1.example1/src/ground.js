import { PlaneGeometry } from 'three';

export default class Ground {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get() {
        const ground = new PlaneGeometry(this.width, thid.height);
        return ground;
    }
}
