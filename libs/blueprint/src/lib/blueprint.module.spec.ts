import { async, TestBed } from '@angular/core/testing';
import { BlueprintModule } from './blueprint.module';

describe('BlueprintModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BlueprintModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlueprintModule).toBeDefined();
  });
});
