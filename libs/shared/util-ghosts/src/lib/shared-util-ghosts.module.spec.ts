import { async, TestBed } from '@angular/core/testing';
import { SharedUtilGhostsModule } from './shared-util-ghosts.module';

describe('SharedUtilGhostsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilGhostsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilGhostsModule).toBeDefined();
  });
});
