import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterResetComponent } from './counter-reset.component';

describe('CounterResetComponent', () => {
  let component: CounterResetComponent;
  let fixture: ComponentFixture<CounterResetComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterResetComponent],
      providers: [provideMockStore({})],
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CounterResetComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
