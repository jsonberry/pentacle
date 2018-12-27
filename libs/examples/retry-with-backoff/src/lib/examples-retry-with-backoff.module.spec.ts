import { async, TestBed } from '@angular/core/testing';
import { ExamplesRetryWithBackoffModule } from './examples-retry-with-backoff.module';

describe('ExamplesRetryWithBackoffModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesRetryWithBackoffModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExamplesRetryWithBackoffModule).toBeDefined();
  });
});
