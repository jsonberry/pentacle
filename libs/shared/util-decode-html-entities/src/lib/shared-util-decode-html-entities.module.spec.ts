import { async, TestBed } from '@angular/core/testing';
import { SharedUtilDecodeHtmlEntitiesModule } from './shared-util-decode-html-entities.module';

describe('SharedUtilDecodeHtmlEntitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilDecodeHtmlEntitiesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilDecodeHtmlEntitiesModule).toBeDefined();
  });
});
