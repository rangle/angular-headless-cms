import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './featured-item.component.html',
})
export class FeaturedItemComponent {
  @Input() body: string;
  @Input() heading: string = '';

  constructor() {}
}
