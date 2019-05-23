// An ISO639-1 Lang code standard.
export type Lang = string;

export enum Dir {
  Rtl = 'rtl',
  Ltr = 'ltr'
}

export enum Pos {
  Start = 'start',
  End = 'end'
}

export const DEFAULT_LANGUAGE: Lang = 'en';

export const RTL_LANGUAGES_LIST: Lang[] = ['he', 'ar', 'hy', 'dv', 'ff', 'ku', 'fa'];
