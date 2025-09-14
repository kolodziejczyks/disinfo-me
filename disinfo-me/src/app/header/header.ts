import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../services/language';
import { CategoryFilterService, Category } from '../services/category-filter';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private languageService = inject(LanguageService);
  private categoryFilterService = inject(CategoryFilterService);

  currentDate = signal(new Date().toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  switchLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
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

  getLanguageName(lang: Language): string {
    return this.languageService.getLanguageName(lang);
  }

  getCategoryDisplayName(category: Category): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return this.categoryFilterService.getCategoryDisplayName(category, currentLang);
  }

  getSubscribeText(): string {
    if (this.isPolish()) return 'Prenumerata';
    if (this.isEnglish()) return 'Subscribe';
    if (this.isGerman()) return 'Abonnieren';
    if (this.isUkrainian()) return 'Підписатися';
    if (this.isRussian()) return 'Подписаться';
    return 'Subscribe';
  }

  getLoginText(): string {
    if (this.isPolish()) return 'Zaloguj się';
    if (this.isEnglish()) return 'Login';
    if (this.isGerman()) return 'Anmelden';
    if (this.isUkrainian()) return 'Увійти';
    if (this.isRussian()) return 'Войти';
    return 'Login';
  }

  getTaglineText(): string {
    if (this.isPolish()) return 'Edukacyjny projekt o dezinformacji';
    if (this.isEnglish()) return 'Educational project about disinformation';
    if (this.isGerman()) return 'Bildungsprojekt über Desinformation';
    if (this.isUkrainian()) return 'Освітній проект про дезінформацію';
    if (this.isRussian()) return 'Образовательный проект о дезинформации';
    return 'Educational project about disinformation';
  }

  getSearchPlaceholder(): string {
    if (this.isPolish()) return 'Szukaj...';
    if (this.isEnglish()) return 'Search...';
    if (this.isGerman()) return 'Suchen...';
    if (this.isUkrainian()) return 'Пошук...';
    if (this.isRussian()) return 'Поиск...';
    return 'Search...';
  }

  getBreakingNewsText(): string {
    if (this.isPolish()) return 'NAJNOWSZE:';
    if (this.isEnglish()) return 'LATEST:';
    if (this.isGerman()) return 'NEUESTE:';
    if (this.isUkrainian()) return 'ОСТАННІ:';
    if (this.isRussian()) return 'ПОСЛЕДНИЕ:';
    return 'LATEST:';
  }

  getBreakingNewsContent(): string {
    if (this.isPolish()) return 'Eksperci ostrzegają przed rosnącą falą dezinformacji w mediach społecznościowych';
    if (this.isEnglish()) return 'Experts warn about growing wave of disinformation on social media';
    if (this.isGerman()) return 'Experten warnen vor wachsender Welle von Desinformation in sozialen Medien';
    if (this.isUkrainian()) return 'Експерти попереджають про зростаючу хвилю дезінформації в соціальних мережах';
    if (this.isRussian()) return 'Эксперты предупреждают о растущей волне дезинформации в социальных сетях';
    return 'Experts warn about growing wave of disinformation on social media';
  }

  isCategoryActive(category: Category): boolean {
    return this.categoryFilterService.isCategoryActive(category);
  }

  selectCategory(category: Category) {
    this.categoryFilterService.setCategory(category);
    this.scrollToCategory(category);
  }

  private scrollToCategory(category: Category) {
    if (category === 'ALL') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to the top of the page when a specific category is selected
      // The filtered articles will be shown at the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
