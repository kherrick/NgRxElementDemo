import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
export declare class CounterResetComponent implements OnInit {
    private store;
    constructor(store: Store<{
        count: number;
    }>);
    ngOnInit(): void;
    reset(): void;
}
