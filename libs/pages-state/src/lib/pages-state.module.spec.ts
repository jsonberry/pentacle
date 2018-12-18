import { async, TestBed } from '@angular/core/testing';
import { PagesStateModule } from './pages-state.module';

describe('PagesStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PagesStateModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PagesStateModule).toBeDefined();
  });
});
