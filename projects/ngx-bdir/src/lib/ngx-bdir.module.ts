import { NgModule } from '@angular/core';
import { RTL_LANGUAGES_LIST } from './ngx-bdir.models';
import { RTL_LANGUAGES } from './ngx-bdir.tokens';
import { BdirDirective } from './bdir.directive';

@NgModule({
  declarations: [BdirDirective],
  imports: [],
  exports: [BdirDirective],
  providers: [{ provide: RTL_LANGUAGES, useValue: RTL_LANGUAGES_LIST }]
})
export class NgxBdirModule {}
