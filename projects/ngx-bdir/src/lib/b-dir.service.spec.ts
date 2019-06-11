import { TestBed } from '@angular/core/testing';
import { Language } from './b-dir.models';
import { BDirService } from './b-dir.service';
import { RTL_LANGUAGES } from './b-dir.tokens';
describe('BDirService', () => {
  let service: BDirService;
  beforeEach(() => {
    service = new BDirService(['he']);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('setLang', () => {
    it('makes expected calls', () => {
      spyOn(service, 'setDir').and.callThrough();
      service.setLang('en');
      expect(service.setDir).toHaveBeenCalled();
    });
  });
  describe('getOppositeDir$', () => {
    it('makes expected calls', () => {
      spyOn(service, 'getDir$').and.callThrough();
      service.getOppositeDir$();
      expect(service.getDir$).toHaveBeenCalled();
    });
  });
});
