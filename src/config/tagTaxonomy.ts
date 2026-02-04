export const TAG_DEFINITIONS = [
  { slug: 'productivity', title: 'Productivity' },
  { slug: 'career-work', title: 'Career & Work' },
  { slug: 'business-entrepreneurship', title: 'Business & Entrepreneurship' },
  { slug: 'health-wellness', title: 'Health & Wellness' },
  { slug: 'content-creativity', title: 'Content & Creativity' },
  { slug: 'personal-development', title: 'Personal Development' },
  { slug: 'life-skills', title: 'Life Skills' },
  { slug: 'learning', title: 'Learning' },
  { slug: 'relationships-family', title: 'Relationships & Family' },
  { slug: 'money-finance', title: 'Money & Finance' },
  { slug: 'timeless-lessons', title: 'Timeless Lessons' },
  { slug: 'artificial-intelligence', title: 'Artificial Intelligence' },
  { slug: 'books', title: 'Books' },
  { slug: 'technology', title: 'Technology' },
  { slug: 'freelance', title: 'Freelance' },
  { slug: 'tools-resources', title: 'Tools & Resources' }
] as const;

export type TagSlug = (typeof TAG_DEFINITIONS)[number]['slug'];

export const TAG_SLUGS = TAG_DEFINITIONS.map((tag) => tag.slug) as TagSlug[];

export const TAG_SLUG_SET = new Set<string>(TAG_SLUGS);

export const TAG_TITLE_BY_SLUG: Record<TagSlug, string> = Object.fromEntries(
  TAG_DEFINITIONS.map((tag) => [tag.slug, tag.title])
) as Record<TagSlug, string>;
