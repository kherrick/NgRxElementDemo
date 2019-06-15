/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CounterComponent } from './counter.component';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';
import { CounterDecrementComponent } from './counter-decrement/counter-decrement.component';
import { CounterResetComponent } from './counter-reset/counter-reset.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { createCustomElement } from '@angular/elements';
export class CounterModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const CounterElement = createCustomElement(CounterComponent, { injector });
        // Register the custom element with the browser.
        customElements.define('counter-element', CounterElement);
        /** @type {?} */
        const CounterIncrementElement = createCustomElement(CounterIncrementComponent, { injector });
        customElements.define('counter-increment', CounterIncrementElement);
        /** @type {?} */
        const CounterDecrementElement = createCustomElement(CounterDecrementComponent, { injector });
        customElements.define('counter-decrement', CounterDecrementElement);
        /** @type {?} */
        const CounterResetElement = createCustomElement(CounterResetComponent, { injector });
        customElements.define('counter-reset', CounterResetElement);
    }
}
CounterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CounterComponent, CounterIncrementComponent,
                    CounterDecrementComponent, CounterResetComponent],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    StoreModule.forRoot({ count: counterReducer })
                ],
                entryComponents: [CounterComponent,
                    CounterIncrementComponent,
                    CounterDecrementComponent,
                    CounterResetComponent]
            },] }
];
/** @nocollapse */
CounterModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1jb3VudGVyLyIsInNvdXJjZXMiOlsibGliL2NvdW50ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBZXhELE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3RCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O2NBQzlCLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzFFLGdEQUFnRDtRQUNoRCxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDOztjQUVuRCx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzVGLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzs7Y0FDOUQsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUMseUJBQXlCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUM1RixjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7O2NBQzlELG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDcEYsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUF6QkosUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHlCQUF5QjtvQkFDeEQseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ25ELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztpQkFDL0M7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsZ0JBQWdCO29CQUNoQyx5QkFBeUI7b0JBQ3pCLHlCQUF5QjtvQkFDekIscUJBQXFCLENBQUM7YUFDekI7Ozs7WUF2QmtCLFFBQVE7Ozs7Ozs7SUF5QlgsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IENvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJJbmNyZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvdW50ZXItaW5jcmVtZW50L2NvdW50ZXItaW5jcmVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3VudGVyRGVjcmVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLWRlY3JlbWVudC9jb3VudGVyLWRlY3JlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291bnRlclJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLXJlc2V0L2NvdW50ZXItcmVzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY291bnRlclJlZHVjZXIgfSBmcm9tICcuL2NvdW50ZXIucmVkdWNlcic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb3VudGVyQ29tcG9uZW50LCBDb3VudGVySW5jcmVtZW50Q29tcG9uZW50LFxuICAgIENvdW50ZXJEZWNyZW1lbnRDb21wb25lbnQsIENvdW50ZXJSZXNldENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvclJvb3QoeyBjb3VudDogY291bnRlclJlZHVjZXIgfSlcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ291bnRlckNvbXBvbmVudCxcbiAgICBDb3VudGVySW5jcmVtZW50Q29tcG9uZW50LFxuICAgIENvdW50ZXJEZWNyZW1lbnRDb21wb25lbnQsXG4gICAgQ291bnRlclJlc2V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciApIHtcbiAgICAgIGNvbnN0IENvdW50ZXJFbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChDb3VudGVyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgICAgLy8gUmVnaXN0ZXIgdGhlIGN1c3RvbSBlbGVtZW50IHdpdGggdGhlIGJyb3dzZXIuXG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvdW50ZXItZWxlbWVudCcsIENvdW50ZXJFbGVtZW50KTtcblxuICAgICAgY29uc3QgQ291bnRlckluY3JlbWVudEVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KENvdW50ZXJJbmNyZW1lbnRDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvdW50ZXItaW5jcmVtZW50JywgQ291bnRlckluY3JlbWVudEVsZW1lbnQpO1xuICAgICAgY29uc3QgQ291bnRlckRlY3JlbWVudEVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KENvdW50ZXJEZWNyZW1lbnRDb21wb25lbnQsIHsgaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvdW50ZXItZGVjcmVtZW50JywgQ291bnRlckRlY3JlbWVudEVsZW1lbnQpO1xuICAgICAgY29uc3QgQ291bnRlclJlc2V0RWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoQ291bnRlclJlc2V0Q29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb3VudGVyLXJlc2V0JywgQ291bnRlclJlc2V0RWxlbWVudCk7XG4gICAgfVxuXG59XG4iXX0=