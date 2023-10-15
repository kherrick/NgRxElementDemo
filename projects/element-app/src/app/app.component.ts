import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CounterModule } from 'my-counter';

@Component({
  imports: [CommonModule, CounterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }

      counter-increment,
      counter-element,
      counter-decrement,
      counter-reset {
        padding: 0.5rem;
      }
    `,
  ],
  template: `
    <counter-increment></counter-increment>
    <counter-element></counter-element>
    <counter-decrement></counter-decrement>
    <counter-reset></counter-reset>
  `,
})
export class AppComponent {
  title = 'element-app';
}
