import { async, TestBed } from '@angular/core/testing';
import { ExamplesRootModule } from './examples-root.module';

describe('ExamplesRootModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesRootModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExamplesRootModule).toBeDefined();
  });
});
