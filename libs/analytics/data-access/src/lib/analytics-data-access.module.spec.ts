import { async, TestBed } from '@angular/core/testing';
import { AnalyticsDataAccessModule } from './analytics-data-access.module';

describe('AnalyticsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnalyticsDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnalyticsDataAccessModule).toBeDefined();
  });
});
