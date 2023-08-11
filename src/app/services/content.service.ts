import * as contentful from 'contentful';

const createClient = contentful.createClient
  ? contentful.createClient
  : (contentful as any).default.createClient;

const client = createClient({
  space: 'bk8otr7phnfm',
  accessToken: 'NDf_OoMjD1VJo0siqo5Xy3jJy1pWCYLJgH089z7jt34',
  environment: 'master',
});

export const getPageBySlug = (slug: string) =>
  client.getEntries({
    include: 2,
    content_type: 'page',
    'fields.slug': slug,
  });

export const getNavigation = () =>
  client.getEntries({
    include: 2,
    content_type: 'navigation',
  });

export const getFooter = () =>
  client.getEntries({
    include: 2,
    content_type: 'footer',
  });

export const transformContentfulData = (pageData: any) => {
  const components = pageData.items[0]?.fields.sections || [pageData.items[0]];

  return components.map((section: any) => {
    const componentData: any = {};
    Object.keys(section.fields).forEach((fieldName: any) => {
      // Format image url
      if (section.fields[fieldName]?.sys?.type === 'Asset') {
        componentData[fieldName] = section.fields[fieldName].fields.file.url;
        // Format nested component data
      } else if (section.fields[fieldName]?.sys?.type === 'Entry') {
        componentData[fieldName] = section.fields[fieldName]?.fields;
        // Format an array of nested component data
      } else if (section.fields[fieldName].constructor === Array) {
        componentData[fieldName] = section.fields[fieldName].map(
          (nestedComponent: any) => nestedComponent.fields
        );
      } else {
        componentData[fieldName] = section.fields[fieldName];
      }
    });

    return {
      name: section.sys.contentType.sys.id,
      componentData,
    };
  });
};
