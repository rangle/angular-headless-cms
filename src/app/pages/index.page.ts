import { Component } from '@angular/core';
import { RenderTemplateComponent } from '../../build-component/build-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RenderTemplateComponent],
  template: `<app-render-template [components]="pageData.children" />`,
})
export default class HomeComponent {
  pageData = {
    header: 'Dynamic Renderer',
    // #8 array of dynamic components, same as other children arrays
    children: [
      {
        name: 'mainHero',
        componentData: {
          heading: 'hello',
          body: 'body',
          eyebrow: 'eyebrow',
        },
      },
      // {
      //   name: 'postPreview',
      //   componentData: {
      //     title: 'When a tree falls in the forest what happens?',
      //     subtitle:
      //       'The forest critters loose a long time friend but gain a new one',
      //     shortName: 'trees',
      //     author: 'Lars Hoff',
      //     dateAsString: 'May 31, 2023',
      //   },
      // },
    ],
  };
}
