import {
  Type,
  ComponentRef,
  Injectable,
  Injector,
  NgModuleRef,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';

import {
  ComponentTemplate,
  DynamicModule,
  LoadedRenderItem,
  isComponentConstructor,
  isModuleConstructor,
  DynamicComponent,
  DynamicItemConstructor,
} from '../types/build-component.types';

type ComponentMap = {
  [name: string]: {
    loadComponent: () => Promise<DynamicItemConstructor>;
  };
};

const _dynamicComponentMap: ComponentMap = {
  // #6 component manifest object
  mainHero: {
    loadComponent: () =>
      import('../app/components/main-hero/main-hero.component').then(
        (m) => m.MainHeroComponent
      ),
  },
};

const dynamicComponentMap = new Map(Object.entries(_dynamicComponentMap));

@Injectable({ providedIn: 'root' })
export class DynamicComponentsService {
  constructor(public injector: Injector) {}

  async loadComponentConstructor(name: string) {
    const loadedItem = dynamicComponentMap.get(name);
    console.log('yeee', loadedItem);

    if (!loadedItem) {
      throw new Error(`Component not found for: ${name};`);
    }

    const loadedComponentConstructor = await loadedItem.loadComponent();

    if (isModuleConstructor(loadedComponentConstructor)) {
      return createNgModule<DynamicModule>(
        loadedComponentConstructor,
        this.injector
      );
    } else {
      console.log('#7 standalone', loadedComponentConstructor);
      // stand alone component
      return loadedComponentConstructor;
    }
  }

  createComponent(
    container: ViewContainerRef,
    componentTemplate: ComponentTemplate,
    renderItem: LoadedRenderItem
  ) {
    console.log('#5 createComponent');
    let componentRef: ComponentRef<any>;
    let resolverData: any;

    if (!isComponentConstructor(renderItem)) {
      console.log('#6 if');
      resolverData =
        renderItem.instance.componentDataResolver &&
        renderItem.instance.componentDataResolver(
          componentTemplate.componentData || {}
        );
      componentRef = container.createComponent(renderItem.instance.entry, {
        ngModuleRef: renderItem,
      });
      // if resolver data found apply to the component
    } else {
      console.log('#6 else');
      componentRef = container.createComponent(renderItem);
      resolverData =
        componentRef.instance.componentDataResolver &&
        componentRef.instance.componentDataResolver(
          componentTemplate.componentData || {}
        );
    }

    if (resolverData) {
      Object.keys(resolverData).forEach(
        (key) => (componentRef.instance[key] = resolverData[key])
      );
    }

    container.insert(componentRef.hostView);
    return componentRef;
  }

  checkComponentMap(componentData: any, environment: string): boolean {
    if (
      !dynamicComponentMap.has(componentData.name) &&
      environment !== 'prod'
    ) {
      console.error(
        `----- Component name "${componentData.name}" does not exist.`
      );
    }

    return (
      Boolean(componentData) &&
      Boolean(componentData.name) &&
      dynamicComponentMap.has(componentData.name)
    );
  }
}
