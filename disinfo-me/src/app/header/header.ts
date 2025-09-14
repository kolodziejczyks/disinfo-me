import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService, Language } from '../services/language';
import { CategoryFilterService, Category } from '../services/category-filter';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule],
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
