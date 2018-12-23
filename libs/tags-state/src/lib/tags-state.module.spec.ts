import { async, TestBed } from '@angular/core/testing';
import { TagsStateModule } from './tags-state.module';

describe('TagsStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagsStateModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagsStateModule).toBeDefined();
  });
});
