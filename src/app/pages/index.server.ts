import {
  getPageBySlug,
  getNavigation,
  getFooter,
  transformContentfulData,
} from '../services/content.service';

export const load = async () => {
  const pageData = await getPageBySlug('/');

  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return transformContentfulData(navigationData).concat(
    transformContentfulData(pageData),
    transformContentfulData(footerData)
  );
};
