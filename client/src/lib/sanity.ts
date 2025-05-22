
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Fetch projects from Sanity
export const getProjects = async () => {
  return client.fetch(`
    *[_type == "project"] {
      _id,
      title,
      client,
      category,
      description,
      fullDescription,
      technologies,
      "imageUrl": image.asset->url,
      featured
    }
  `);
};

// Fetch services from Sanity
export const getServices = async () => {
  return client.fetch(`
    *[_type == "service"] {
      _id,
      title,
      description,
      icon,
      features
    }
  `);
};
