import { Action } from '@ngrx/store';
export declare enum ActionTypes {
    Increment = "[Counter Component] Increment",
    Decrement = "[Counter Component] Decrement",
    Reset = "[Counter Component] Reset"
}
export declare class Increment implements Action {
    readonly type = ActionTypes.Increment;
}
export declare class Decrement implements Action {
    readonly type = ActionTypes.Decrement;
}
export declare class Reset implements Action {
    readonly type = ActionTypes.Reset;
}
