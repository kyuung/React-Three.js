import { BoxGeometry } from 'three';

export default class Box {
    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    get() {
        const box = new BoxGeometry(this.width, this.height, this.depth);
        return box;
    }
}
