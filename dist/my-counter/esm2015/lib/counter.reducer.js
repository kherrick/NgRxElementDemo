/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActionTypes } from './counter.actions';
/** @type {?} */
export const initialState = 0;
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function counterReducer(state = initialState, action) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktY291bnRlci8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGVyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFaEQsTUFBTSxPQUFPLFlBQVksR0FBRyxDQUFDOzs7Ozs7QUFFN0IsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQWM7SUFDakUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLFNBQVM7WUFDeEIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUssV0FBVyxDQUFDLFNBQVM7WUFDeEIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUssV0FBVyxDQUFDLEtBQUs7WUFDcEIsT0FBTyxDQUFDLENBQUM7UUFFWDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jb3VudGVyLmFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlcy5JbmNyZW1lbnQ6XG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5EZWNyZW1lbnQ6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5SZXNldDpcbiAgICAgIHJldHVybiAwO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19