import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesFilterContainerComponent } from './resources-filter-container.component';

describe('ResourcesFilterContainerComponent', () => {
  let component: ResourcesFilterContainerComponent;
  let fixture: ComponentFixture<ResourcesFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesFilterContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
