import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [TableModule, CardModule],
  exports: [TableModule, CardModule],
})
export class PrimengModule {}
