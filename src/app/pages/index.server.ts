import { getPageBySlug } from '../services/content.service';

export const load = async () => {
  const pageData = await getPageBySlug('/');

  return {
    header: '123',
    children: pageData.items[0]?.fields.sections.map((section: any) => {
      return {
        name: section.sys.contentType.sys.id,
        componentData: section.fields,
      };
    }),
  };
};
