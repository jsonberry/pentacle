import { TestBed } from '@angular/core/testing';

import { PagesLoadingProgressInterceptorService } from './pages-loading-progress-interceptor.service';

describe('PagesLoadingProgressInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesLoadingProgressInterceptorService = TestBed.get(
      PagesLoadingProgressInterceptorService,
    );
    expect(service).toBeTruthy();
  });
});
