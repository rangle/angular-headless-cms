// import { CtaComponent } from '../cta/cta.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-main-hero',
  imports: [CommonModule, CtaComponent],
  standalone: true,
  templateUrl: './main-hero.component.html',
})
export class MainHeroComponent implements DynamicComponent {
  // backgroundImage?: string;
  eyebrow?: string;
  heading: string = '';
  body?: string;
  heroImage: string = '';
  heroImageAlt: string = '';
  cta?: any; // Adjust the type as per your needs

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
      body: data['body'],
      eyebrow: data['eyebrow'],
      cta: data['cta'],
      heroImage: data['heroImage'],
      heroImageAlt: data['heroImageAlt'],
    };
  }
}
