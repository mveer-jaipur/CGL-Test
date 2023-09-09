import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class PrimengModule {}
