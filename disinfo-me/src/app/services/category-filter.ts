import { Injectable, signal } from '@angular/core';

export type Category = 'POLITYKA' | 'GOSPODARKA' | 'SPOŁECZEŃSTWO' | 'ŚWIAT' | 'KULTURA' | 'SPORT' | 'OPINIE' | 'ALL';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {
  private currentCategory = signal<Category>('ALL');

  getCurrentCategory() {
    return this.currentCategory();
  }

  setCategory(category: Category) {
    this.currentCategory.set(category);
  }

  isCategoryActive(category: Category): boolean {
    return this.currentCategory() === category;
  }

  isAllCategories(): boolean {
    return this.currentCategory() === 'ALL';
  }

  getCategoryDisplayName(category: Category, currentLanguage: string): string {
    const categoryMap: { [key in Category]: { pl: string; en: string; de: string; uk: string; ru: string } } = {
      'ALL': { pl: 'Wszystkie', en: 'All', de: 'Alle', uk: 'Всі', ru: 'Все' },
      'POLITYKA': { pl: 'Polityka', en: 'Politics', de: 'Politik', uk: 'Політика', ru: 'Политика' },
      'GOSPODARKA': { pl: 'Gospodarka', en: 'Economy', de: 'Wirtschaft', uk: 'Економіка', ru: 'Экономика' },
      'SPOŁECZEŃSTWO': { pl: 'Społeczeństwo', en: 'Society', de: 'Gesellschaft', uk: 'Суспільство', ru: 'Общество' },
      'ŚWIAT': { pl: 'Świat', en: 'World', de: 'Welt', uk: 'Світ', ru: 'Мир' },
      'KULTURA': { pl: 'Kultura', en: 'Culture', de: 'Kultur', uk: 'Культура', ru: 'Культура' },
      'SPORT': { pl: 'Sport', en: 'Sports', de: 'Sport', uk: 'Спорт', ru: 'Спорт' },
      'OPINIE': { pl: 'Opinie', en: 'Opinions', de: 'Meinungen', uk: 'Думки', ru: 'Мнения' }
    };
    
    switch (currentLanguage) {
      case 'pl': return categoryMap[category].pl;
      case 'en': return categoryMap[category].en;
      case 'de': return categoryMap[category].de;
      case 'uk': return categoryMap[category].uk;
      case 'ru': return categoryMap[category].ru;
      default: return categoryMap[category].en;
    }
  }
}
