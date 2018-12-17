import { async, TestBed } from '@angular/core/testing';
import { RouterStateModule } from './router-state.module';

describe('RouterStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterStateModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RouterStateModule).toBeDefined();
  });
});
