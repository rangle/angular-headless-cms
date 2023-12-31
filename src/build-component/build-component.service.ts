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

import { MainHeroComponent } from '../app/components/main-hero/main-hero.component';
import { MediaModuleComponent } from '../app/components/media-module/media-module.component';
import { CtaBannerComponent } from '../app/components/cta-banner/cta-banner.component';
import { FeaturedTextComponent } from '../app/components/featured-text/featured-text.component';
import { QuoteComponent } from '../app/components/quote/quote.component';
import { FeaturedItemsComponent } from '../app/components/featured-items/featured-items.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { NavigationComponent } from '../app/components/navigation/navigation.component';

type ComponentMap = {
  [name: string]: {
    loadComponent: () => DynamicItemConstructor;
  };
};

const _dynamicComponentMap: ComponentMap = {
  // #6 component manifest object
  mainHero: {
    loadComponent: () => MainHeroComponent,
  },
  mediaModule: {
    loadComponent: () => MediaModuleComponent,
  },
  ctaBanner: {
    loadComponent: () => CtaBannerComponent,
  },
  featuredText: {
    loadComponent: () => FeaturedTextComponent,
  },
  quote: {
    loadComponent: () => QuoteComponent,
  },
  featuredItems: {
    loadComponent: () => FeaturedItemsComponent,
  },
  footer: {
    loadComponent: () => FooterComponent,
  },
  navigation: {
    loadComponent: () => NavigationComponent,
  },
};

const dynamicComponentMap = new Map(Object.entries(_dynamicComponentMap));
@Injectable({ providedIn: 'root' })
export class DynamicComponentsService {
  constructor(public injector: Injector) {}

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
      });
      // if resolver data found apply to the component
    } else {
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
