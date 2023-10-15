import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterIncrementComponent } from './counter-increment.component';

describe('CounterIncrementComponent', () => {
  let component: CounterIncrementComponent;
  let fixture: ComponentFixture<CounterIncrementComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterIncrementComponent],
      providers: [provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CounterIncrementComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
