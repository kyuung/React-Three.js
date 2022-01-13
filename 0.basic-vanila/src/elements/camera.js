import { PerspectiveCamera } from 'three';

export default class PCamera {
    constructor(fov, aspect, near, far) {
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
    }

    get() {
        const camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
        return camera;
    }
}
