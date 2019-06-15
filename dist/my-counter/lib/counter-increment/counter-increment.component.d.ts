import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
export declare class CounterIncrementComponent implements OnInit {
    private store;
    constructor(store: Store<{
        count: number;
    }>);
    ngOnInit(): void;
    increment(): void;
}
