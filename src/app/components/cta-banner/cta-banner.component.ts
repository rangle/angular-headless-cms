import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-cta-banner',
  imports: [CommonModule, CtaComponent],
  standalone: true,
  templateUrl: './cta-banner.component.html',
})
export class CtaBannerComponent implements DynamicComponent {
  cta?: any;
  heading: string = '';
  imageAlt: string = '';
  image: any;

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
      cta: data['cta'],
      image: data['image'],
      imageAlt: data['imageAlt'],
    };
  }
}
