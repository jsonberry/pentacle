import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWithBackoffComponent } from './retry-with-backoff.component';

describe('RetryWithBackoffComponent', () => {
  let component: RetryWithBackoffComponent;
  let fixture: ComponentFixture<RetryWithBackoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RetryWithBackoffComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryWithBackoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
