import { Component, inject, Input } from '@angular/core';
import { RenderTemplateComponent } from '../../build-component/build-component.component';
// import { ContentService } from '../services/content.service';
import { Router } from '@angular/router';
import { LoadResult, injectLoad } from '@analogjs/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { load } from './index.server';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RenderTemplateComponent],
  template: `<app-render-template [components]="pageData().children" />`,
})
export default class HomeComponent {
  private readonly route = inject(Router);

  readonly slug = this.route.url;

  pageData = toSignal(injectLoad<typeof load>(), { requireSync: true });

  // pageData = {
  //   header: 'Dynamic Renderer',
  //   // #8 array of dynamic components, same as other children arrays
  //   children: [
  //     {
  //       name: 'mainHero',
  //       componentData: {
  //         heroImage:
  //           'https://headless-workshop.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbhgv5hzu%2Fproduction%2Fdf779a75311428c758ae465788c29456bbb0ba04-6000x4000.jpg%3Frect%3D695%2C0%2C4611%2C4000%26w%3D905%26h%3D785%26fit%3Dcrop%26auto%3Dformat&w=2048&q=75',
  //         heroImageAlt: 'plants',
  //         heading: 'Welcome to Pangea',
  //         body: "Transform your home into an oasis of beauty with Pangea, your partner for all your gardening needs. We'll help you create a lush, vibrant, and thriving space that truly reflects your unique style.",
  //         cta: {
  //           text: 'Our services',
  //           url: '/',
  //           isEnabled: true,
  //           hasPrimaryCta: true,
  //         },
  //       },
  //     },
  //     {
  //       name: 'mediaModule',
  //       componentData: {
  //         image:
  //           'https://headless-workshop.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fbhgv5hzu%2Fproduction%2F50223dd66ad0cff26e7cdeda38ed839d3e45da08-3181x4772.jpg%3Frect%3D0%2C796%2C3181%2C3181%26w%3D350%26h%3D350%26fit%3Dcrop%26auto%3Dformat&w=2048&q=75',
  //         imageAlt: 'plants',
  //         heading: 'Landscaping and Design',
  //         body: "Our team of expert landscapers will work closely with you to bring your dream garden to life. Whether you desire a tranquil Zen garden, a colorful flowerbed, or a sustainable vegetable patch, we'll craft a custom design that perfectly matches your vision.",
  //         isDark: true,
  //       },
  //     },
  //   ],
  // };

  constructor() {}
}
