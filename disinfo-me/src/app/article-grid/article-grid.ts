import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ArticleService, Article } from '../services/article';
import { LanguageService } from '../services/language';
import { CategoryFilterService, Category } from '../services/category-filter';

@Component({
  selector: 'app-article-grid',
  imports: [CommonModule],
  templateUrl: './article-grid.html',
  styleUrl: './article-grid.scss'
})
export class ArticleGridComponent {
  private articleService = inject(ArticleService);
  private languageService = inject(LanguageService);
  private categoryFilterService = inject(CategoryFilterService);
  private router = inject(Router);

  getFeaturedArticle(): Article {
    return this.articleService.getFeaturedArticle();
  }

  getSecondaryArticles(): Article[] {
    return this.articleService.getSecondaryArticles();
  }

  getSidebarArticles(): Article[] {
    return this.articleService.getSidebarArticles();
  }

  isPolish() {
    return this.languageService.isPolish();
  }

  getArticleTitle(article: Article): string {
    return this.isPolish() ? article.title : article.titleEn;
  }

  getArticleExcerpt(article: Article): string {
    return this.isPolish() ? article.excerpt : article.excerptEn;
  }

  getArticleCategory(article: Article): string {
    return this.isPolish() ? article.category : article.categoryEn;
  }

  getDisinformationWarning(article: Article): string {
    return this.isPolish() ? article.disinformationWarning : article.disinformationWarningEn;
  }

  getCategories(): string[] {
    return this.articleService.getCategories();
  }

  getArticlesByCategory(category: string): Article[] {
    return this.articleService.getArticlesByCategory(category);
  }

  getCategoryTitle(category: string): string {
    const categoryMap: { [key: string]: { pl: string; en: string } } = {
      'POLITYKA': { pl: 'POLITYKA', en: 'POLITICS' },
      'GOSPODARKA': { pl: 'GOSPODARKA', en: 'ECONOMY' },
      'SPOŁECZEŃSTWO': { pl: 'SPOŁECZEŃSTWO', en: 'SOCIETY' },
      'ŚWIAT': { pl: 'ŚWIAT', en: 'WORLD' },
      'KULTURA': { pl: 'KULTURA', en: 'CULTURE' },
      'SPORT': { pl: 'SPORT', en: 'SPORTS' },
      'OPINIE': { pl: 'OPINIE', en: 'OPINIONS' }
    };
    
    const categoryData = categoryMap[category];
    return categoryData ? (this.isPolish() ? categoryData.pl : categoryData.en) : category;
  }

  getCurrentCategory(): Category {
    return this.categoryFilterService.getCurrentCategory();
  }

  getFilteredArticles(): Article[] {
    const currentCategory = this.getCurrentCategory();
    if (currentCategory === 'ALL') {
      return this.articleService.getArticles();
    }
    return this.articleService.getArticlesByCategory(currentCategory);
  }

  getFilteredFeaturedArticle(): Article | null {
    const currentCategory = this.getCurrentCategory();
    if (currentCategory === 'ALL') {
      return this.articleService.getFeaturedArticle();
    }
    return this.articleService.getFeaturedArticleByCategory(currentCategory);
  }

  getFilteredSecondaryArticles(): Article[] {
    const currentCategory = this.getCurrentCategory();
    if (currentCategory === 'ALL') {
      // For main page, show a mix of articles from different categories
      return this.articleService.getSecondaryArticles();
    }
    return this.articleService.getSecondaryArticlesByCategory(currentCategory);
  }

  shouldShowCategorySections(): boolean {
    return this.getCurrentCategory() === 'ALL';
  }

  shouldShowFilteredArticles(): boolean {
    return this.getCurrentCategory() !== 'ALL';
  }

  goToArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }
}
