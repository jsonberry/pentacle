import { async, TestBed } from '@angular/core/testing';
import { ModulesModule } from './modules.module';

describe('ModulesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModulesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ModulesModule).toBeDefined();
  });
});
