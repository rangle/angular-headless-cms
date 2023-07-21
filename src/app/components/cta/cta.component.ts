// import { CtaComponent } from '../cta/cta.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  @Input() url: string = '';
  @Input() text: string = '';
  @Input() hasPrimaryCta: boolean = false;
  @Input() isEnabled?: boolean = false;

  constructor() {}

  isMailTo = (url: string) => /^mailto?/i.test(url);
  isHttp = (url: string) => /^http?/i.test(url);
  isAnchor = /^#/i.test(this.url);
  isExternal = this.isHttp(this.url) || this.isMailTo(this.url);

  formattedUrl = this.isExternal
    ? this.url.startsWith('/') || this.isAnchor
      ? this.url
      : `/${this.url}`
    : this.url.length > 0
    ? this.url
    : '/';

  target = this.isMailTo(this.url) ? '_self' : '_blank';
}
