import {
  animate,
  AnimationMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandCollapseAnimation = (
  animateInMs: number = 200
): AnimationMetadata => {
  return trigger('expandCollapse', [
    state(
      'void',
      style({
        height: 0,
      })
    ),
    transition('void<=>*', animate(animateInMs)),
  ]);
};
