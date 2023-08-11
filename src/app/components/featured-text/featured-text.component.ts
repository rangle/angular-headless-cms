import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';

@Component({
  selector: 'app-featured-text',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './featured-text.component.html',
})
export class FeaturedTextComponent implements DynamicComponent {
  body?: string;
  heading: string = '';
  isDark: boolean = false;

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
      body: data['body'],
      isDark: data['isDark'],
    };
  }
}
