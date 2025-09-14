import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from '../../public/i18n/en.json';
import translationsDE from '../../public/i18n/de.json';
import translationsPL from '../../public/i18n/pl.json';
import translationsUK from '../../public/i18n/uk.json';
import translationsRU from '../../public/i18n/ru.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('disinfo-me');


  private translate = inject(TranslateService);

  constructor() {
      this.translate.addLangs(['de', 'en', 'pl', 'uk', 'ru']);

      this.translate.setTranslation('en', translationsEN);
      this.translate.setTranslation('de', translationsDE);
      this.translate.setTranslation('pl', translationsPL);
      this.translate.setTranslation('uk', translationsUK);
      this.translate.setTranslation('ru', translationsRU);

      this.translate.setFallbackLang('en');
      this.translate.use('pl');
  }
}
