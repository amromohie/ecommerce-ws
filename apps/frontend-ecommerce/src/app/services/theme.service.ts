import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'preferred-theme';
  private readonly DEFAULT_THEME = 'light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
    }
  }

  private initializeTheme(): void {
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem(this.THEME_KEY) || this.DEFAULT_THEME;
    this.applyTheme(savedTheme);
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentTheme = this.getCurrentTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }
  }

  setTheme(theme: 'light' | 'dark'): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: string): void {
    const htmlElement = this.document.documentElement;
    htmlElement.setAttribute('data-theme', theme);
  }

  getCurrentTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.THEME_KEY) || this.DEFAULT_THEME;
    }
    return this.DEFAULT_THEME;
  }

  isDarkMode(): boolean {
    return this.getCurrentTheme() === 'dark';
  }
}
