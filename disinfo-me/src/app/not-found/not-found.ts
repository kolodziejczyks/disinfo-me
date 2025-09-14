import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found">
      <div class="container">
        <h1>404</h1>
        <h2>{{ getNotFoundTitle() }}</h2>
        <p>{{ getNotFoundMessage() }}</p>
        <button (click)="goHome()" class="btn-home">
          {{ getHomeButtonText() }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
    }

    .container {
      text-align: center;
      max-width: 600px;
      padding: 2rem;
    }

    h1 {
      font-size: 6rem;
      font-weight: bold;
      color: #d32f2f;
      margin: 0;
      font-family: 'Georgia', serif;
    }

    h2 {
      font-size: 2rem;
      color: #333;
      margin: 1rem 0;
      font-family: 'Georgia', serif;
    }

    p {
      font-size: 1.1rem;
      color: #666;
      margin: 1rem 0 2rem 0;
      line-height: 1.6;
    }

    .btn-home {
      background: #d32f2f;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .btn-home:hover {
      background: #b71c1c;
    }
  `]
})
export class NotFoundComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

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

  getNotFoundTitle(): string {
    if (this.isPolish()) return 'Strona nie znaleziona';
    if (this.isEnglish()) return 'Page Not Found';
    if (this.isGerman()) return 'Seite nicht gefunden';
    if (this.isUkrainian()) return 'Сторінку не знайдено';
    if (this.isRussian()) return 'Страница не найдена';
    return 'Page Not Found';
  }

  getNotFoundMessage(): string {
    if (this.isPolish()) return 'Przepraszamy, ale strona, której szukasz, nie istnieje.';
    if (this.isEnglish()) return 'Sorry, but the page you are looking for does not exist.';
    if (this.isGerman()) return 'Entschuldigung, aber die Seite, nach der Sie suchen, existiert nicht.';
    if (this.isUkrainian()) return 'Вибачте, але сторінка, яку ви шукаєте, не існує.';
    if (this.isRussian()) return 'Извините, но страница, которую вы ищете, не существует.';
    return 'Sorry, but the page you are looking for does not exist.';
  }

  getHomeButtonText(): string {
    if (this.isPolish()) return 'Powrót do strony głównej';
    if (this.isEnglish()) return 'Back to Home';
    if (this.isGerman()) return 'Zurück zur Startseite';
    if (this.isUkrainian()) return 'Повернутися на головну';
    if (this.isRussian()) return 'Вернуться на главную';
    return 'Back to Home';
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
