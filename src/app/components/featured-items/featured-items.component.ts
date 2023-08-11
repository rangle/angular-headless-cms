import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';
import { FeaturedItemComponent } from '../featured-item/featured-item.component';

type Blocks = {
  heading: string;
  body: string;
};

@Component({
  selector: 'app-featured-items',
  imports: [CommonModule, FeaturedItemComponent],
  standalone: true,
  templateUrl: './featured-items.component.html',
})
export class FeaturedItemsComponent implements DynamicComponent {
  heading: string = '';
  blocks: Blocks[];

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      heading: data['heading'],
      blocks: data['blocks'],
    };
  }
}
