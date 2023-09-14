import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  exports: [CommonModule, GridComponent, ReactiveFormsModule, PrimengModule],
})
export class SharedModule {}
