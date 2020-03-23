import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonDirective } from './button.directive';
import { CommonModule } from '@angular/common';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonDirective],
      imports: [CommonModule]
    }),
    withKnobs,
    withA11y
  ]
};

const clicked = action("I've been clicked!");
const onClick = (): void => {
  clicked();
};

export const basic = () => ({
  template: '<button neutronButton (click)="onClick()">Click Me!</button>',
  props: { onClick }
});
