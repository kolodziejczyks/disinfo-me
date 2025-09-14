import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.HomeComponent) },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFoundComponent) }
];
