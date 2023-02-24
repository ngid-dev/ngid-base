import {
  animate,
  AnimationMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const rotateAnimation = (
  animateInMs: number = 200
): AnimationMetadata => {
  return trigger('rotate', [
    state(
      'rotated',
      style({
        transform: 'rotate(180deg)',
      })
    ),
    state('default', style({})),
    transition('rotated<=>default', animate(animateInMs)),
  ]);
};
