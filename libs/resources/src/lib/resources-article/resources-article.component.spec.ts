import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesArticleComponent } from './resources-article.component';

describe('ResourcesArticleComponent', () => {
  let component: ResourcesArticleComponent;
  let fixture: ComponentFixture<ResourcesArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesArticleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
