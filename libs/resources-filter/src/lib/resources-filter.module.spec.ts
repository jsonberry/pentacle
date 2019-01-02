import { async, TestBed } from '@angular/core/testing';
import { ResourcesFilterModule } from './resources-filter.module';

describe('ResourcesFilterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ResourcesFilterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ResourcesFilterModule).toBeDefined();
  });
});
