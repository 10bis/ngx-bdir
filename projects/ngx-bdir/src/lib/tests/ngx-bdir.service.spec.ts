import { RTL_LANGUAGES_LIST } from '../ngx-bdir.models';
import { NgxBdirService } from '../ngx-bdir.service';

describe('NgxBdirService', () => {
  const rtlLangs = RTL_LANGUAGES_LIST;
  let directionService;
  beforeEach(() => {
    expect.hasAssertions();
  });

  it('should be created with default lang', () => {
    directionService = new NgxBdirService(rtlLangs);
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('ltr');
    });
  });

  it('should be created with rtl language', () => {
    directionService = new NgxBdirService(rtlLangs, 'he');
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });

  it('should set language to rtl lang', () => {
    directionService = new NgxBdirService(rtlLangs);
    directionService.setLang('he');
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });

  it('should be give the opposite language', () => {
    directionService = new NgxBdirService(rtlLangs);
    const dir$ = directionService.getOppositeDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });
});
