import { async, TestBed } from '@angular/core/testing';
import { IntroductionModule } from './introduction.module';

describe('IntroductionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IntroductionModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(IntroductionModule).toBeDefined();
  });
});
