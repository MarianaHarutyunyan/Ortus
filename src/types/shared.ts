export interface ValueCard {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface AgeGroup {
  nameKey: string;
  ageRange: string;
  descriptionKey: string;
}

export interface LearningDirection {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface CourseCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  ageRange: string;
  icon: string;
  color: string;
}

export interface TeamMember {
  nameKey: string;
  roleKey: string;
  bioKey: string;
}
