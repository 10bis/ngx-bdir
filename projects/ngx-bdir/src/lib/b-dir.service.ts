import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Direction, Language, DEFAULT_LANGUAGE } from './b-dir.models';
import { RTL_LANGUAGES, DEFAULT_LANG } from './b-dir.tokens';

@Injectable()
export class BDirService {
  private currentDir;
  private currentDir$: BehaviorSubject<Direction>;

  constructor(
    @Inject(RTL_LANGUAGES) private rtlLangs: Language[],
    @Optional() @Inject(DEFAULT_LANG) defaultLang: Language = DEFAULT_LANGUAGE
  ) {
    this.currentDir = this.getDirByLang(defaultLang);
    this.currentDir$ = new BehaviorSubject(this.currentDir);
  }

  setLang(lang: Language) {
    this.setDir(this.getDirByLang(lang));
  }

  setDir(dir) {
    if (dir !== this.currentDir) {
      this.currentDir = dir;
      this.currentDir$.next(dir);
    }
  }

  getDir$() {
    return this.currentDir$.asObservable();
  }

  getOppositeDir$() {
    return this.getDir$().pipe(map(dir => (dir === Direction.Rtl ? Direction.Ltr : Direction.Rtl)));
  }

  private getDirByLang(lang: Language) {
    return this.rtlLangs.includes(lang) ? Direction.Rtl : Direction.Ltr;
  }
}
