import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { ArticleGridComponent } from './article-grid/article-grid';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ArticleGridComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('disinfo-me');
}
