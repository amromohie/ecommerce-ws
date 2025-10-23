import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'preferred-language';
  private readonly DEFAULT_LANGUAGE = 'en';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLanguage();
    }
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) || this.DEFAULT_LANGUAGE;
    this.switchLanguage(savedLanguage as 'en' | 'ar');
  }

  switchLanguage(language: 'en' | 'ar'): void {
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(language);
      localStorage.setItem(this.LANGUAGE_KEY, language);
      this.updateDocumentLanguage(language);
    }
  }

  private updateDocumentLanguage(language: string): void {
    const htmlElement = this.document.documentElement;
    htmlElement.setAttribute('lang', language);
    htmlElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }

  getCurrentLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.translate.currentLang || localStorage.getItem(this.LANGUAGE_KEY) || this.DEFAULT_LANGUAGE;
    }
    return this.DEFAULT_LANGUAGE;
  }
}
