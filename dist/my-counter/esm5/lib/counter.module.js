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
var CounterModule = /** @class */ (function () {
    function CounterModule(injector) {
        this.injector = injector;
        /** @type {?} */
        var CounterElement = createCustomElement(CounterComponent, { injector: injector });
        // Register the custom element with the browser.
        customElements.define('counter-element', CounterElement);
        /** @type {?} */
        var CounterIncrementElement = createCustomElement(CounterIncrementComponent, { injector: injector });
        customElements.define('counter-increment', CounterIncrementElement);
        /** @type {?} */
        var CounterDecrementElement = createCustomElement(CounterDecrementComponent, { injector: injector });
        customElements.define('counter-decrement', CounterDecrementElement);
        /** @type {?} */
        var CounterResetElement = createCustomElement(CounterResetComponent, { injector: injector });
        customElements.define('counter-reset', CounterResetElement);
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
    CounterModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return CounterModule;
}());
export { CounterModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1jb3VudGVyLyIsInNvdXJjZXMiOlsibGliL2NvdW50ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhEO0lBY0ksdUJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDMUUsZ0RBQWdEO1FBQ2hELGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUM7O1lBRW5ELHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUM1RixjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7O1lBQzlELHVCQUF1QixHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUM1RixjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7O1lBQzlELG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUNwRixjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQXpCSixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUseUJBQXlCO3dCQUN4RCx5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDbkQsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDO3FCQUMvQztvQkFDRCxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0I7d0JBQ2hDLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6QixxQkFBcUIsQ0FBQztpQkFDekI7Ozs7Z0JBdkJrQixRQUFROztJQXNDM0Isb0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQWRZLGFBQWE7Ozs7OztJQUNWLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3VudGVySW5jcmVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGVyLWluY3JlbWVudC9jb3VudGVyLWluY3JlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291bnRlckRlY3JlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY291bnRlci1kZWNyZW1lbnQvY291bnRlci1kZWNyZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50ZXJSZXNldENvbXBvbmVudCB9IGZyb20gJy4vY291bnRlci1yZXNldC9jb3VudGVyLXJlc2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvdW50ZXJSZWR1Y2VyIH0gZnJvbSAnLi9jb3VudGVyLnJlZHVjZXInO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ291bnRlckNvbXBvbmVudCwgQ291bnRlckluY3JlbWVudENvbXBvbmVudCxcbiAgICBDb3VudGVyRGVjcmVtZW50Q29tcG9uZW50LCBDb3VudGVyUmVzZXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KHsgY291bnQ6IGNvdW50ZXJSZWR1Y2VyIH0pXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NvdW50ZXJDb21wb25lbnQsXG4gICAgQ291bnRlckluY3JlbWVudENvbXBvbmVudCxcbiAgICBDb3VudGVyRGVjcmVtZW50Q29tcG9uZW50LFxuICAgIENvdW50ZXJSZXNldENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlck1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IgKSB7XG4gICAgICBjb25zdCBDb3VudGVyRWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoQ291bnRlckNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjdXN0b20gZWxlbWVudCB3aXRoIHRoZSBicm93c2VyLlxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb3VudGVyLWVsZW1lbnQnLCBDb3VudGVyRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IENvdW50ZXJJbmNyZW1lbnRFbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChDb3VudGVySW5jcmVtZW50Q29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb3VudGVyLWluY3JlbWVudCcsIENvdW50ZXJJbmNyZW1lbnRFbGVtZW50KTtcbiAgICAgIGNvbnN0IENvdW50ZXJEZWNyZW1lbnRFbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChDb3VudGVyRGVjcmVtZW50Q29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb3VudGVyLWRlY3JlbWVudCcsIENvdW50ZXJEZWNyZW1lbnRFbGVtZW50KTtcbiAgICAgIGNvbnN0IENvdW50ZXJSZXNldEVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KENvdW50ZXJSZXNldENvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY291bnRlci1yZXNldCcsIENvdW50ZXJSZXNldEVsZW1lbnQpO1xuICAgIH1cblxufVxuIl19