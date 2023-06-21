import { Component } from '@angular/core';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent],
  template: `<app-hero-slider></app-hero-slider>`,
})
export default class HomeComponent {}
