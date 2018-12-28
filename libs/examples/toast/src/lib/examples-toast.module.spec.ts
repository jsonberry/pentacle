import { async, TestBed } from '@angular/core/testing';
import { ExamplesToastModule } from './examples-toast.module';

describe('ExamplesToastModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesToastModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExamplesToastModule).toBeDefined();
  });
});
