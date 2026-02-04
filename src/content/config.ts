import { defineCollection, z } from 'astro:content';
import { TAG_SLUG_SET, TAG_SLUGS } from '../config/tagTaxonomy';

const tagSlugSchema = z.string().refine((value) => TAG_SLUG_SET.has(value), {
  message: `Invalid tag slug. Use one of: ${TAG_SLUGS.join(', ')}`
});

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
  tags: z.array(tagSlugSchema).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional()
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
