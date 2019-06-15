/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reset } from '../counter.actions';
var CounterResetComponent = /** @class */ (function () {
    function CounterResetComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    CounterResetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CounterResetComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new Reset());
    };
    CounterResetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-counter-reset',
                    template: "<button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset Counter</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CounterResetComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return CounterResetComponent;
}());
export { CounterResetComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterResetComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1yZXNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1jb3VudGVyLyIsInNvdXJjZXMiOlsibGliL2NvdW50ZXItcmVzZXQvY291bnRlci1yZXNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0M7SUFPRSwrQkFBb0IsS0FBK0I7UUFBL0IsVUFBSyxHQUFMLEtBQUssQ0FBMEI7SUFBSSxDQUFDOzs7O0lBRXhELHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxxQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGlHQUE2Qzs7aUJBRTlDOzs7O2dCQVBRLEtBQUs7O0lBa0JkLDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlkscUJBQXFCOzs7Ozs7SUFFcEIsc0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUmVzZXQgfSBmcm9tICcuLi9jb3VudGVyLmFjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY291bnRlci1yZXNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLXJlc2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRlci1yZXNldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlclJlc2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTx7IGNvdW50OiBudW1iZXIgfT4pIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVzZXQoKSk7XG4gIH1cbn1cbiJdfQ==