/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement } from '../counter.actions';
export class CounterDecrementComponent {
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
    decrement() {
        this.store.dispatch(new Decrement());
    }
}
CounterDecrementComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-counter-decrement',
                template: "\n<button mat-raised-button color=\"accent\" (click)=\"decrement()\">Decrement</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CounterDecrementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CounterDecrementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1kZWNyZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktY291bnRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLWRlY3JlbWVudC9jb3VudGVyLWRlY3JlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFFLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPL0MsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUVwQyxZQUFvQixLQUErQjtRQUEvQixVQUFLLEdBQUwsS0FBSyxDQUEwQjtJQUFJLENBQUM7Ozs7SUFFeEQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxR0FBaUQ7O2FBRWxEOzs7O1lBUFEsS0FBSzs7Ozs7OztJQVVBLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuICBpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbiAgaW1wb3J0IHsgRGVjcmVtZW50IH0gZnJvbSAnLi4vY291bnRlci5hY3Rpb25zJztcblxuICBAQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb3VudGVyLWRlY3JlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvdW50ZXItZGVjcmVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLWRlY3JlbWVudC5jb21wb25lbnQuY3NzJ11cbiAgfSlcbiAgZXhwb3J0IGNsYXNzIENvdW50ZXJEZWNyZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8eyBjb3VudDogbnVtYmVyIH0+KSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGRlY3JlbWVudCgpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlY3JlbWVudCgpKTtcbiAgICB9XG5cbiAgfVxuIl19