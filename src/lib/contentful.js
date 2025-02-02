import contentful from "contentful";

console.log('DEBUG: ' + import.meta.env.CONTENTFUL_PREVIEW_TOKEN);

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});


export async function fetchEntries() {
    const entries = await contentfulClient.getEntries({ content_type: 'blogPost' });
    return entries.items;
}

export async function fetchEntryBySlug(slug) {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1
    });
    return entries.items[0];
  }

  export async function fetchAllSlugs() {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      select: 'fields.slug'
    });
    return entries.items.map((entry) => entry.fields.slug);
  }