
export class BubbleParams {

    top: number;
    left: number;
    diameter: number;

    constructor(private prLeft: number, private prTop: number, 
        private prDiameter: number) {

        this.top = prTop;
        this.left = prLeft;
        this.diameter = prDiameter;
    }
}
