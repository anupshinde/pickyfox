import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  date: z.string().optional(),
  updated: z.string().optional(),
  excerpt: z.string().optional(),
  canonicalUrl: z.string().optional(),
  featureImage: z.string().optional(),
  featureImageAlt: z.string().optional(),
  featureImageCaption: z.string().optional(),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
  codeinjection_head: z.string().optional(),
  codeinjection_foot: z.string().optional()
});

const posts = defineCollection({
  type: 'content',
  schema: baseSchema
});

const pages = defineCollection({
  type: 'content',
  schema: baseSchema
});

export const collections = { posts, pages };
