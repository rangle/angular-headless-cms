import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Input,
  ViewChild,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';
import { DynamicComponentsService } from './build-component.service';
import { ComponentTemplate, LoadedRenderItems } from './render-template.types';

export const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';
@Component({
  selector: 'app-render-template',
  template: ` <ng-template #container></ng-template> `,
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderTemplateComponent implements OnChanges {
  @Input({ required: true }) components: ComponentTemplate[];
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRefs: ComponentRef<any>[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private dynamicComponentsService: DynamicComponentsService
  ) {}

  ngOnDestroy() {
    this.componentRefs.forEach((ref) => ref.destroy());
    if (this.container) {
      this.container.clear();
    }
  }

  ngOnChanges() {
    if (!this.components || this.components.length === 0) {
      return;
    }

    this.componentRefs.forEach((ref) => ref.destroy()); // clear all refs

    const loadedComponentModules = this.components
      .filter((componentData) =>
        this.dynamicComponentsService.checkComponentMap(componentData, 'dev')
      )
      .map(async (componentTemplate) => {
        const itemRef =
          await this.dynamicComponentsService.loadComponentConstructor(
            componentTemplate.name
          );
        return { renderItemRef: itemRef, componentTemplate };
      });

    this.container?.clear(); // clear the container that holds the components
    this.renderComponents(loadedComponentModules);
  }

  async renderComponents(items: Promise<LoadedRenderItems>[]) {
    const allSettledItems = await Promise.allSettled(items);
    for (let item of allSettledItems) {
      if (isFulfilled(item)) {
        const newComponent = this.dynamicComponentsService.createComponent(
          this.container,
          item.value.componentTemplate,
          item.value.renderItemRef
        );
        if (newComponent) {
          this.componentRefs.push(newComponent);
        }
      } else {
        // is rejected
        console.error(item.reason);
      }
    }
    this.cdr.markForCheck();
  }
}
