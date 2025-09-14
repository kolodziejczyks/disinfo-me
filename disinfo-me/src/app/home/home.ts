import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { ArticleGridComponent } from '../article-grid/article-grid';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ArticleGridComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="main-content">
      <app-article-grid></app-article-grid>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 200px);
    }
  `]
})
export class HomeComponent {}
