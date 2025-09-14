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

  getCategoryDisplayName(category: Category, isPolish: boolean): string {
    const categoryMap: { [key in Category]: { pl: string; en: string } } = {
      'ALL': { pl: 'Wszystkie', en: 'All' },
      'POLITYKA': { pl: 'Polityka', en: 'Politics' },
      'GOSPODARKA': { pl: 'Gospodarka', en: 'Economy' },
      'SPOŁECZEŃSTWO': { pl: 'Społeczeństwo', en: 'Society' },
      'ŚWIAT': { pl: 'Świat', en: 'World' },
      'KULTURA': { pl: 'Kultura', en: 'Culture' },
      'SPORT': { pl: 'Sport', en: 'Sports' },
      'OPINIE': { pl: 'Opinie', en: 'Opinions' }
    };
    
    return isPolish ? categoryMap[category].pl : categoryMap[category].en;
  }
}
