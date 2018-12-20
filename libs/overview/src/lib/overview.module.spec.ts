import { async, TestBed } from '@angular/core/testing';
import { OverviewModule } from './overview.module';

describe('OverviewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OverviewModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OverviewModule).toBeDefined();
  });
});
