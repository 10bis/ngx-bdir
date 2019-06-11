// An ISO639-1 Lang code standard.
export type Language = string;

export enum Direction {
  Rtl = 'rtl',
  Ltr = 'ltr'
}

export enum Position {
  Start = 'start',
  End = 'end'
}

export const DEFAULT_LANGUAGE: Language = 'en';

export const RTL_LANGUAGES_LIST: Language[] = ['he', 'ar', 'hy', 'dv', 'ff', 'ku', 'fa'];
