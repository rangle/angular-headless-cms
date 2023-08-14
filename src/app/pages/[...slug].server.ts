import { PageServerLoad } from '@analogjs/router';
import {
  getPageBySlug,
  getNavigation,
  getFooter,
  transformContentfulData,
} from '../services/content.service';

export const load = async ({
  params, // params/queryParams from the request
}: PageServerLoad) => {
  const pageData = await getPageBySlug(
    params ? `/${params['slug'] === 'index' ? '' : params['slug']}` : ''
  );

  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return transformContentfulData(navigationData).concat(
    transformContentfulData(pageData),
    transformContentfulData(footerData)
  );
};
