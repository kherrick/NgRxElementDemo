import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
export declare class CounterComponent implements OnInit {
    private store;
    count$: Observable<number>;
    constructor(store: Store<{
        count: number;
    }>);
    ngOnInit(): void;
}
