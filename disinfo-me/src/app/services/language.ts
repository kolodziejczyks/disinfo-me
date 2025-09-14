import { Injectable, signal } from '@angular/core';

export type Language = 'pl' | 'en';

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
}
