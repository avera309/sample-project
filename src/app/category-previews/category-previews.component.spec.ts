import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPreviewsComponent } from './category-previews.component';

describe('CategoryPreviewsComponent', () => {
  let component: CategoryPreviewsComponent;
  let fixture: ComponentFixture<CategoryPreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
