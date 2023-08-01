import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  client = createClient({
    space: 'bk8otr7phnfm',
    accessToken: 'NDf_OoMjD1VJo0siqo5Xy3jJy1pWCYLJgH089z7jt34',
    environment: 'master',
  });

  getPageBySlug(slug: string) {
    return from(
      this.client.getEntries<any>({
        content_type: 'page',
        'fields.slug': slug,
      })
    );
  }

  constructor() {}
}
