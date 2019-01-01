import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLoadingProgressComponent } from './pages-loading-progress.component';

describe('PagesLoadingProgressComponent', () => {
  let component: PagesLoadingProgressComponent;
  let fixture: ComponentFixture<PagesLoadingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagesLoadingProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesLoadingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
