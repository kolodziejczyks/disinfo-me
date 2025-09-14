import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="not-found">
      <div class="container">
        <h1>404</h1>
        <h2>{{ 'notFound.title' | translate }}</h2>
        <p>{{ 'notFound.message' | translate }}</p>
        <button (click)="goHome()" class="btn-home">
          {{ 'notFound.backHome' | translate }}
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
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
