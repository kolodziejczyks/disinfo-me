import { Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.HomeComponent) },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: '**', redirectTo: '/home' }
];
