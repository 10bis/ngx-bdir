import { BDirService } from './b-dir.service';
import { Direction } from './b-dir.models';
import { of } from 'rxjs';
describe('BDirService', () => {
  let service: BDirService;
  beforeEach(() => {
    service = new BDirService(['he']);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('setLang should call setDir', () => {
    it('makes expected calls', () => {
      const spy = spyOn(service, 'setDir');
      service.setLang('en');
      expect(spy).toHaveBeenCalled();
    });
  });
  describe('getOppositeDir$ should call getDir$', () => {
    it('makes expected calls', () => {
      const spy = spyOn(service, 'getDir$').and.returnValue(of(Direction.Ltr));
      service.getOppositeDir$().subscribe();
      expect(spy).toHaveBeenCalled();
    });
  });
});
