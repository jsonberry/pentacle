import { TestBed } from '@angular/core/testing';

import { ToastFacade } from './toast.facade';
import { StoreModule } from '@ngrx/store';

describe('ToastFacade', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}, {})],
    }));

  it('should be created', () => {
    const service: ToastFacade = TestBed.get(ToastFacade);
    expect(service).toBeTruthy();
  });
});
