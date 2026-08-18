export const ROUTES = {
  HOME: "/",
  ABOUT: "/",
  COURSES: "/courses",
  ARTICLES: "/articles",
  ARTICLE_DETAIL: "/articles/:slug",
  CONTACT: "/contact-us",
} as const;

export const articleDetailPath = (slug: string) => `/articles/${slug}`;
