(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/button'), require('@angular/core'), require('@ngrx/store'), require('@angular/elements')) :
    typeof define === 'function' && define.amd ? define('my-counter', ['exports', '@angular/common', '@angular/material/button', '@angular/core', '@ngrx/store', '@angular/elements'], factory) :
    (factory((global['my-counter'] = {}),global.ng.common,global.ng.material.button,global.ng.core,global.store,global.ng.elements));
}(this, (function (exports,common,button,core,store,elements) { 'use strict';

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
        function CounterComponent(store$$1) {
            this.store = store$$1;
        }
        /**
         * @return {?}
         */
        CounterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.count$ = this.store.pipe(store.select('count'));
            };
        CounterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-counter',
                        template: "<div>Current Count: {{ count$ | async }}</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CounterComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return CounterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CounterIncrementComponent = /** @class */ (function () {
        function CounterIncrementComponent(store$$1) {
            this.store = store$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-counter-increment',
                        template: "<button mat-raised-button color=\"primary\" (click)=\"increment()\">Increment</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CounterIncrementComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return CounterIncrementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CounterDecrementComponent = /** @class */ (function () {
        function CounterDecrementComponent(store$$1) {
            this.store = store$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-counter-decrement',
                        template: "\n<button mat-raised-button color=\"accent\" (click)=\"decrement()\">Decrement</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CounterDecrementComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return CounterDecrementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CounterResetComponent = /** @class */ (function () {
        function CounterResetComponent(store$$1) {
            this.store = store$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-counter-reset',
                        template: "<button mat-raised-button color=\"warn\" (click)=\"reset()\">Reset Counter</button>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CounterResetComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
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
        if (state === void 0) {
            state = initialState;
        }
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
            var CounterElement = elements.createCustomElement(CounterComponent, { injector: injector });
            // Register the custom element with the browser.
            customElements.define('counter-element', CounterElement);
            /** @type {?} */
            var CounterIncrementElement = elements.createCustomElement(CounterIncrementComponent, { injector: injector });
            customElements.define('counter-increment', CounterIncrementElement);
            /** @type {?} */
            var CounterDecrementElement = elements.createCustomElement(CounterDecrementComponent, { injector: injector });
            customElements.define('counter-decrement', CounterDecrementElement);
            /** @type {?} */
            var CounterResetElement = elements.createCustomElement(CounterResetComponent, { injector: injector });
            customElements.define('counter-reset', CounterResetElement);
        }
        CounterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CounterComponent, CounterIncrementComponent,
                            CounterDecrementComponent, CounterResetComponent],
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            store.StoreModule.forRoot({ count: counterReducer })
                        ],
                        entryComponents: [CounterComponent,
                            CounterIncrementComponent,
                            CounterDecrementComponent,
                            CounterResetComponent]
                    },] }
        ];
        /** @nocollapse */
        CounterModule.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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

    exports.ActionTypes = ActionTypes;
    exports.Increment = Increment;
    exports.Decrement = Decrement;
    exports.Reset = Reset;
    exports.CounterComponent = CounterComponent;
    exports.CounterModule = CounterModule;
    exports.counterReducer = counterReducer;
    exports.initialState = initialState;
    exports.CounterDecrementComponent = CounterDecrementComponent;
    exports.CounterIncrementComponent = CounterIncrementComponent;
    exports.CounterResetComponent = CounterResetComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-counter.umd.js.map