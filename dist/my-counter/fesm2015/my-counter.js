import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Component, NgModule, Injector } from '@angular/core';
import { Store, select, StoreModule } from '@ngrx/store';
import { createCustomElement } from '@angular/elements';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ActionTypes = {
    Increment: '[Counter Component] Increment',
    Decrement: '[Counter Component] Decrement',
    Reset: '[Counter Component] Reset',
};
class Increment {
    constructor() {
        this.type = ActionTypes.Increment;
    }
}
class Decrement {
    constructor() {
        this.type = ActionTypes.Decrement;
    }
}
class Reset {
    constructor() {
        this.type = ActionTypes.Reset;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterIncrementComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterDecrementComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterResetComponent {
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
    reset() {
        this.store.dispatch(new Reset());
    }
}
CounterResetComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-counter-reset',
                template: "<button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset Counter</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CounterResetComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = 0;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;
        case ActionTypes.Decrement:
            return state - 1;
        case ActionTypes.Reset:
            return 0;
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActionTypes, Increment, Decrement, Reset, CounterComponent, CounterModule, counterReducer, initialState, CounterDecrementComponent, CounterIncrementComponent, CounterResetComponent };

//# sourceMappingURL=my-counter.js.map