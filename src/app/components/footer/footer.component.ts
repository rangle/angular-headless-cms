import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type FooterLink = {
  label: string;
  url: string;
};
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() image?: string;
  @Input() imageAlt?: string;
  @Input() copyright?: string;
  @Input() socialLinks?: FooterLink[];
  @Input() privacyPolicy?: FooterLink;
}
