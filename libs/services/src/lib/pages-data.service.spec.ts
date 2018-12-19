import { TestBed } from '@angular/core/testing';
import { PagesDataService } from './pages-data.service';

describe('PagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesDataService = TestBed.get(PagesDataService);
    expect(service).toBeTruthy();
  });
});
