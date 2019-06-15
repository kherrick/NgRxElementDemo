/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Increment } from '../counter.actions';
export class CounterIncrementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    increment() {
        this.store.dispatch(new Increment());
    }
}
CounterIncrementComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-counter-increment',
                template: "<button mat-raised-button color=\"primary\" (click)=\"increment()\">Increment</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CounterIncrementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterIncrementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1pbmNyZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktY291bnRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLWluY3JlbWVudC9jb3VudGVyLWluY3JlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFPOUMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVwQyxZQUFvQixLQUErQjtRQUEvQixVQUFLLEdBQUwsS0FBSyxDQUEwQjtJQUFJLENBQUM7Ozs7SUFFeEQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxvR0FBaUQ7O2FBRWxEOzs7O1lBUFEsS0FBSzs7Ozs7OztJQVVBLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgSW5jcmVtZW50fSBmcm9tICcuLi9jb3VudGVyLmFjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY291bnRlci1pbmNyZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci1pbmNyZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLWluY3JlbWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckluY3JlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8eyBjb3VudDogbnVtYmVyIH0+KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBJbmNyZW1lbnQoKSk7XG4gIH1cblxufVxuIl19