import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class NavigationComponent {
  @Input() menu: MenuItem[];

  constructor() {}
}
