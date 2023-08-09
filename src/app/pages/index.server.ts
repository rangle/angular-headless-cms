import {
  getPageBySlug,
  transformContentfulData,
} from '../services/content.service';

export const load = async () => {
  const pageData = await getPageBySlug('/');

  return transformContentfulData(pageData);
};
