import { RTL_LANGUAGES_LIST } from '../b-dir.models';
import { BDirService } from '../b-dir.service';

describe('BDirService', () => {
  const rtlLangs = RTL_LANGUAGES_LIST;
  let directionService;
  beforeEach(() => {
    expect.hasAssertions();
  });

  it('should be created with default lang', () => {
    directionService = new BDirService(rtlLangs);
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('ltr');
    });
  });

  it('should be created with rtl language', () => {
    directionService = new BDirService(rtlLangs, 'he');
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });

  it('should set language to rtl lang', () => {
    directionService = new BDirService(rtlLangs);
    directionService.setLang('he');
    const dir$ = directionService.getDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });

  it('should be give the opposite language', () => {
    directionService = new BDirService(rtlLangs);
    const dir$ = directionService.getOppositeDir$();
    dir$.subscribe(dir => {
      expect(dir).toEqual('rtl');
    });
  });
});
