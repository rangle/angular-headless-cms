import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';

@Component({
  selector: 'app-quote',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './quote.component.html',
})
export class QuoteComponent implements DynamicComponent {
  body?: string;
  hasDarkBackground: boolean = false;
  hasIcon: boolean = false;
  author?: string;

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      body: data['body'],
      hasDarkBackground: data['hasDarkBackground'],
      hasIcon: data['hasIcon'],
      author: data['author'],
    };
  }
}
