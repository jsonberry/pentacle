import { async, TestBed } from '@angular/core/testing';
import { ResourcesModule } from './resources.module';

describe('ResourcesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ResourcesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ResourcesModule).toBeDefined();
  });
});
