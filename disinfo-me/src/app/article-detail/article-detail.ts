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

  getManipulationQuestion(article: Article): string {
    if (this.isPolish()) return article.manipulationQuestion || 'CZY ZNALAZŁEŚ MANIPULACJĘ?';
    if (this.isEnglish()) return article.manipulationQuestionEn || 'DID YOU FIND THE MANIPULATION?';
    if (this.isGerman()) return article.manipulationQuestionDe || 'HAST DU DIE MANIPULATION GEFUNDEN?';
    if (this.isUkrainian()) return article.manipulationQuestionUk || 'ЧИ ЗНАЙШЛИ ВИ МАНІПУЛЯЦІЮ?';
    if (this.isRussian()) return article.manipulationQuestionRu || 'НАШЛИ ЛИ ВЫ МАНИПУЛЯЦИЮ?';
    return article.manipulationQuestionEn || 'DID YOU FIND THE MANIPULATION?';
  }

  getManipulationAnswer(article: Article): string {
    if (this.isPolish()) return article.manipulationAnswer || 'Sprawdź szczegóły w artykule.';
    if (this.isEnglish()) return article.manipulationAnswerEn || 'Check the details in the article.';
    if (this.isGerman()) return article.manipulationAnswerDe || 'Überprüfen Sie die Details im Artikel.';
    if (this.isUkrainian()) return article.manipulationAnswerUk || 'Перевірте деталі в статті.';
    if (this.isRussian()) return article.manipulationAnswerRu || 'Проверьте детали в статье.';
    return article.manipulationAnswerEn || 'Check the details in the article.';
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

  getBackText(): string {
    if (this.isPolish()) return 'Powrót do strony głównej';
    if (this.isEnglish()) return 'Back to main page';
    if (this.isGerman()) return 'Zurück zur Hauptseite';
    if (this.isUkrainian()) return 'Повернутися на головну сторінку';
    if (this.isRussian()) return 'Вернуться на главную страницу';
    return 'Back to main page';
  }

  getDetailsText(): string {
    if (this.isPolish()) return 'Szczegóły';
    if (this.isEnglish()) return 'Details';
    if (this.isGerman()) return 'Details';
    if (this.isUkrainian()) return 'Деталі';
    if (this.isRussian()) return 'Детали';
    return 'Details';
  }

  getWhyDisinformationText(): string {
    if (this.isPolish()) return 'Dlaczego to dezinformacja?';
    if (this.isEnglish()) return 'Why is this disinformation?';
    if (this.isGerman()) return 'Warum ist das Desinformation?';
    if (this.isUkrainian()) return 'Чому це дезінформація?';
    if (this.isRussian()) return 'Почему это дезинформация?';
    return 'Why is this disinformation?';
  }

  getHowToVerifyText(): string {
    if (this.isPolish()) return 'Jak weryfikować informacje?';
    if (this.isEnglish()) return 'How to verify information?';
    if (this.isGerman()) return 'Wie überprüft man Informationen?';
    if (this.isUkrainian()) return 'Як перевіряти інформацію?';
    if (this.isRussian()) return 'Как проверять информацию?';
    return 'How to verify information?';
  }

  getRelatedArticlesText(): string {
    if (this.isPolish()) return 'Powiązane artykuły';
    if (this.isEnglish()) return 'Related articles';
    if (this.isGerman()) return 'Verwandte Artikel';
    if (this.isUkrainian()) return 'Пов\'язані статті';
    if (this.isRussian()) return 'Похожие статьи';
    return 'Related articles';
  }

  getArticleNotFoundText(): string {
    if (this.isPolish()) return 'Artykuł nie został znaleziony';
    if (this.isEnglish()) return 'Article not found';
    if (this.isGerman()) return 'Artikel nicht gefunden';
    if (this.isUkrainian()) return 'Статтю не знайдено';
    if (this.isRussian()) return 'Статья не найдена';
    return 'Article not found';
  }

  getArticleNotFoundDescription(): string {
    if (this.isPolish()) return 'Przepraszamy, ale artykuł o podanym ID nie istnieje.';
    if (this.isEnglish()) return 'Sorry, but the article with the given ID does not exist.';
    if (this.isGerman()) return 'Entschuldigung, aber der Artikel mit der angegebenen ID existiert nicht.';
    if (this.isUkrainian()) return 'Вибачте, але стаття з вказаним ID не існує.';
    if (this.isRussian()) return 'Извините, но статья с указанным ID не существует.';
    return 'Sorry, but the article with the given ID does not exist.';
  }
}
