import { BDirService } from './b-dir.service';
import { Direction } from './b-dir.models';
import { of } from 'rxjs';
describe('BDirService', () => {
  let service: BDirService;
  beforeEach(() => {
    service = new BDirService(['he']);
    expect.hasAssertions();
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('should check ', () => {
    it('should set current dir to "undefined" on given dir "undefined"', done => {
      service.setDir(undefined);
      service.getDir$().subscribe(x => {
        expect(x).toBeUndefined();
        done();
      });
    });
    it('should set current dir to "LTR" on given dir "LTR"', done => {
      service.setDir(Direction.Ltr);
      service.setDir(Direction.Rtl);
      service.getDir$().subscribe(x => {
        expect(x).toBe(Direction.Rtl);
        done();
      });
    });
    it('should set current dir to "undefined" on given dir "undefined"', done => {
      service.setDir(Direction.Rtl);
      service.getDir$().subscribe(x => {
        expect(x).toBeDefined();
        done();
      });
    });
  });
  describe('setLang should call setDir', () => {
    it('makes expected calls', () => {
      const spy = spyOn(service, 'setDir');
      service.setLang('en');
      expect(spy).toHaveBeenCalled();
    });
  });
  describe('getOppositeDir$ should call getDir$', () => {
    it('should return "RTL" on given "LTR"', done => {
      spyOn(service, 'getDir$').and.returnValue(of(Direction.Ltr));
      service.getOppositeDir$().subscribe(x => {
        expect(x).toBe(Direction.Rtl);
        done();
      });
    });
    it('should return "LTR" on given "RTL"', done => {
      spyOn(service, 'getDir$').and.returnValue(of(Direction.Rtl));
      service.getOppositeDir$().subscribe(x => {
        expect(x).toBe(Direction.Ltr);
        done();
      });
    });
  });
});
