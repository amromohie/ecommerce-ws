import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  switchLanguage(language: 'en' | 'ar'): void {
    this.languageService.switchLanguage(language);
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  getCurrentTheme(): string {
    return this.themeService.getCurrentTheme();
  }
}
