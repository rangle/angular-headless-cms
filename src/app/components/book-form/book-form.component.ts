import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { PeoplePickerComponent } from '../people-picker/people-picker.component';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, DatePickerComponent, PeoplePickerComponent],
  templateUrl: './book-form.component.html',
})
export class BookFormComponent {}
