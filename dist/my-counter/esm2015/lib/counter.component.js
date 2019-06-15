/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
export class CounterComponent {
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
        this.count$ = this.store.pipe(select('count'));
    }
}
CounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-counter',
                template: "<div>Current Count: {{ count$ | async }}</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CounterComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    CounterComponent.prototype.count$;
    /**
     * @type {?}
     * @private
     */
    CounterComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1jb3VudGVyLyIsInNvdXJjZXMiOlsibGliL2NvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVM1QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBSTNCLFlBQW9CLEtBQStCO1FBQS9CLFVBQUssR0FBTCxLQUFLLENBQTBCO0lBRW5ELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDREQUF1Qzs7YUFFeEM7Ozs7WUFSUSxLQUFLOzs7O0lBV1osa0NBQTJCOzs7OztJQUVmLGlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY291bnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8eyBjb3VudDogbnVtYmVyIH0+KSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY291bnQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCgnY291bnQnKSk7XG4gIH1cbn1cbiJdfQ==