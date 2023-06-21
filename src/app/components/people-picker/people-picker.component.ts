import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-picker.component.html',
})
export class PeoplePickerComponent {
  @Input() placeholder = '';
}
