import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BDirDirective } from '../b-dir.directive';
import { RTL_LANGUAGES_LIST } from '../b-dir.models';
import { BDirService } from '../b-dir.service';
import { RTL_LANGUAGES } from '../b-dir.tokens';

@Component({
  template: `
    <div id="default-dir" [bdir]="'start'"></div>
    <div id="opposite-dir" [bdir]="'end'"></div>
  `
})
class TestDirComponent {}

describe('BdirDirective', () => {
  let fixture;
  let component;
  let oppositeDirElem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDirComponent, BDirDirective],
      providers: [BDirService, { provide: RTL_LANGUAGES, useValue: RTL_LANGUAGES_LIST }]
    }).compileComponents();
    fixture = TestBed.createComponent(TestDirComponent);
    component = fixture.componentInstance;
  });

  it('should create a div with default direction', () => {
    fixture.detectChanges();
    const defaultDirElem = fixture.debugElement.query(By.css('#default-dir'));
    expect(defaultDirElem.attributes.dir).toEqual('ltr');
  });

  it('should create a div with default direction', () => {
    fixture.detectChanges();
    oppositeDirElem = fixture.debugElement.query(By.css('#opposite-dir'));
    expect(oppositeDirElem.attributes.dir).toEqual('rtl');
  });
});
