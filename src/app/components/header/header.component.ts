import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  header = false;

  @HostListener('document:scroll', [])
  onWindowScroll() {
    window.scrollY > 50 ? (this.header = true) : (this.header = false);
  }
}
