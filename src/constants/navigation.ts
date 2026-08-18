import type { NavItem } from "../types/navigation";
import { ROUTES } from "./routes";

export const NAVIGATION: NavItem[] = [
  {
    labelKey: "nav.about",
    path: ROUTES.ABOUT,
  },
  {
    labelKey: "nav.courses",
    path: ROUTES.COURSES,
  },
  {
    labelKey: "nav.articles",
    path: ROUTES.ARTICLES,
  },
];
