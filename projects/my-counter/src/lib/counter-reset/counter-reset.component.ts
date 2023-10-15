import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Reset } from '../counter.actions';

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
    <button mat-raised-button color="warn" (click)="reset()">
      Reset Counter
    </button>
  `
})
export class CounterResetComponent {
  constructor(private store: Store<{ count: number }>) {}

  reset() {
    this.store.dispatch(new Reset());
  }
}
