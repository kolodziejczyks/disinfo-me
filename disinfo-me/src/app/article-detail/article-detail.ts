import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService, Article } from '../services/article';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule],
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

  goBack() {
    this.router.navigate(['/']);
  }

  goToArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }
}
