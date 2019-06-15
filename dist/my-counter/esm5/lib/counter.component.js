/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
var CounterComponent = /** @class */ (function () {
    function CounterComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    CounterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.count$ = this.store.pipe(select('count'));
    };
    CounterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-counter',
                    template: "<div>Current Count: {{ count$ | async }}</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CounterComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return CounterComponent;
}());
export { CounterComponent };
if (false) {
    /** @type {?} */
    CounterComponent.prototype.count$;
    /**
     * @type {?}
     * @private
     */
    CounterComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1jb3VudGVyLyIsInNvdXJjZXMiOlsibGliL2NvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QztJQVNFLDBCQUFvQixLQUErQjtRQUEvQixVQUFLLEdBQUwsS0FBSyxDQUEwQjtJQUVuRCxDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDREQUF1Qzs7aUJBRXhDOzs7O2dCQVJRLEtBQUs7O0lBb0JkLHVCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxnQkFBZ0I7OztJQUUzQixrQ0FBMkI7Ozs7O0lBRWYsaUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb3VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTx7IGNvdW50OiBudW1iZXIgfT4pIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb3VudCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KCdjb3VudCcpKTtcbiAgfVxufVxuIl19