import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../types/build-component.types';

type MenuItem = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements DynamicComponent {
  menu: MenuItem[];

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      menu: data['menu'],
    };
  }
}
