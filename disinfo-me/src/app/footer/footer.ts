import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  private languageService = inject(LanguageService);

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

  getDescriptionText(): string {
    if (this.isPolish()) return 'Edukacyjny projekt o dezinformacji i fake newsach. Uczymy krytycznego myślenia i weryfikacji informacji.';
    if (this.isEnglish()) return 'Educational project about disinformation and fake news. We teach critical thinking and information verification.';
    if (this.isGerman()) return 'Bildungsprojekt über Desinformation und Fake News. Wir lehren kritisches Denken und Informationsverifikation.';
    if (this.isUkrainian()) return 'Освітній проект про дезінформацію та фейкові новини. Вчимо критичного мислення та перевірки інформації.';
    if (this.isRussian()) return 'Образовательный проект о дезинформации и фейковых новостях. Учим критическому мышлению и проверке информации.';
    return 'Educational project about disinformation and fake news. We teach critical thinking and information verification.';
  }
}
