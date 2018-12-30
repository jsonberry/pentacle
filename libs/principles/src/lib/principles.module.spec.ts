import { async, TestBed } from '@angular/core/testing';
import { PrinciplesModule } from './principles.module';

describe('PrinciplesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrinciplesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PrinciplesModule).toBeDefined();
  });
});
