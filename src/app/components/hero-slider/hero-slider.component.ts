import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Swiper, EffectFade, Autoplay } from 'swiper';

SwiperCore.use([EffectFade, Autoplay]);

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './hero-slider.component.html',
})
export class HeroSliderComponent {
  slides = [
    {
      title: 'Your Luxury Hotel For Vacation',
      background: '/hero-slider/1.jpg',
      btnText: 'See our rooms',
    },
    {
      title: 'Your Luxury Hotel For Vacation',
      background: '/hero-slider/2.jpg',
      btnText: 'See our rooms',
    },
    {
      title: 'Your Luxury Hotel For Vacation',
      background: '/hero-slider/3.jpg',
      btnText: 'See our rooms',
    },
  ];
}
