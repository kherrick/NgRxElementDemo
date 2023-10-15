import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { CounterDecrementComponent } from './counter-decrement/counter-decrement.component';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';
import { CounterResetComponent } from './counter-reset/counter-reset.component';
import { CounterComponent } from './counter.component';
import { counterReducer } from './counter.reducer';

type MyCounter =
  | typeof CounterComponent
  | typeof CounterIncrementComponent
  | typeof CounterDecrementComponent
  | typeof CounterResetComponent;

type MyCounterConfig = [string, MyCounter][];

@NgModule({
  imports: [
    CounterComponent,
    CounterDecrementComponent,
    CounterIncrementComponent,
    CounterResetComponent,
    StoreModule.forFeature('count', counterReducer),
  ],
  providers: [StoreRootModule],
})
export class CounterModule {
  constructor(private injector: Injector) {
    const myConfig: MyCounterConfig = [
      ['counter-element', CounterComponent],
      ['counter-increment', CounterIncrementComponent],
      ['counter-decrement', CounterDecrementComponent],
      ['counter-reset', CounterResetComponent],
    ];

    myConfig.forEach(([name, component]) => {
      if (!customElements.get(name)) {
        customElements.define(
          name,
          createCustomElement(component, { injector: this.injector })
        );
      }
    });
  }
}
