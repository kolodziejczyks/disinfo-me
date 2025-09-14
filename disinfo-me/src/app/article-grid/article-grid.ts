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

  isEnglish() {
    return this.languageService.isEnglish();
  }

  isGerman() {
    return this.languageService.isGerman();
  }

  isUkrainian() {
    return this.languageService.isUkrainian();
  }

  isRussian() {
    return this.languageService.isRussian();
  }

  getArticleTitle(article: Article): string {
    if (this.isPolish()) return article.title;
    if (this.isEnglish()) return article.titleEn;
    if (this.isGerman()) return article.titleDe || article.titleEn;
    if (this.isUkrainian()) return article.titleUk || article.titleEn;
    if (this.isRussian()) return article.titleRu || article.titleEn;
    return article.titleEn;
  }

  getArticleExcerpt(article: Article): string {
    if (this.isPolish()) return article.excerpt;
    if (this.isEnglish()) return article.excerptEn;
    if (this.isGerman()) return article.excerptDe || article.excerptEn;
    if (this.isUkrainian()) return article.excerptUk || article.excerptEn;
    if (this.isRussian()) return article.excerptRu || article.excerptEn;
    return article.excerptEn;
  }

  getArticleCategory(article: Article): string {
    if (this.isPolish()) return article.category;
    if (this.isEnglish()) return article.categoryEn;
    if (this.isGerman()) return article.categoryDe || article.categoryEn;
    if (this.isUkrainian()) return article.categoryUk || article.categoryEn;
    if (this.isRussian()) return article.categoryRu || article.categoryEn;
    return article.categoryEn;
  }

  getDisinformationWarning(article: Article): string {
    if (this.isPolish()) return article.disinformationWarning;
    if (this.isEnglish()) return article.disinformationWarningEn;
    if (this.isGerman()) return article.disinformationWarningDe || article.disinformationWarningEn;
    if (this.isUkrainian()) return article.disinformationWarningUk || article.disinformationWarningEn;
    if (this.isRussian()) return article.disinformationWarningRu || article.disinformationWarningEn;
    return article.disinformationWarningEn;
  }

  getManipulationQuestion(article: Article): string {
    if (this.isPolish()) return article.manipulationQuestion || 'CZY ZNALAZŁEŚ MANIPULACJĘ?';
    if (this.isEnglish()) return article.manipulationQuestionEn || 'DID YOU FIND THE MANIPULATION?';
    if (this.isGerman()) return article.manipulationQuestionDe || 'HAST DU DIE MANIPULATION GEFUNDEN?';
    if (this.isUkrainian()) return article.manipulationQuestionUk || 'ЧИ ЗНАЙШЛИ ВИ МАНІПУЛЯЦІЮ?';
    if (this.isRussian()) return article.manipulationQuestionRu || 'НАШЛИ ЛИ ВЫ МАНИПУЛЯЦИЮ?';
    return article.manipulationQuestionEn || 'DID YOU FIND THE MANIPULATION?';
  }

  getSourceInfo(article: Article): string {
    if (article.sourceName && article.originalTitle) {
      if (this.isPolish()) return `Źródło: ${article.sourceName} | Oryginalny tytuł: ${article.originalTitle}`;
      if (this.isEnglish()) return `Source: ${article.sourceName} | Original title: ${article.originalTitle}`;
      if (this.isGerman()) return `Quelle: ${article.sourceName} | Originaltitel: ${article.originalTitle}`;
      if (this.isUkrainian()) return `Джерело: ${article.sourceName} | Оригінальна назва: ${article.originalTitle}`;
      if (this.isRussian()) return `Источник: ${article.sourceName} | Оригинальное название: ${article.originalTitle}`;
      return `Source: ${article.sourceName} | Original title: ${article.originalTitle}`;
    }
    return '';
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

  getReadTimeText(): string {
    if (this.isPolish()) return 'czytania';
    if (this.isEnglish()) return 'read';
    if (this.isGerman()) return 'Lesen';
    if (this.isUkrainian()) return 'читання';
    if (this.isRussian()) return 'чтения';
    return 'read';
  }

  getLatestText(): string {
    if (this.isPolish()) return 'NAJNOWSZE';
    if (this.isEnglish()) return 'LATEST';
    if (this.isGerman()) return 'NEUESTE';
    if (this.isUkrainian()) return 'ОСТАННІ';
    if (this.isRussian()) return 'ПОСЛЕДНИЕ';
    return 'LATEST';
  }

  getMostReadText(): string {
    if (this.isPolish()) return 'NAJCZYTANE';
    if (this.isEnglish()) return 'MOST READ';
    if (this.isGerman()) return 'MEIST GELESEN';
    if (this.isUkrainian()) return 'НАЙЧИТАНІШІ';
    if (this.isRussian()) return 'САМЫЕ ЧИТАЕМЫЕ';
    return 'MOST READ';
  }
}
