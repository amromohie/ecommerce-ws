import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { ThemeService } from './services/theme.service';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';

@Component({
  imports: [RouterModule, CommonModule, Footer, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'frontend-ecommerce';
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getCurrentTheme(): string {
    return this.themeService.getCurrentTheme();
  }
}
