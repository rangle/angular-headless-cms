import { Injectable } from '@angular/core';
import { from } from 'rxjs';

const contentful = require('contentful/contentful.node');
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  client = contentful.createClient({
    space: 'bk8otr7phnfm',
    accessToken: 'NDf_OoMjD1VJo0siqo5Xy3jJy1pWCYLJgH089z7jt34',
    environment: 'master',
  });

  getPageBySlug(slug: string) {
    return from(
      this.client.getEntries({
        content_type: 'page',
        'fields.slug': slug,
      })
    );
  }

  constructor() {}
}
