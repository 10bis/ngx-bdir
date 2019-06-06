import { InjectionToken } from '@angular/core';
import { Lang } from './b-dir.models';

export const RTL_LANGUAGES = new InjectionToken<Lang[]>('Rtl Languages');
export const DEFAULT_LANG = new InjectionToken<Lang>('Default Lang');
