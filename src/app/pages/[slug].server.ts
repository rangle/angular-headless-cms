import { PageServerLoad } from '@analogjs/router';
import { getPageBySlug } from '../services/content.service';

export const load = async ({
  params, // params/queryParams from the request
}: PageServerLoad) => {
  const pageData = await getPageBySlug(`/${params ? params['slug'] : ''}`);
  console.log('params', params);

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
