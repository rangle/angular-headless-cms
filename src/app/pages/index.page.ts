import { Component } from '@angular/core';
import { RenderTemplateComponent } from '../../build-component/build-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RenderTemplateComponent],
  template: `<app-render-template
    [components]="pageData.children"
  ></app-render-template>`,
})
export default class HomeComponent {
  pageData = {
    children: [
      {
        name: 'textContainer',
        componentData: {
          text: 'heading!',
        },
      },
    ],
  };
}
