import { NgModule } from '@angular/core';
import { RTL_LANGUAGES_LIST } from './b-dir.models';
import {BDirService} from './b-dir.service';
import { RTL_LANGUAGES } from './b-dir.tokens';
import { BDirDirective } from './b-dir.directive';

@NgModule({
  declarations: [BDirDirective],
  imports: [],
  exports: [BDirDirective],
  providers: [
    BDirService,
    { provide: RTL_LANGUAGES, useValue: RTL_LANGUAGES_LIST }
  ]
})
export class BDirModule {}
