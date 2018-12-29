import { TestBed } from '@angular/core/testing';

import { ToastFacade } from './toast.facade';

describe('ToastFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastFacade = TestBed.get(ToastFacade);
    expect(service).toBeTruthy();
  });
});
