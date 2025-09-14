import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, Article } from '../services/article';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, TranslateModule],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articleService = inject(ArticleService);
  private languageService = inject(LanguageService);

  article: Article | null = null;
  relatedArticles: Article[] = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const articleId = +params['id'];
      this.article = this.articleService.getArticleById(articleId);
      if (this.article) {
        this.relatedArticles = this.articleService.getRelatedArticles(this.article.category, articleId);
      }
    });
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

  goBack() {
    this.router.navigate(['/']);
  }

  goToArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }

  getExtendedContent(article: Article): string {
    return article.extendedContent || article.excerpt;
  }

  getExtendedContentEn(article: Article): string {
    return article.extendedContentEn || article.excerptEn;
  }

  getDisinformationExplanation(article: Article): string {
    return article.disinformationExplanation || 'To jest dezinformacja, która nie ma żadnych podstaw naukowych ani faktów.';
  }

  getDisinformationExplanationEn(article: Article): string {
    return article.disinformationExplanationEn || 'This is disinformation that has no scientific basis or facts.';
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

}
