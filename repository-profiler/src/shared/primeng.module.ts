import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
  exports: [
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule {}
