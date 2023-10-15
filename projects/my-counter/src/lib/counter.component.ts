import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<ng-container>Current Count: {{ count$ | async }}</ng-container>`,
})
export class CounterComponent {
  count$: Observable<number> = this.store.select('count');

  constructor(private store: Store<{ count: number }>) {}
}
