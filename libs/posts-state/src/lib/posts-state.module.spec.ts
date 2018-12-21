import { async, TestBed } from '@angular/core/testing';
import { PostsStateModule } from './posts-state.module';

describe('PostsStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PostsStateModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PostsStateModule).toBeDefined();
  });
});
