import { createClient, Entry } from 'contentful-management';

export const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchEntries<T>(contentType: string): Promise<Entry<T>[]> {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID as string);
  const environment = await space.getEnvironment('master'); // or your specific environment

  const entries = await environment.getEntries<T>({
    content_type: contentType,
  });

  return entries.items;
}
