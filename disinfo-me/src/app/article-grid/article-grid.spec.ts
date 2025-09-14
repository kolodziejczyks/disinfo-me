import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGrid } from './article-grid';

describe('ArticleGrid', () => {
  let component: ArticleGrid;
  let fixture: ComponentFixture<ArticleGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
