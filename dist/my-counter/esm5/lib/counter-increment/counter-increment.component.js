/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment } from '../counter.actions';
var CounterIncrementComponent = /** @class */ (function () {
    function CounterIncrementComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    CounterIncrementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CounterIncrementComponent.prototype.increment = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new Increment());
    };
    CounterIncrementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-counter-increment',
                    template: "<button mat-raised-button color=\"primary\" (click)=\"increment()\">Increment</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CounterIncrementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return CounterIncrementComponent;
}());
export { CounterIncrementComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterIncrementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1pbmNyZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktY291bnRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLWluY3JlbWVudC9jb3VudGVyLWluY3JlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFOUM7SUFPRSxtQ0FBb0IsS0FBK0I7UUFBL0IsVUFBSyxHQUFMLEtBQUssQ0FBMEI7SUFBSSxDQUFDOzs7O0lBRXhELDRDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCw2Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG9HQUFpRDs7aUJBRWxEOzs7O2dCQVBRLEtBQUs7O0lBbUJkLGdDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSx5QkFBeUI7Ozs7OztJQUV4QiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEluY3JlbWVudH0gZnJvbSAnLi4vY291bnRlci5hY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvdW50ZXItaW5jcmVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdW50ZXItaW5jcmVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRlci1pbmNyZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvdW50ZXJJbmNyZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPHsgY291bnQ6IG51bWJlciB9PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSW5jcmVtZW50KCkpO1xuICB9XG5cbn1cbiJdfQ==