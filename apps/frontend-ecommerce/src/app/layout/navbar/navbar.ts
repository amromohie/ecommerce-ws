import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [FaIconComponent, TranslatePipe, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
}
