import { async, TestBed } from '@angular/core/testing';
import { PagesLoadingProgressModule } from './pages-loading-progress.module';

describe('PagesLoadingProgressModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesLoadingProgressModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesLoadingProgressModule).toBeDefined();
  });
});
