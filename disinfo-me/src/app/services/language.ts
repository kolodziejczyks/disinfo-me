import { Injectable, signal } from '@angular/core';

export type Language = 'pl' | 'en' | 'de' | 'uk' | 'ru';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('pl');

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }

  isPolish() {
    return this.currentLanguage() === 'pl';
  }

  isEnglish() {
    return this.currentLanguage() === 'en';
  }

  isGerman() {
    return this.currentLanguage() === 'de';
  }

  isUkrainian() {
    return this.currentLanguage() === 'uk';
  }

  isRussian() {
    return this.currentLanguage() === 'ru';
  }

  getLanguageName(lang: Language): string {
    const languageNames: { [key in Language]: string } = {
      'pl': 'Polski',
      'en': 'English',
      'de': 'Deutsch',
      'uk': 'Українська',
      'ru': 'Русский'
    };
    return languageNames[lang];
  }
}
