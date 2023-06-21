import { Component } from '@angular/core';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { RoomsComponent } from '../components/rooms/rooms.component';
import { BookFormComponent } from '../components/book-form/book-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent, BookFormComponent, RoomsComponent],
  template: `<app-hero-slider></app-hero-slider><app-book-form></app-book-form
    ><app-rooms></app-rooms>`,
})
export default class HomeComponent {}
