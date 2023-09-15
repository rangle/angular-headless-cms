import {
  ComponentRef,
  Injectable,
  Injector,
  ViewContainerRef,
  createNgModule,
  ApplicationRef
} from '@angular/core';

import {
  ComponentTemplate,
  DynamicModule,
  LoadedRenderItem,
  isComponentConstructor,
  isModuleConstructor,
  DynamicItemConstructor,
} from '../types/build-component.types';

type ComponentMap = {
  [name: string]: {
    loadComponent: () => DynamicItemConstructor | Promise<DynamicItemConstructor>;
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
  mediaModule: {
    loadComponent: () => import('../app/components/media-module/media-module.component')
      .then((m) => m.MediaModuleComponent),
  },
  ctaBanner: {
    loadComponent: () => import('../app/components/cta-banner/cta-banner.component')
      .then((m) => m.CtaBannerComponent),
  },
  featuredText: {
    loadComponent: () => import('../app/components/featured-text/featured-text.component')
      .then((m) => m.FeaturedTextComponent),
  },
  quote: {
    loadComponent: () => import('../app/components/quote/quote.component')
      .then((m) => m.QuoteComponent),
  },
  featuredItems: {
    loadComponent: () => import('../app/components/featured-items/featured-items.component')
      .then((m) => m.FeaturedItemsComponent),
  },
  footer: {
    loadComponent: () => import('../app/components/footer/footer.component')
      .then((m) => m.FooterComponent),
  },
  navigation: {
    loadComponent: () => import('../app/components/navigation/navigation.component')
      .then((m) => m.NavigationComponent),
  },
};

const dynamicComponentMap = new Map(Object.entries(_dynamicComponentMap));
@Injectable({ providedIn: 'root' })
export class DynamicComponentsService {
  constructor(public injector: Injector, private appRef: ApplicationRef) {}

  async loadComponentConstructor(name: string) {
    const loadedItem = dynamicComponentMap.get(name);

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
      // stand alone component
      return loadedComponentConstructor;
    }
  }

  createComponent(
    container: ViewContainerRef,
    componentTemplate: ComponentTemplate,
    renderItem: LoadedRenderItem
  ) {
    let componentRef: ComponentRef<any>;
    let resolverData: any;

    if (!isComponentConstructor(renderItem)) {
      resolverData =
        renderItem.instance.componentDataResolver &&
        renderItem.instance.componentDataResolver(
          componentTemplate.componentData || {}
        );
      componentRef = container.createComponent(renderItem.instance.entry, {
        ngModuleRef: renderItem,
        environmentInjector: this.appRef.injector,
      });
      // if resolver data found apply to the component
    } else {
      componentRef = container.createComponent(renderItem, {
        environmentInjector: this.appRef.injector,
      });
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
    componentRef.hostView.detectChanges();

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
