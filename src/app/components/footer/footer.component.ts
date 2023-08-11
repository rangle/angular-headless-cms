import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';

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
export class FooterComponent implements DynamicComponent {
  copyright?: string;
  socialLinks?: FooterLink[];
  privacyPolicy?: FooterLink;

  componentDataResolver(data: ComponentData) {
    return {
      copyright: data['copyright'],
      socialLinks: data['socialLinks'],
      privacyPolicy: data['privacyPolicy'],
    };
  }
}
