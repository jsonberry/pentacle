import { TestBed } from '@angular/core/testing';

import { HomeFacade } from './home-facade.service';

describe('HomeFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeFacade = TestBed.get(HomeFacade);
    expect(service).toBeTruthy();
  });
});
