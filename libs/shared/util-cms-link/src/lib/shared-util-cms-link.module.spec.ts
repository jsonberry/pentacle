import { async, TestBed } from '@angular/core/testing';
import { SharedUtilCmsLinkModule } from './shared-util-cms-link.module';

describe('SharedUtilCmsLinkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilCmsLinkModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilCmsLinkModule).toBeDefined();
  });
});
