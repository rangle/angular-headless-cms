import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-media-module',
  imports: [CommonModule, CtaComponent],
  standalone: true,
  templateUrl: './media-module.component.html',
})
export class MediaModuleComponent implements DynamicComponent {
  body?: string;
  cta?: any;
  heading: string = '';
  imageAlt: string = '';
  imageOnRight: boolean = false;
  image: any;
  isDark: boolean = false;

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
      body: data['body'],
      cta: data['cta'],
      image: data['image'],
      imageAlt: data['imageAlt'],
      isDark: data['isDark'],
      imageOnRight: data['imageOnRight'],
    };
  }
}
