import { Component, inject } from '@angular/core';
import { RenderTemplateComponent } from '../../build-component/build-component.component';
import { Router } from '@angular/router';
import { injectLoad } from '@analogjs/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { load } from './[slug].server';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RenderTemplateComponent],
  template: `<app-render-template [components]="pageData()" />`,
})
export default class HomeComponent {
  private readonly route = inject(Router);

  readonly slug = this.route.url;

  pageData = toSignal(injectLoad<typeof load>(), { requireSync: true });

  constructor() {}
}
