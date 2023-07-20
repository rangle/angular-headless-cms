import { Component } from '@angular/core';
import { DynamicTemplatesModule } from '../dynamic-renderer/feature/dynamic-templates.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DynamicTemplatesModule],
  template: `<app-render-template [components]="pageData.children" />`,
})
export default class HomeComponent {
  pageData = {
    header: 'Dynamic Renderer',
    // #8 array of dynamic components, same as other children arrays
    children: [
      {
        name: 'postPreview',
        componentData: {
          title: 'When a tree falls in the forest what happens?',
          subtitle:
            'The forest critters loose a long time friend but gain a new one',
          shortName: 'trees',
          author: 'Lars Hoff',
          dateAsString: 'May 31, 2023',
        },
      },
    ],
  };
}
