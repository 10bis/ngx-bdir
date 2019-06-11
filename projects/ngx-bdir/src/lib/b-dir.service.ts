import { Injectable, Inject, Optional } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Direction, Language, DEFAULT_LANGUAGE } from './b-dir.models';
import { RTL_LANGUAGES, DEFAULT_LANG } from './b-dir.tokens';

@Injectable()
export class BDirService {
  private currentDir: Direction;
  private currentDir$: BehaviorSubject<Direction>;

  constructor(
    @Inject(RTL_LANGUAGES) private rtlLangs: Language[],
    @Optional() @Inject(DEFAULT_LANG) defaultLang: Language = DEFAULT_LANGUAGE
  ) {
    this.currentDir = this.getDirByLang(defaultLang);
    this.currentDir$ = new BehaviorSubject(this.currentDir);
  }

  /**
   * Setting the current language which will determine the direction value.
   */
  setLang(lang: Language): void {
    this.setDir(this.getDirByLang(lang));
  }

  /**
   * Set the current direction value.
   */
  setDir(dir: Direction): void {
    if (dir !== this.currentDir) {
      this.currentDir = dir;
      this.currentDir$.next(dir);
    }
  }

  /**
   * get the current direction value as observable.
   */
  getDir$(): Observable<Direction> {
    return this.currentDir$.asObservable();
  }

  /**
   * get the opposite direction value as observable.
   */
  getOppositeDir$(): Observable<Direction> {
    return this.getDir$().pipe(map(dir => (dir === Direction.Rtl ? Direction.Ltr : Direction.Rtl)));
  }

  private getDirByLang(lang: Language): Direction {
    return this.rtlLangs.includes(lang) ? Direction.Rtl : Direction.Ltr;
  }
}
