// import { CtaComponent } from '../cta/cta.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';

@Component({
  selector: 'app-main-hero',
  imports: [CommonModule],
  standalone: true,
  // templateUrl: './main-hero.component.html',
  template: `<p>hello</p>`,
})
export class MainHeroComponent implements DynamicComponent {
  // backgroundImage?: string;
  // eyebrow?: string;
  heading: string = '';
  // body?: string;
  // heroImage: string = '';
  // heroImageAlt: string = '';
  // cta?: any; // Adjust the type as per your needs

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
    };
  }
}
