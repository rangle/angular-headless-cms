import { PageServerLoad } from '@analogjs/router';
import {
  getPageBySlug,
  transformContentfulData,
} from '../services/content.service';

export const load = async ({
  params, // params/queryParams from the request
}: PageServerLoad) => {
  const pageData = await getPageBySlug(`/${params ? params['slug'] : ''}`);

  return transformContentfulData(pageData);
};
