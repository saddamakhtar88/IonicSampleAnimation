import {ElementRef, HostBinding, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  } from '@angular/animations';
import { BubbleParams } from './bubbleParams'

/**
 * Generated class for the BubbleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'bubble',
    templateUrl: 'bubble.html',
    animations: [
        /*trigger('position', [
      transition('void <=> *', []),
      transition('* <=> *', [
        style({top: '{{left}}px'}),
        animate('.5s ease'),
      ], {params: {left: 0}})
    ])*/
    trigger('animFlag', [
      state('true', style({
                left: '{{left}}px',
                top: '{{top}}px',
                width: '{{diameter}}px',
                height: '{{diameter}}px',
                borderRadius: '{{diameter}}px'
      }), {params: {left: 0, top: 0, diameter: 0}}),
      state('false',   style({        
                left: '{{left}}px',
                top: '{{top}}px',
                width: '{{diameter}}px',
                height: '{{diameter}}px',
                borderRadius: '{{diameter}}px'
                }), {params: {left: 0, top: 0, diameter: 0}}),
      transition('void <=> *', [
          style({        
                left: '0px',
                top: '0px'
                }),
          animate('100ms')
          ]),
      transition('* <=> *', animate('200ms'))
    ])
  ]
})
export class BubbleComponent {

    @Input() bubbleParams: BubbleParams;
    animFlag: boolean;

    constructor() {
        console.log('Hello BubbleComponent Component');
    }

    moveToPosition(left, top, diameter) {
        this.bubbleParams.left = left;            
        this.bubbleParams.top = top;
        this.bubbleParams.diameter = diameter;
        this.animFlag = !this.animFlag;
    }

    ngOnChanges(changes: SimpleChanges) {         
        this.moveToPosition(this.bubbleParams.left, this.bubbleParams.top, this.bubbleParams.diameter);
    }
}
