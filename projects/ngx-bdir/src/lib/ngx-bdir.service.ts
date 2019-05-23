import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dir, Lang, DEFAULT_LANGUAGE } from './ngx-bdir.models';
import { RTL_LANGUAGES, DEFAULT_LANG } from './ngx-bdir.tokens';

@Injectable({
  providedIn: 'root'
})
export class NgxBdirService {
  private currentDir;
  private currentDir$: BehaviorSubject<Dir>;

  constructor(
    @Inject(RTL_LANGUAGES) private rtlLangs: Lang[],
    @Optional() @Inject(DEFAULT_LANG) defaultLang: Lang = DEFAULT_LANGUAGE
  ) {
    this.currentDir = this.getDirByLang(defaultLang);
    this.currentDir$ = new BehaviorSubject(this.currentDir);
  }

  setLang(lang: Lang) {
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
    return this.getDir$().pipe(map(dir => (dir === Dir.Rtl ? Dir.Ltr : Dir.Rtl)));
  }

  private getDirByLang(lang: Lang) {
    return this.rtlLangs.includes(lang) ? Dir.Rtl : Dir.Ltr;
  }
}
