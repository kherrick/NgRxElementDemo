import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Increment } from '../counter.actions';

@Component({
  imports: [MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <button mat-raised-button color="primary" (click)="increment()">
      Increment
    </button>
  `,
})
export class CounterIncrementComponent {
  constructor(private store: Store<{ count: number }>) {}

  increment() {
    this.store.dispatch(new Increment());
  }
}
