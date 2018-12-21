import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDetailComponent } from './resources-detail.component';

describe('ResourcesDetailComponent', () => {
  let component: ResourcesDetailComponent;
  let fixture: ComponentFixture<ResourcesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
