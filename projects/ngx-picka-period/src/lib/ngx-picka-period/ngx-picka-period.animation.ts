import {animate, AnimationTriggerMetadata, group, state, style, transition, trigger} from '@angular/animations';

export const SLIDE_IN_FROM_TOP: AnimationTriggerMetadata = trigger('slideInFromTop', [
  state('void', style({
    opacity: 0,
    transform: 'translate(0, -50px)'
  })),
  transition('void => enter', [group([
      animate('1ms ease-in-out', style({
        transform: 'translate(0, -50px)',
      })),
      animate('500ms ease-in-out', style({
        opacity: 1
      })),
      animate('1000ms ease-in-out', style({
        transform: 'translate(0, 0)',
      }))
    ]
  )])
]);
