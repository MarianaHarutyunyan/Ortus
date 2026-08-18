import { am } from './am';
import { en } from './en';
import type { Language, Translations } from '../types/language';

export const translations: Record<Language, Translations> = { am, en };

export function t(key: string, lang: Language): string {
  return translations[lang]?.[key] ?? translations['en']?.[key] ?? key;
}

export { am, en };
