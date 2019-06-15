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
var ActionTypes = {
    Increment: '[Counter Component] Increment',
    Decrement: '[Counter Component] Decrement',
    Reset: '[Counter Component] Reset',
};
var Increment = /** @class */ (function () {
    function Increment() {
        this.type = ActionTypes.Increment;
    }
    return Increment;
}());
var Decrement = /** @class */ (function () {
    function Decrement() {
        this.type = ActionTypes.Decrement;
    }
    return Decrement;
}());
var Reset = /** @class */ (function () {
    function Reset() {
        this.type = ActionTypes.Reset;
    }
    return Reset;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = 0;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function counterReducer(state, action) {
    if (state === void 0) { state = initialState; }
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