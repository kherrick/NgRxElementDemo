import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterDecrementComponent } from './counter-decrement.component';

describe('CounterDecrementComponent', () => {
  let component: CounterDecrementComponent;
  let fixture: ComponentFixture<CounterDecrementComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterDecrementComponent],
      providers: [provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CounterDecrementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
