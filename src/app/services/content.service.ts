import { Injectable } from '@angular/core';
// import { createClient } from 'contentful';
import { from } from 'rxjs';
import * as contentful from 'contentful';

const createClient = contentful.createClient
  ? contentful.createClient
  : (contentful as any).default.createClient;
// @Injectable({
//   providedIn: 'root',
// })
// export class ContentService {
const client = createClient({
  space: 'bk8otr7phnfm',
  accessToken: 'NDf_OoMjD1VJo0siqo5Xy3jJy1pWCYLJgH089z7jt34',
  environment: 'master',
});

export const getPageBySlug = (slug: string) =>
  client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
  });

//   constructor() {}
// }
