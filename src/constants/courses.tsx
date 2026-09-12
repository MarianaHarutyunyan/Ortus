import { Coins, Activity, Sparkles, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Course = {
  key: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  itemCount: number;
};

export type AgeGroup = {
  key: string;
  color: string;
};

export const COURSES: Course[] = [
  {
    key: "finance",
    icon: Coins,
    color: "#C27B4F",
    bg: "rgba(194, 123, 79, 0.08)",
    itemCount: 4,
  },
  {
    key: "body",
    icon: Activity,
    color: "#7A8D6A",
    bg: "rgba(122, 141, 106, 0.1)",
    itemCount: 3,
  },
  {
    key: "emotional",
    icon: Sparkles,
    color: "#D6B98C",
    bg: "rgba(214, 185, 140, 0.15)",
    itemCount: 3,
  },
  {
    key: "narek",
    icon: ScrollText,
    color: "#13294B",
    bg: "rgba(19, 41, 75, 0.06)",
    itemCount: 4,
  },
];
