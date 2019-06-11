import { InjectionToken } from '@angular/core';
import { Language } from './b-dir.models';

export const RTL_LANGUAGES = new InjectionToken<Language[]>('Rtl Languages');
export const DEFAULT_LANG = new InjectionToken<Language>('Default Lang');
