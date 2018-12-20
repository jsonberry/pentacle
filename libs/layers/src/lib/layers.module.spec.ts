import { async, TestBed } from '@angular/core/testing';
import { LayersModule } from './layers.module';

describe('LayersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayersModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayersModule).toBeDefined();
  });
});
