import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Decrement } from '../counter.actions';

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
    <button mat-raised-button color="accent" (click)="decrement()">
      Decrement
    </button>
  `,
})
export class CounterDecrementComponent {
  constructor(private store: Store<{ count: number }>) {}

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
