/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement } from '../counter.actions';
var CounterDecrementComponent = /** @class */ (function () {
    function CounterDecrementComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    CounterDecrementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CounterDecrementComponent.prototype.decrement = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new Decrement());
    };
    CounterDecrementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-counter-decrement',
                    template: "\n<button mat-raised-button color=\"accent\" (click)=\"decrement()\">Decrement</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CounterDecrementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return CounterDecrementComponent;
}());
export { CounterDecrementComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterDecrementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1kZWNyZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktY291bnRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLWRlY3JlbWVudC9jb3VudGVyLWRlY3JlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFFLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7SUFPRSxtQ0FBb0IsS0FBK0I7UUFBL0IsVUFBSyxHQUFMLEtBQUssQ0FBMEI7SUFBSSxDQUFDOzs7O0lBRXhELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw2Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHFHQUFpRDs7aUJBRWxEOzs7O2dCQVBRLEtBQUs7O0lBbUJkLGdDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSx5QkFBeUI7Ozs7OztJQUV4QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbiAgaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG4gIGltcG9ydCB7IERlY3JlbWVudCB9IGZyb20gJy4uL2NvdW50ZXIuYWN0aW9ucyc7XG5cbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY291bnRlci1kZWNyZW1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLWRlY3JlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY291bnRlci1kZWNyZW1lbnQuY29tcG9uZW50LmNzcyddXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBDb3VudGVyRGVjcmVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPHsgY291bnQ6IG51bWJlciB9PikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBkZWNyZW1lbnQoKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWNyZW1lbnQoKSk7XG4gICAgfVxuXG4gIH1cbiJdfQ==