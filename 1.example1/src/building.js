import { BoxGeometry, MeshPhongMaterial } from 'three';

export default class Building {
    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    get() {
        const building = new BoxGeometry(this.width, this.height, this.depth);
        return building;
    }
}
