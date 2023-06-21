import { Component } from '@angular/core';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { RoomsComponent } from '../components/rooms/rooms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent, RoomsComponent],
  template: `<app-hero-slider></app-hero-slider><app-rooms></app-rooms>`,
})
export default class HomeComponent {}
