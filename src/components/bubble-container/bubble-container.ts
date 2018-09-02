import {
    Component
} from '@angular/core';
import { BubbleComponent } from '../bubble/bubble';
import { BubbleParams } from '../bubble/bubbleParams'

/**
 * Generated class for the BubbleContainerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bubble-container',
  templateUrl: 'bubble-container.html'
})
export class BubbleContainerComponent {

    items: [number];
    bubbleParamsArr: BubbleParams[];

    constructor() {
        this.items = [1,2,3,4,5,1,1,1,1];
        this.bubbleParamsArr = this.getBubbleParams()
        this.positionBubbles(188, 240);
    }

    getBubbleParams() {
        return [
            new BubbleParams(100, 10, 80),
            new BubbleParams(80, 20, 80),
            new BubbleParams(160, 30, 80),
            new BubbleParams(240, 40, 80),
            new BubbleParams(320, 50, 80),
            new BubbleParams(160, 30, 80),
            new BubbleParams(240, 40, 80),
            new BubbleParams(160, 30, 80),
            new BubbleParams(240, 40, 80)
            ];
    }

    btnShuffleClick() {  
        this.shuffle();
        //this.changeBubblePosition();
    }

    changeBubblePosition() {
        var swapItem = this.bubbleParamsArr[0];
        this.bubbleParamsArr[0] = this.bubbleParamsArr[1];
        this.bubbleParamsArr[1] = swapItem;

    }

    shuffle() {
        var i:number;
        var bubbles = this.bubbleParamsArr;

        for (i = 0; i < bubbles.length - 1; i++) {            
            var tempBubble = bubbles[i];
            bubbles[i] = bubbles[i+1];
            bubbles[i+1] = tempBubble;
        }

    }

    positionBubbles(centerX: number, centerY: number) {

        var bubble: BubbleParams = new BubbleParams(centerX - 75, centerY - 75, 150);
        this.bubbleParamsArr[0] = bubble;

        this.setBubblesLocation(this.bubbleParamsArr, centerX, centerY, 140, 45, 180);
    }

    setBubblesLocation(bubbles: BubbleParams[], centerX: number, centerY:number, 
        distanceFromCenter: number, radius:number, startAngle: number) {

        var angleDiff: number = 360 / bubbles.length + 5;

        var i:number;
        var angle = startAngle;

        for (i = 1; i < bubbles.length; i++) {            
            var x = centerX + (distanceFromCenter) * Math.cos(this.radians(angle));
            var y = centerY + (distanceFromCenter) * Math.sin(this.radians(angle));

            var bubble: BubbleParams = new BubbleParams(x-radius, y-radius, (radius *2));
            bubbles[i] = bubble;

            angle = angle + angleDiff;
        }
    }

    radians(degree: number) {
        return Math.PI * (degree / 180);
    }
}
