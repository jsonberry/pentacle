import { async, TestBed } from '@angular/core/testing';
import { ExpertiseModule } from './expertise.module';

describe('ExpertiseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExpertiseModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExpertiseModule).toBeDefined();
  });
});
